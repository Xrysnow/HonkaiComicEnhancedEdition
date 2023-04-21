class ReaderParam {
    constructor() {
        this.bookIndex = null;
        this.bookTitle = null;
        this.bookDate = null;
        this.bookDesc = null;
        this.bookCoverSrc = null;
        this.imgSrcPrefix = null;
        this.chCoverSrcPrefix = null;
        this.bgSrc = null;
        this.numChapter = null;
        this.chTitles = null;
        this.chPages = null;
        this.hiddenPages = null;
        this.bgmInfo = null;
        this.bgmInfo2 = null;
        this.bgmExtId = null;
        this.i18nString = null;
        this.i18nHtml = null;
        this.fnGetChapterCoverSrc = null;
        this.fnGetImgSrc = null;
        this.editorNote = null;
        this.bookMode = null;
        this.bookModeBlank = null;
        // loudness matching
        this._bgmVolume = [
            -9.86, -7.43, -8.97, -14.48, -9.31,
            -5.78, -15.47, -1.39, -14.51, -16.47,

            -8.50, -12.84, -11.49, -7.69, -11.63,
            0/* 8.25 */, -12.30, -7.80, -14.55, -11.50,

            -15.37, -14.30, 0, -12.19, -14.65,
            -14.17, -14.18, -12.11, -14.47, -12.89,
            //TODO
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
        ];
        this._bgmLoopInfo = {
            28: [5, 23, 1, 1, true],
            45: [0, 1e3, 1, 1, false],
            49: [0, 53, 1, 1, false],
        };
    };
    getBgmVolume(idx) {
        if (this._bgmVolume[idx] == undefined) {
            return 1
        }
        let v = this._bgmVolume[idx]
        if (-100 <= v && v <= 100) {
            return Math.pow(10, v / 20)
        }
        return 1
    };
    addBgmLoopInfo(id, start, end, fadeIn, fadeOut, ignoreFirst) {
        this._bgmLoopInfo[id] = [start, end, fadeIn || 0, fadeOut || 0, ignoreFirst || false]
    };
    getBgmLoopInfo(id) {
        if (!this._bgmLoopInfo[id]) {
            // default
            return [0, 1e5, 1, 1, false]
        }
        return this._bgmLoopInfo[id]
    };
    addBookFirstBlank() {
        if (!this.bookModeBlank) {
            this.bookModeBlank = {}
        }
        if (!this.chPages) {
            return
        }
        for (let i = 0; i < this.chPages.length; i++) {
            if (!this.bookModeBlank[i]) {
                this.bookModeBlank[i] = []
            }
            if (!this.bookModeBlank[i].includes(0)) {
                this.bookModeBlank[i].push(0)
            }
        }
    };
}

/**
 * Reader
 * @param {ReaderParam} param parameter
 */
const Reader = function (param) {
    let bookDesc = param.bookDesc
    let bgSrc = param.bgSrc
    let numChapter = param.numChapter
    let chTitles = param.chTitles
    let chPages = param.chPages
    let hiddenPages = param.hiddenPages
    let bgmExtId = param.bgmExtId
    let i18nString = param.i18nString
    let i18nHtml = param.i18nHtml
    let PARAMETER = param

    const DEBUG_MODE = true
    let LOCAL_MODE = false
    let AUDIO_LOCAL_MODE = true
    let VOICE_LANGUAGE = 'zh'

    const META = document.getElementsByTagName('meta')
    let LANGUAGE = Util.getLanguage()
    this.LANGUAGE = LANGUAGE

    if (LANGUAGE == 'jp') {
        LOCAL_MODE = true
        VOICE_LANGUAGE = 'jp'
    }
    if (META['voice-language']) {
        VOICE_LANGUAGE = META['voice-language'].content
    }
    this.VOICE_LANGUAGE = VOICE_LANGUAGE

    {
        let href = window.location.href.split('/')
        let page = href[href.length - 1]
        page = page.split('?')[0]
        if (page != 'common.html') {
            window.location.href = 'common.html?lang=' + LANGUAGE
        }
    }

    let BOOK_DECRIPTION = '-'
    if (bookDesc[LANGUAGE]) {
        BOOK_DECRIPTION = bookDesc[LANGUAGE]
    }
    let EDITOR_NOTE = null
    if (param.editorNote && param.editorNote[LANGUAGE]) {
        EDITOR_NOTE = param.editorNote[LANGUAGE]
    }

    const BOOK_COVER_SRC = param.bookCoverSrc
    const COVER_SRC_PREFIX = param.chCoverSrcPrefix
    const IMG_SRC_PREFIX = param.imgSrcPrefix
    let HOME_BG_SRC = IMG_SRC_PREFIX + '1/0001.jpg'
    if (bgSrc) {
        HOME_BG_SRC = bgSrc
    }
    let HOME_BG_INDEX = -1

    const NUM_CHAPTER = numChapter
    const CHAPTER_TITLES = chTitles
    const HIDDEN_PAGES = hiddenPages || {}

    let NUM_PAGES = chPages
    if (NUM_PAGES[LANGUAGE]) {
        NUM_PAGES = NUM_PAGES[LANGUAGE]
    }

    const BGM_SINGLE_ID = bgmExtId

    let BGM_INFO = param.bgmInfo || {}
    if (BGM_INFO[LANGUAGE]) {
        BGM_INFO = BGM_INFO[LANGUAGE]
    }
    let BGM_INFO2 = param.bgmInfo2 || {}
    if (BGM_INFO2[LANGUAGE]) {
        BGM_INFO2 = BGM_INFO2[LANGUAGE]
    }

    const MUSIC_LOCAL_SRC_PREFIX = '../res/music/'
    const MUSIC_LOCAL_SRC_POSTFIX = '.mp3'
    // const VOICE_SRC_POSTFIX = '.wav'
    // const VOICE_ICON = '<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"/></svg>'

    let IS_MOBILE = Util.isMobile()
    this.IS_MOBILE = IS_MOBILE

    const ViewerConfig = { zoomRatio: 0.2 }
    let GlobalViewer = new Viewer(document.getElementById('images'), ViewerConfig)
    let CurrentChapter = -1
    let CurrentBookPage = [-1]
    let CurrentBgMusicID = -1
    let NextBgMusicID = -1
    let ShowHomeIndex = true
    let ShowHomeAbout = false
    let ShowMenu = false
    let ShowConfig = false
    let ShowBGMPlayer = false
    let EnableBGM = true
    let BgMusicHandle = 0
    let BgMusicPlayerHeight = 66
    let BgMusicSpecialPause = false
    let BgMusicVolume = 1
    let BgMusicSwitchFactor = 1
    let GlobalTaskInterval = 10
    let GlobalTasks = []
    let ActiveHidden = {}
    let GlobalKeyHandlers = {}

    function AddGlobalTask(f, tag, intv) {
        if (intv < 1) {
            intv = 1
        }
        GlobalTasks[tag] = [f, intv, 0]
    }
    function RemoveGlobalTask(tag) {
        delete GlobalTasks[tag]
    }
    function RemoveGlobalBgmTasks() {
        let sorted = Object.keys(GlobalTasks).sort()
        for (let k of sorted) {
            if (k.substring(0, 5) == '1-bgm') {
                delete GlobalTasks[k]
            }
        }
    }
    function DoGlobalTasks() {
        let sorted = Object.keys(GlobalTasks).sort()
        for (let k of sorted) {
            const t = GlobalTasks[k]
            if (t[2] % t[1] == 0) {
                t[0]()
            }
            t[2]++
        }
    }
    setInterval(DoGlobalTasks, GlobalTaskInterval)

    const ToggleHomeIndex = function (show) {
        ShowHomeIndex = show
        let obj
        document.getElementById('home-index-wrapper').style.display = ShowHomeIndex ? 'block' : 'none'
        document.getElementById('home-index-bg').style.display = ShowHomeIndex ? 'block' : 'none'
        document.getElementById('home-index').style.display = ShowHomeIndex ? 'flex' : 'none'
        document.getElementById('home-index-return-wrapper').style.display = ShowHomeIndex ? 'block' : 'none'
        obj = document.getElementById('home-footer')
        if (obj) {
            obj.style.display = ShowHomeIndex ? 'none' : 'block'
        }
        // document.getElementById('home-bg').style.display = ShowHomeIndex ? 'none' : 'unset'
    }

    const ToggleHomeAbout = function (show) {
        ShowHomeAbout = show
        document.getElementById('home-about').style.display = show ? 'flex' : 'none'
    }

    const ToggleGallery = function (show) {
        document.getElementById('gallery').style.display = show ? 'block' : 'none'
    }

    const ToggleBook = function (show) {
        document.getElementById('book-wrapper').style.display = show ? 'flex' : 'none'
        document.getElementById('book-cursor-wrapper').style.display = show ? 'flex' : 'none'
    }

    const ToggleHome = function (show) {
        document.getElementById('home').style.display = show ? 'block' : 'none'
    }

    const ToggleMenu = function (show) {
        ShowMenu = show
        let wrapper = document.getElementById('footbar-wrapper')
        wrapper.style.display = show ? 'block' : 'none'
        if (IS_MOBILE) {
            let container = document.getElementById('footbar-container')
            container.style.transform = show ? 'translateY(-100%)' : 'translateY(0)'
        }
        if (show) {
            let bookMode = GetBookMode()
            let prevPage = document.getElementById('menu-prev-page')
            let nextPage = document.getElementById('menu-next-page')
            let gotoTop = document.getElementById('menu-goto-top')
            let gotoBottom = document.getElementById('menu-goto-bottom')
            if (bookMode == 'rl' || bookMode == 'lr') {
                prevPage.style.display = 'flex'
                nextPage.style.display = 'flex'
                gotoTop.style.display = 'none'
                gotoBottom.style.display = 'none'
            } else {
                prevPage.style.display = 'none'
                nextPage.style.display = 'none'
                gotoTop.style.display = 'flex'
                gotoBottom.style.display = 'flex'
            }
        }
    }

    const ToggleConfig = function (show) {
        ShowConfig = show
        document.getElementById('menu-config-window').style.display = show ? 'block' : 'none'
    }

    const ToggleBGMPlayer = function (show) {
        if (!EnableBGM) {
            return
        }
        ShowBGMPlayer = show
        document.getElementById('bgm-player-container').style.display = show ? 'block' : 'none'
    }

    const ClearBgMusicHandle = function () {
        if (BgMusicHandle) {
            clearInterval(BgMusicHandle)
            BgMusicHandle = 0
        }
        NextBgMusicID = -1
    }

    const SetBgMusicHandle = function (id, height, time) {
        ClearBgMusicHandle()
        BgMusicSwitchFactor = 1
        NextBgMusicID = id
        let counter = 0
        const interval = 10
        BgMusicHandle = setInterval(function () {
            counter += interval
            BgMusicSwitchFactor = Math.max(1 - counter / time, 0)
            if (CurrentBgMusicID == id) {
                BgMusicSwitchFactor = 1
            }
            if (counter >= time) {
                BgMusicSwitchFactor = 1
                SetBGMPlayer(false, id, height)
                ClearBgMusicHandle()
            }
            if (DEBUG_MODE) {
                document.getElementById('menu-next-text').innerText = Math.floor(BgMusicSwitchFactor * 100)
            }
        }, interval)
    }

    const RemoveBGMPlayer = function () {
        ToggleBGMPlayer(false)
        ClearBgMusicHandle()
        CurrentBgMusicID = -1
        let container = document.getElementById('bgm-player-container')
        let child = container.firstElementChild
        while (child) {
            child.remove()
            child = container.firstElementChild
        }
        console.log('remove bgm')
    }

    const SetBGMPlayer = function (isList, id, height) {
        if (!EnableBGM || BgMusicSpecialPause) {
            return
        }
        if (CurrentBgMusicID == id) {
            return
        }
        RemoveBGMPlayer()
        if (id < 0) {
            return
        }
        CurrentBgMusicID = id
        BgMusicSwitchFactor = 1
        let container = document.getElementById('bgm-player-container')
        if (!AUDIO_LOCAL_MODE) {
            let frame = document.createElement('iframe')
            frame.id = 'bgm-player'
            frame.allow = 'autoplay'
            frame.frameBorder = 'no'
            if (isList) {
                frame.src = GetMusicListSrc(id, height)
            } else {
                frame.src = GetMusicSingleSrc(id, height)
            }
            container.appendChild(frame)
        } else {
            let player = document.createElement('audio')
            player.id = 'bgm-player'
            player.loop = true
            player.autoplay = true
            player.controls = true
            player.volume = 0
            let src = MUSIC_LOCAL_SRC_PREFIX + id + MUSIC_LOCAL_SRC_POSTFIX
            player.src = src
            player.bgm_id = id
            //
            let info = document.getElementById('footbar-bgm-info')
            info.innerHTML = '　'
            if (BgmGlobalInfo && BgmGlobalInfo[id]) {
                info.innerHTML = 'BGM: ' + BgmGlobalInfo[id][0]
                if (BgmGlobalInfo[id][1]) {
                    info.innerHTML += ' / ' + BgmGlobalInfo[id][1]
                }
            }
            //
            container.appendChild(player)
            // set volume realtime
            RemoveGlobalBgmTasks()
            AddGlobalTask(function () {
                let p = document.getElementById('bgm-player')
                if (!p || p.bgm_id != id) {
                    return
                }
                let base = PARAMETER.getBgmVolume(id - 1) * BgMusicVolume
                let info = PARAMETER.getBgmLoopInfo(id)
                let factor = BgMusicSwitchFactor
                if (info) {
                    const start = info[0]
                    const end = info[1]
                    let curr = p.currentTime
                    let target = MathUtil.clampLoop(curr, start, end, info[4] || false)
                    if (Math.abs(target - curr) > 0.01) {
                        p.currentTime = target
                    }
                    let fadeFactor = MathUtil.getFadeFactor(curr, start, end, info[2], info[3])
                    factor = Math.min(factor, fadeFactor)
                }
                p.volume = factor * base
                if (DEBUG_MODE) {
                    document.getElementById('menu-prev-text').innerText = Math.floor(factor * 100)
                }
            }, '1-bgm-' + id, 1)
        }
        //
        console.log('change bgm to ' + id)
    }

    const SetHomePageBg = function () {
        let src = HOME_BG_SRC
        if (typeof (src) != 'string') {
            if (HOME_BG_INDEX < 0) {
                HOME_BG_INDEX = Math.floor(Math.random() * src.length)
            } else {
                HOME_BG_INDEX += 1
                if (HOME_BG_INDEX >= src.length) {
                    HOME_BG_INDEX = 0
                }
            }
            src = src[HOME_BG_INDEX]
        }
        let obj = document.getElementById('home-bg-wrapper')
        if (obj) {
            obj.style.backgroundImage = 'url(' + src + ')'
        }
    }

    const SetHomePage = function () {
        SetHomePageBg()
        //
        let obj_title = document.getElementById('comic-title')
        if (obj_title) {
            obj_title.innerText = PARAMETER.bookTitle
        }
        obj_title = document.getElementById('page-title')
        if (obj_title) {
            obj_title.innerText = PARAMETER.bookTitle
        }
        //
        let obj_date = document.getElementById('comic-date')
        if (obj_date && PARAMETER.bookDate) {
            obj_date.innerText = PARAMETER.bookDate
        }
        //
        let obj_numpage = document.getElementById('comic-numpage')
        if (obj_numpage && PARAMETER.chPages) {
            let sum = 0
            for (let i = 0; i < PARAMETER.chPages.length; i++) {
                sum += PARAMETER.chPages[i];
            }
            obj_numpage.innerText = sum
        }
        //
        let obj_banner = document.getElementById('home-index-title-banner')
        let obj_img = document.createElement('img')
        obj_img.id = 'home-index-title-img'
        obj_img.src = BOOK_COVER_SRC
        obj_banner.appendChild(obj_img)
        //
        let obj_text = document.getElementById('comic-brief')
        if (obj_text) {
            obj_text.textContent = BOOK_DECRIPTION
        }
        //
        let obj_menu_index = document.getElementById('home-menu-index')
        if (obj_menu_index) {
            obj_menu_index.children[0].onclick = function () {
                ToggleHomeIndex(!ShowHomeIndex)
            }
        }
        //
        let obj_menu_about = document.getElementById('home-menu-about')
        if (obj_menu_about) {
            obj_menu_about.children[0].onclick = function () {
                ToggleHomeAbout(true)
            }
        }
        let obj_about_bg = document.getElementById('home-about-bg')
        if (obj_about_bg) {
            obj_about_bg.onclick = function () {
                ToggleHomeAbout(false)
            }
        }
        //
        let obj_index = document.getElementById('home-index')
        for (let i = 0; i < NUM_CHAPTER; i++) {
            let obj_container = document.createElement('div')
            let obj_a = document.createElement('a')
            let obj_img_wrapper = document.createElement('div')
            let obj_img = document.createElement('img')
            let obj_text = document.createElement('div')
            let obj_hint = document.createElement('div')
            let obj_checkmark = document.createElement('div')
            //
            obj_container.className = 'home-index-container'
            obj_a.className = 'home-index-a'
            obj_a.href = '#'
            obj_a.onclick = function () {
                ToggleHomeIndex(false)
                GotoChapter(i)
                let footbar = document.getElementById('footbar-container')
                if (footbar) {
                    // show footbar once
                    footbar.style.transform = 'translateY(-100%)'
                    let hdl = setTimeout(function () {
                        footbar.style.transform = ''
                        clearTimeout(hdl)
                    }, 1000)
                }
            }
            obj_text.className = 'home-index-banner'
            let ctitle = GetChapterTitle(i)
            let ii = ctitle.indexOf('话 ')
            if (ii < 0) {
                ii = ctitle.indexOf('章 ')
            }
            if (ii < 0) {
                ii = ctitle.indexOf('幕 ')
            }
            if (ii > 0) {
                obj_text.innerHTML = ctitle.substring(0, ii + 1) + '<br/>' + ctitle.substring(ii + 2)
            } else {
                obj_text.textContent = ctitle
            }
            //
            obj_img.className = 'home-index-img'
            obj_img.src = GetChapterCoverSrc(i)
            //
            obj_checkmark.className = 'home-index-checkmark'
            obj_hint.className = 'home-index-hint'
            obj_hint.innerText = '上次阅读'
            //
            obj_img_wrapper.className = 'home-index-img-wrapper'
            obj_img_wrapper.appendChild(obj_img)
            //
            obj_a.appendChild(obj_checkmark)
            obj_a.appendChild(obj_hint)
            obj_a.appendChild(obj_img_wrapper)
            obj_a.appendChild(obj_text)
            obj_container.appendChild(obj_a)
            obj_index.appendChild(obj_container)
        }
        for (let i = 0; i < 20; i++) {
            let obj_i = document.createElement('i')
            obj_index.appendChild(obj_i)
        }
    }

    const SetMenu = function () {
        let obj_menu_next = document.getElementById('menu-next')
        obj_menu_next.onclick = function () {
            if (CurrentChapter < 0 || CurrentChapter >= NUM_PAGES - 1) {
                return
            }
            GotoChapter(CurrentChapter + 1)
        }
        let obj_menu_prev = document.getElementById('menu-prev')
        obj_menu_prev.onclick = function () {
            if (CurrentChapter < 1 || CurrentChapter >= NUM_PAGES) {
                return
            }
            GotoChapter(CurrentChapter - 1)
        }
        let obj_menu_home = document.getElementById('menu-home')
        obj_menu_home.onclick = function () {
            GotoHome()
        }
        let obj_menu_config = document.getElementById('menu-config')
        obj_menu_config.onclick = function (ev) {
            // avoid body.onclick
            ev.stopPropagation()
            ToggleConfig(!ShowConfig)
        }
        //
        document.getElementById('menu-config-window').onclick = function (ev) {
            // avoid body.onclick
            ev.stopPropagation()
        }
        document.body.onclick = function (ev) {
            ToggleConfig(false)
            ToggleBGMPlayer(false)
        }
    }

    const SetStyle = function () {
        let ret_btn = document.getElementById('home-index-return')
        if (LANGUAGE == 'en') {
            ret_btn.style.fontSize = '10px'
        }
    }

    const SetEditorNote = function () {
        if (EDITOR_NOTE) {
            let title1 = document.getElementById('editor-note-title-1')
            if (title1) {
                title1.style.display = 'block'
                title1.parentElement.style.cursor = 'pointer'
            }
            let content1 = document.getElementById('editor-note-1')
            if (content1) {
                content1 = content1.getElementsByClassName('editor-note-content')[0]
                content1.innerHTML = EDITOR_NOTE
                // open links in new tabs
                let links = content1.getElementsByTagName('a')
                for (let i = 0; i < links.length; i++) {
                    const e = links[i]
                    e.target = '_blank'
                    e.rel = 'nofollow noreferrer'
                }
            }
        }
    }

    const ClearGallery = function () {
        GlobalViewer.hide()
        let obj_gallery = document.getElementById('gallery')
        let target = obj_gallery.children[0]
        if (target) {
            obj_gallery.removeChild(target)
        }
    }

    const AddToGallery = function (e) {
        let obj_gallery = document.getElementById('gallery')
        obj_gallery.appendChild(e)
    }

    const GotoHome = function () {
        CurrentChapter = -1
        ClearGallery()
        RemoveBGMPlayer()
        ToggleConfig(false)
        ToggleMenu(false)
        ToggleGallery(false)
        ToggleBook(false)
        delete GlobalKeyHandlers['chapter']
        // update bg image
        SetHomePageBg()
        //
        let title = document.getElementById('home')
        title.style.display = 'block'
        // hide all hints
        let hints = document.getElementsByClassName('home-index-hint')
        for (let i = 0; i < hints.length; i++) {
            const obj = hints[i]
            obj.classList.remove('active')
        }
        // show last read hint
        let [ibook, ichapter] = Settings.getCurrentChapter()
        if (ibook == PARAMETER.bookIndex && !isNaN(ichapter)) {
            let target = hints[ichapter]
            if (target) {
                target.classList.add('active')
            }
        }
        // hide all marks
        let marks = document.getElementsByClassName('home-index-checkmark')
        for (let i = 0; i < marks.length; i++) {
            const obj = marks[i]
            obj.classList.remove('active')
        }
        // show finished mark
        for (let i = 0; i < marks.length; i++) {
            const obj = marks[i]
            let finished = Settings.isChapterFinished(PARAMETER.bookIndex, i)
            if (finished && ichapter != i) {
                obj.classList.add('active')
            }
        }
        //
        GlobalKeyHandlers['chapter'] = function (ev) {
            if (ev.key == '`') {
                window.location.href = 'index.html'
            }
        }
        ToggleHomeIndex(true)
    }

    const UpdateChapterProgress = function (idx) {
        Settings.setCurrentChapter(PARAMETER.bookIndex, idx)
        let progress = 0
        let totalChapter = 0
        for (let i = 0; i < PARAMETER.chPages.length; i++) {
            const n = PARAMETER.chPages[i]
            totalChapter += n
            if (Settings.isChapterFinished(PARAMETER.bookIndex, i) || i == idx) {
                progress += n
            }
        }
        progress = Math.floor(progress / totalChapter * 100)
        Settings.addFinishedChapter(PARAMETER.bookIndex, idx, progress)
    }

    const PrepareGotoChapter = function (idx) {
        CurrentChapter = idx
        UpdateChapterProgress(idx)
        //
        ToggleMenu(true)
        ToggleConfig(false)
        ToggleHome(false)
        let bookMode = GetBookMode()
        if (bookMode != 'rl' && bookMode != 'lr') {
            SetBgMusicHandle(GetBgMusicID(idx, 0), BgMusicPlayerHeight, 500)
        }
        //
        let ctitle = document.getElementById('chapter-title')
        if (ctitle) {
            ctitle.textContent = GetChapterTitle(idx) //+ ' ' + (idx + 1)
            if (IS_MOBILE) {
                ctitle.style.display = 'none'
            }
        }
        //
        console.log('ClearGallery')
        ClearGallery()
    }

    const GetImageSrc = function (ichapter, i) {
        let num = '' + (i + 1)
        num = '0'.repeat(4 - num.length) + num
        let src = IMG_SRC_PREFIX + (ichapter + 1) + '/' + num + '.jpg'
        if (PARAMETER.fnGetImgSrc) {
            src = PARAMETER.fnGetImgSrc(ichapter + 1, num)
        }
        return src
    }

    const GetBookMode = function () {
        let bookMode = Settings.getBookMode(PARAMETER.bookIndex)
        if (!bookMode) {
            bookMode = PARAMETER.bookMode
            Settings.setBookMode(PARAMETER.bookIndex, bookMode)
        }
        return bookMode
    }

    const GotoChapter = function (idx) {
        let bookMode = GetBookMode()
        if (bookMode == 'rl' || bookMode == 'lr') {
            return GotoChapterBookMode(idx, bookMode)
        }
        //
        if (idx >= NUM_CHAPTER) {
            return
        }
        // clear
        ActiveHidden = {}
        if (idx < 0) {
            return GotoHome()
        }
        PrepareGotoChapter(idx)
        ToggleGallery(true)
        ToggleBook(false)
        //
        const num_page = NUM_PAGES[idx]
        let obj_ul = document.createElement('ul')
        obj_ul.id = 'images'
        let hidden = HIDDEN_PAGES[idx]
        let MakeHidden = function (pages, idxPrev) {
            if (typeof (pages) == 'string') {
                pages = [pages]
            }
            let obj_div = document.createElement('div')
            obj_div.classList.add('folded-img-wrapper')
            obj_div.classList.add('content-img-wrapper')
            let hintText1 = '展开已修改的内容'
            let hintText2 = '收起已修改的内容'
            obj_div.innerHTML += '<div class="folded-warning">▶' + hintText1 + '◀</div>'

            for (let j = 0; j < pages.length; j++) {
                let page_src = pages[j]
                let obj_img = document.createElement('img')
                obj_img.src = page_src
                obj_img.classList.add('content-img')
                obj_img.classList.add('folded-img')
                obj_div.appendChild(obj_img)
            }
            obj_div.innerHTML += '<div class="folded-warning-end">▲' + hintText2 + '▲</div>'

            let obj_hint1 = obj_div.firstChild
            let obj_hint2 = obj_div.lastChild
            obj_hint2.style.display = 'none'
            let ToggleHidden = function () {
                let active = obj_div.children[1].classList.toggle('active')
                if (active) {
                    obj_hint1.innerText = '▼' + hintText2 + '▼'
                    obj_hint2.style.display = 'block'
                } else {
                    obj_hint1.innerText = '▶' + hintText1 + '◀'
                    obj_hint2.style.display = 'none'
                }
                for (let j = 2; j < obj_div.children.length - 1; j++) {
                    obj_div.children[j].classList.toggle('active')
                }
                // update scroll ratio to ignore hidden content
                let hintH = obj_div.children[0].getBoundingClientRect().height
                let scrollH = document.body.scrollTop || document.documentElement.scrollTop
                let rect = obj_div.getBoundingClientRect()
                let hiddenToTop = rect.top + scrollH + hintH
                let hiddenH = rect.height - hintH
                let key = idxPrev
                ActiveHidden[key] = { active: active, top: hiddenToTop, height: hiddenH }
                OnScrollChange()
            }
            obj_hint1.addEventListener("click", ToggleHidden)
            obj_hint2.addEventListener("click", ToggleHidden)
            return obj_div
        }
        for (let i = 0; i < num_page; i++) {
            let obj_li = document.createElement('li')
            let obj_div = document.createElement('div')
            let obj_img = document.createElement('img')
            let src = GetImageSrc(idx, i)
            obj_img.src = src
            let alt = src.split('/')
            obj_img.alt = alt[alt.length - 1]
            obj_img.className = 'content-img'
            obj_div.className = 'content-img-wrapper'
            obj_div.appendChild(obj_img)

            if (i == 0 && hidden && hidden[0]) {
                obj_li.appendChild(MakeHidden(hidden[0], 0))
            }

            obj_li.appendChild(obj_div)

            if (hidden && hidden[i + 1]) {
                obj_li.appendChild(MakeHidden(hidden[i + 1], i + 1))
            }

            obj_ul.appendChild(obj_li)
        }
        AddToGallery(obj_ul)
        if (!IS_MOBILE) {
            GlobalViewer = new Viewer(obj_ul, ViewerConfig)
        }
        // always return top
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        //
        let GotoPrevChapter = function () {
            if (idx == 0) {
                return
            }
            return GotoChapter(idx - 1)
        }
        let GotoNextChapter = function () {
            return GotoChapter(idx + 1)
        }
        let GotoTop = function () {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
        let GotoBottom = function () {
            document.body.scrollTop = document.body.scrollHeight
            document.documentElement.scrollTop = document.documentElement.scrollHeight
        }
        document.getElementById('menu-goto-top').onclick = function (ev) {
            ev.stopPropagation()
            GotoTop()
        }
        document.getElementById('menu-goto-bottom').onclick = function (ev) {
            ev.stopPropagation()
            GotoBottom()
        }
        GlobalKeyHandlers['chapter'] = function (ev) {
            if (ev.key == '`') {
                GotoHome()
            } else if (ev.key == '[') {
                return GotoPrevChapter()
            } else if (ev.key == ']') {
                return GotoNextChapter()
            } else if (ev.key == '-') {
                return GotoTop()
            } else if (ev.key == '=') {
                return GotoBottom()
            }
        }
    }

    const GotoChapterBookMode = function (idx, mode) {
        if (idx >= NUM_CHAPTER) {
            return
        }
        // clear
        ActiveHidden = {}
        if (idx < 0) {
            return GotoHome()
        }
        PrepareGotoChapter(idx)
        ToggleGallery(false)
        ToggleBook(true)
        let hidden = HIDDEN_PAGES[idx]
        //
        let bookWrapper = document.getElementById('book-wrapper')
        let bookContainer = document.getElementById('book-container')
        //
        let leftWrapper = document.getElementById('book-left-wrapper')
        let rightWrapper = document.getElementById('book-right-wrapper')
        let crossWrapper = document.getElementById('book-cross-wrapper')
        let leftPage = document.getElementById('book-left-page')
        let rightPage = document.getElementById('book-right-page')
        let crossPage = document.getElementById('book-cross-page')
        /** @type {HTMLImageElement} */
        let leftImage = document.getElementById('book-left-img')
        /** @type {HTMLImageElement} */
        let rightImage = document.getElementById('book-right-img')
        /** @type {HTMLImageElement} */
        let crossImage = document.getElementById('book-cross-img')
        //
        crossWrapper.style.display = 'none'
        let wrapperPair = [rightWrapper, leftWrapper]
        let pagePair = [rightPage, leftPage]
        let imagePair = [rightImage, leftImage]
        let cursorPlacePair = ['book-cursor-right', 'book-cursor-left']
        if (mode == 'lr') {
            wrapperPair = [leftWrapper, rightWrapper]
            pagePair = [leftPage, rightPage]
            imagePair = [leftImage, rightImage]
            cursorPlacePair = ['book-cursor-left', 'book-cursor-right']
        }
        //
        let blank = PARAMETER.bookModeBlank
        if (blank) {
            blank = blank[idx]
        }
        let sources = []
        for (let i = 0; i < NUM_PAGES[idx]; i++) {
            if (i == 0 && blank && blank.includes(0)) {
                sources.push(['', 0])
            }
            if (i == 0 && hidden && hidden[0]) {
                let pages = hidden[0]
                if (typeof (pages) == 'string') {
                    pages = [pages]
                }
                for (let j = 0; j < pages.length; j++) {
                    sources.push([pages[j], 0.01 * (j + 1)])
                }
            }
            //
            let curr = i + 1
            sources.push([GetImageSrc(idx, i), curr])
            //
            if (blank && blank.includes(i + 1)) {
                curr += 0.01
                sources.push(['', curr])
            }
            if (hidden && hidden[i + 1]) {
                let pages = hidden[i + 1]
                if (typeof (pages) == 'string') {
                    pages = [pages]
                }
                for (let j = 0; j < pages.length; j++) {
                    curr += 0.01
                    sources.push([pages[j], curr])
                }
            }
            if (blank && blank.includes(curr)) {
                curr += 0.01
                sources.push(['', curr])
            }
        }
        // always goto first page
        CurrentBookPage = [-1]
        let history = []
        let locked = false
        let UpdateCurrentPage = function (pages) {
            CurrentBookPage = pages
            RequestBgMusicChange()
        }
        let GetNextSrc = function () {
            let last = CurrentBookPage[CurrentBookPage.length - 1]
            let next1 = null
            let next2 = null
            for (let i = 0; i < sources.length; i++) {
                const e = sources[i]
                if (e[1] > last) {
                    next1 = e
                    if (i < sources.length - 1) {
                        next2 = sources[i + 1]
                    }
                    break
                }
            }
            return [next1, next2]
        }
        let GotoNextChapter = function () {
            return GotoChapterBookMode(idx + 1, mode)
        }
        let GotoNext = function () {
            let [next1, next2] = GetNextSrc()
            if (!next1) {
                // next chapter
                return GotoNextChapter()
            }
            locked = true
            let next1Src = next1[0]
            let next2Src = ''
            if (next2) {
                next2Src = next2[0]
            }
            // hide before image is ready
            leftWrapper.style.display = 'none'
            rightWrapper.style.display = 'none'
            crossWrapper.style.display = 'none'
            leftImage.src = ''
            rightImage.src = ''
            crossImage.src = ''
            if (!next1Src) {
                // if next1 is blank, next2 will not be blank or cross
                wrapperPair[0].style.display = 'block'
                wrapperPair[1].style.display = 'block'
                imagePair[1].src = next2Src
                if (next2) {
                    UpdateCurrentPage([next1[1], next2[1]])
                    history.push([next1, next2])
                } else {
                    UpdateCurrentPage([next1[1]])
                    history.push([next1])
                }
                locked = false
                return
            }
            // next1 is not blank
            let p = new Promise((res, reject) => {
                Util.getImageSizeAsync(next1Src, res)
            }).then(([w, h]) => {
                if (w > h) {
                    crossWrapper.style.display = 'block'
                    crossImage.src = next1Src
                    UpdateCurrentPage([next1[1]])
                    history.push([next1])
                    locked = false
                } else {
                    wrapperPair[1].style.display = 'block'
                    wrapperPair[0].style.display = 'block'
                    imagePair[0].src = next1Src
                    imagePair[1].src = ''
                    if (!next2Src) {
                        if (next2) {
                            UpdateCurrentPage([next1[1], next2[1]])
                            history.push([next1, next2])
                        } else {
                            UpdateCurrentPage([next1[1]])
                            history.push([next1])
                        }
                        locked = false
                        return
                    }
                    // next2 can be normal or cross
                    let p2 = new Promise((res, reject) => {
                        Util.getImageSizeAsync(next2Src, res)
                    }).then(([w, h]) => {
                        if (w > h) {
                            UpdateCurrentPage([next1[1]])
                            history.push([next1])
                        } else {
                            imagePair[1].src = next2Src
                            UpdateCurrentPage([next1[1], next2[1]])
                            history.push([next1, next2])
                        }
                        locked = false
                    })
                }
            })
        }
        let GotoPrevChapter = function () {
            if (idx == 0) {
                return
            }
            return GotoChapterBookMode(idx - 1, mode)
        }
        let GotoPrev = function () {
            if (history.length <= 1) {
                // prev chapter
                return GotoPrevChapter()
            }
            locked = true
            history.pop()
            let prev = history[history.length - 1]
            // hide before image is ready
            leftWrapper.style.display = 'none'
            rightWrapper.style.display = 'none'
            crossWrapper.style.display = 'none'
            leftImage.src = ''
            rightImage.src = ''
            crossImage.src = ''
            if (prev.length > 1) {
                wrapperPair[0].style.display = 'block'
                wrapperPair[1].style.display = 'block'
                imagePair[0].src = prev[0][0]
                imagePair[1].src = prev[1][0]
                UpdateCurrentPage([prev[0][1], prev[1][1]])
                locked = false
                return
            }
            // one image
            let prevSrc = prev[0][0]
            UpdateCurrentPage([prev[0][1]])
            let p = new Promise((res, reject) => {
                Util.getImageSizeAsync(prevSrc, res)
            }).then(([w, h]) => {
                if (w > h) {
                    crossWrapper.style.display = 'block'
                    crossImage.src = prevSrc
                } else {
                    wrapperPair[1].style.display = 'block'
                    wrapperPair[0].style.display = 'block'
                    imagePair[0].src = prevSrc
                    imagePair[1].src = ''
                }
                locked = false
            })
        }
        let OnGotoNext = function (ev) {
            ev.stopPropagation()
            if (locked) {
                return
            }
            GotoNext()
        }
        let OnGotoPrev = function (ev) {
            ev.stopPropagation()
            if (locked) {
                return
            }
            GotoPrev()
        }
        document.getElementById(cursorPlacePair[1]).onclick = OnGotoNext
        document.getElementById(cursorPlacePair[0]).onclick = OnGotoPrev
        document.getElementById('menu-next-page').onclick = OnGotoNext
        document.getElementById('menu-prev-page').onclick = OnGotoPrev
        GotoNext()
        //
        GlobalKeyHandlers['chapter'] = function (ev) {
            if (locked) {
                return
            }
            let bookMode = GetBookMode()
            if (ev.key == 'ArrowLeft') {
                return bookMode == 'rl' ? GotoNext() : GotoPrev()
            } else if (ev.key == 'ArrowRight') {
                return bookMode == 'rl' ? GotoPrev() : GotoNext()
            } else if (ev.key == '`') {
                GotoHome()
            } else if (ev.key == '[') {
                return bookMode == 'rl' ? GotoNextChapter() : GotoPrevChapter()
            } else if (ev.key == ']') {
                return bookMode == 'rl' ? GotoPrevChapter() : GotoNextChapter()
            }
            // console.log(ev)
        }
    }

    function ReverseColor(rgbColor) {
        rgbColor = rgbColor.replace(/\s/g, "");
        let arrRGB = new Array(3);
        if (rgbColor.indexOf("#") > -1) {
            if (rgbColor.length > 4) {
                let j = 1;
                for (let i = 0; i < arrRGB.length; i++) {
                    arrRGB[i] = 255 - parseInt(rgbColor.substr((i + j), 2), 16);
                    j += 1;
                }
            } else {
                for (let i = 0; i < arrRGB.length; i++) {
                    let t = rgbColor.substr((i + 1), 1);
                    t = t + t;
                    arrRGB[i] = 255 - parseInt(t, 16);
                }
            }
        }
        return "rgb(" + arrRGB.join(",") + ")";
    }

    function SetBackgroundColor() {
        const select = document.getElementById('menu-config-bg')
        document.getElementsByTagName('body')[0].style.backgroundColor = select.value
        Settings.setBgColor(select.selectedIndex)
        const icon_color = ReverseColor(select.value)
        let sheets = document.styleSheets
        for (let i = 0; i < sheets.length; i++) {
            const e = sheets[i]
            if (!e.href) {
                for (let j = 0; j < e.cssRules.length; j++) {
                    const rule = e.cssRules[j]
                    if (rule.selectorText == '.menu-icon' && !IS_MOBILE) {
                        rule.style.fill = icon_color
                        break
                    }
                }
                break
            }
        }
    }

    function SetMenuConfig() {
        const bg_select = document.getElementById('menu-config-bg')
        bg_select.onchange = SetBackgroundColor
        let lastBgColor = Settings.getBgColor()
        if (!isNaN(lastBgColor)) {
            bg_select.selectedIndex = Number(lastBgColor)
            SetBackgroundColor()
        }
        //
        const bgm_switch = document.getElementById('menu-config-bgm-switch')
        let handle = 0
        bgm_switch.onchange = function () {
            Settings.setBgmEnabled(Number(bgm_switch.checked))
            if (handle) {
                clearTimeout(handle)
            }
            handle = setTimeout(function () {
                if (bgm_switch.checked == EnableBGM) {
                    return
                }
                EnableBGM = bgm_switch.checked
                if (EnableBGM) {
                    let id = GetBgMusicID(CurrentChapter, -1)
                    SetBGMPlayer(false, id, BgMusicPlayerHeight)
                } else {
                    RemoveBGMPlayer()
                }
            }, 500)
        }
        let lastBGMEnabled = Settings.getBgmEnabled()
        if (lastBGMEnabled == 0) {
            bgm_switch.checked = false
            bgm_switch.onchange()
        }
        //
        const width_setter = document.getElementById('menu-config-width')
        width_setter.onchange = function () {
            const value = width_setter.value
            Settings.setGalleryWidth(value)
            const gallery = document.getElementById('gallery')
            gallery.style.maxWidth = parseInt(value) + '%'
        }
        let lastWidth = Settings.getGalleryWidth()
        if (!isNaN(lastWidth)) {
            width_setter.value = lastWidth
            width_setter.onchange()
        }
        //
        const volume_setter = document.getElementById('menu-config-bgm-volume')
        volume_setter.onchange = function () {
            const value = volume_setter.value
            Settings.setBgmVolume(value)
            BgMusicVolume = Number(value) / 100
        }
        let lastVolume = Settings.getBgmVolume()
        if (!isNaN(lastVolume) && 0 <= lastVolume && lastVolume <= 100) {
            volume_setter.value = lastVolume
            volume_setter.onchange()
        }
    }
    //
    function GetMusicListSrc(id, height) {
        return 'https://music.163.com/outchain/player?type=0&id=' + id + '&auto=1&height=' + height
    }

    function GetMusicSingleSrc(id, height) {
        return 'https://music.163.com/outchain/player?type=2&id=' + id + '&auto=1&height=' + height
    }

    function GetBgMusicID(index, progress) {
        if (!EnableBGM) {
            return -1
        }
        let bookMode = GetBookMode()
        if (bookMode == 'rl' || bookMode == 'lr') {
            let curr = CurrentBookPage[0]
            if (curr < 0) {
                return -1
            }
            let v = BGM_INFO2[index]
            if (!v) {
                return -1
            }
            let id = -1
            if (typeof (v) == 'number') {
                if (v < 0) {
                    return -1
                }
                id = v
            } else {
                let idx = 0
                for (let i = 0; i < v[0].length; i++) {
                    const value = v[1][i]
                    if (curr > value - 1e-3) {
                        idx = v[0][i]
                    }
                }
                id = idx
            }
            return id
        } else {
            if (progress < 0) {
                progress = GetScrollRatio()
            }
            let v = BGM_INFO[index]
            if (!v) {
                return -1
            }
            let id = -1
            if (typeof (v) == 'number') {
                if (v < 0) {
                    return -1
                }
                id = AUDIO_LOCAL_MODE ? v : [v - 1]
            } else {
                let idx = 0
                for (let i = 0; i < v[0].length; i++) {
                    const value = v[1][i]
                    if (progress > value - 0.1) {
                        idx = v[0][i]
                    }
                }
                id = AUDIO_LOCAL_MODE ? idx : [idx - 1]
            }
            return id
        }
    }

    function GetScrollRatio() {
        let totalH = document.body.scrollHeight || document.documentElement.scrollHeight
        let clientH = window.innerHeight || document.documentElement.clientHeight
        let validH = totalH - clientH
        let scrollH = document.body.scrollTop || document.documentElement.scrollTop
        let scroll = scrollH
        // ignore hidden content
        for (const key in ActiveHidden) {
            const e = ActiveHidden[key]
            if (e.active) {
                let top = e.top
                let height = e.height
                validH -= height
                if (scrollH > top) {
                    if (scrollH > top + height) {
                        scroll -= height
                    } else {
                        scroll -= (scrollH - top)
                    }
                }
            }
        }
        return scroll / validH * 100
    }

    function RequestBgMusicChange() {
        if (EnableBGM && CurrentChapter > -1) {
            let id = GetBgMusicID(CurrentChapter, -1)
            if (id != CurrentBgMusicID || (NextBgMusicID >= 0 && id != NextBgMusicID)) {
                SetBgMusicHandle(id, BgMusicPlayerHeight, 500)
            }
        }
    }

    function OnScrollChange() {
        let bookMode = GetBookMode()
        if (bookMode == 'rl' || bookMode == 'lr') {
            return
        }
        RequestBgMusicChange()
        if (DEBUG_MODE) {
            document.getElementById('chapter-title').textContent = ratio.toFixed(2)
            document.getElementById('menu-bgm-text').innerText = CurrentBgMusicID
        }
    }

    window.addEventListener('scroll', function (e) {
        OnScrollChange()
    })

    let IsFirstClick = true
    window.addEventListener('click', function (e) {
        if (!IsFirstClick) {
            return
        }
        IsFirstClick = false
        if (EnableBGM && CurrentChapter > -1) {
            let player = document.getElementById('bgm-player')
            if (player && player.paused) {
                player.play()
            }
        }
    })

    window.addEventListener('keyup', function (e) {
        for (const key in GlobalKeyHandlers) {
            const hdl = GlobalKeyHandlers[key]
            if (hdl) {
                hdl(e)
            }
        }
    })
    /*
    function GetVoiceInfo(i_chapter, i_page) {
        const invalid = 0
        if (!VOICE_INFO[i_chapter + 1]) {
            return invalid
        }
        let v = VOICE_INFO[i_chapter + 1][i_page + 1]
        if (!v) {
            return invalid
        }
        return v
    }

    function GetVoiceSrc(i_chapter, i_page, i_voice) {
        let c = '' + (i_chapter + 1)
        let p = '' + (i_page + 1)
        let v = '' + (i_voice + 1)
        let file = [c, p, v].map(function (e, i, a) {
            return '0'.repeat(2 - e.length) + e
        }).join('_') + VOICE_SRC_POSTFIX
        return (VOICE_LANGUAGE == 'jp' ? 'res/voice_jp/' : 'res/voice/') + file
    }
    */

    function GetChapterCoverSrc(i) {
        let num = i + 1
        if (param.fnGetChapterCoverSrc) {
            return param.fnGetChapterCoverSrc(num)
        }
        return COVER_SRC_PREFIX + num + '.jpg'
    }
    /** @returns {string} */
    function GetChapterTitle(i) {
        if (CHAPTER_TITLES[LANGUAGE]) {
            return CHAPTER_TITLES[LANGUAGE][i]
        }
        return CHAPTER_TITLES[i]
    }

    function ReplaceString(id, str) {
        let obj = document.getElementById(id)
        if (obj) {
            obj.innerText = str
        }
    }

    function ReplaceHtml(id, str) {
        let obj = document.getElementById(id)
        if (obj) {
            obj.innerHTML = str
        }
    }

    const I18N_STRING = {
        'home-menu-btn-contents': { en: 'Contents', jp: '目次' },
        'home-menu-btn-about': { en: 'About', jp: '概要' },
        'home-index-btn-return': { en: 'Return', jp: '戻る' },
        'home-about-title-1': { en: 'About', jp: '概要' },
        'menu-next-text': { en: 'Next', jp: '次へ' },
        'menu-prev-text': { en: 'Previous', jp: '前へ' },
        'menu-home-text': { en: 'Contents', jp: '目次' },
        'menu-bgm-text': { en: 'BGM', jp: 'BGM' },
        'menu-config-text': { en: 'Settings', jp: '設定' },
        'menu-config-width-text': { en: 'Picture width', jp: '画像幅' },
        'menu-config-bg-text': { en: 'Background color', jp: '背景色' },
        'menu-config-bg-1': { en: 'Light', jp: 'Light' },
        'menu-config-bg-2': { en: 'Dark', jp: 'Dark' },
        'menu-config-bgm-switch-text': { en: 'BGM on/off', jp: 'BGMスイッチ' },
        'menu-config-volume-text': { en: 'BGM volume', jp: 'BGM音量' },
        'menu-config-vlang-text': { en: 'Voice language', jp: '-' },
        'menu-config-vlang-1': { en: 'Chinese', jp: '-' },
        'menu-config-vlang-2': { en: 'Japanese', jp: '-' },
    }
    if (i18nString) {
        for (const k in i18nString) {
            I18N_STRING[k] = I18N_STRING[k]
        }
    }
    const I18N_HTML = i18nHtml || {}
    if (LANGUAGE != 'zh') {
        for (const k in I18N_STRING) {
            ReplaceString(k, I18N_STRING[k][LANGUAGE])
        }
        for (const k in I18N_HTML) {
            ReplaceHtml(k, I18N_HTML[k][LANGUAGE])
        }
    }

    //
    SetHomePage()
    SetMenu()
    SetMenuConfig()
    SetStyle()
    SetEditorNote()
    // always show book index
    ToggleHomeIndex(true)
    // always go to book home
    GotoChapter(-1)
};
