/**
 * @returns {string}
 */
function GetLanguage() {
    const META = document.getElementsByTagName('meta')
    let LANGUAGE = META['content-language'].content || 'zh'
    let query = window.location.search.substring(1)
    let vars = query.split("&")
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=")
        if (pair[0] == 'lang') { LANGUAGE = pair[1] }
        if (pair[0] == 'vlang') { VOICE_LANGUAGE = pair[1] }
    }
    return LANGUAGE
}

function IsMobile() {
    let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    let getArr = Agents.filter(i => navigator.userAgent.includes(i));
    return getArr.length ? true : false;
}

function GetQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substring(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}

const MathUtil = {
    getFadeFactor: function (current, start, end, fadeIn, fadeOut) {
        let x = current
        let y1 = 1 / fadeIn * x - start / fadeIn
        if (fadeIn <= 0) {
            y1 = 0
            if (current >= start) {
                y1 = 1
            }
        }
        let y2 = -1 / fadeOut * x + end / fadeOut
        if (fadeOut <= 0) {
            y2 = 0
            if (current <= end) {
                y2 = 1
            }
        }
        return Math.max(Math.min(y1, y2, 1), 0)
    },
    clampLoop: function (current, start, end, ignoreFirst) {
        if (current < start && !ignoreFirst) {
            current = start
        }
        if (current > end) {
            current = start
        }
        return current
    }
}

const Util = {
    htmlEncode: function (html) {
        let temp = document.createElement("div");
        (temp.textContent != undefined) ? (temp.textContent = html) : (temp.innerText = html);
        let output = temp.innerHTML;
        temp = null;
        return output;
    },
    htmlDecode: function (text) {
        let temp = document.createElement("div");
        temp.innerHTML = text;
        let output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    }
}

class ReaderParam {
    constructor() {
        this.htmlNum = null;
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
        this.bgmExtId = null;
        this.i18nString = null;
        this.i18nHtml = null;
        this.fnGetChapterCoverSrc = null;
        this.fnGetImgSrc = null;
        this.editorNote = null;
        this.bgmVolume = [
            -9.86, -7.43, -8.97, -14.48, -9.31,
            -5.78, -15.47, -1.39, -14.51, -16.47,

            -8.50, -12.84, -11.49, -7.69, -11.63,
            0/* 8.25 */, -12.30, -7.80, -14.55, -11.50,

            -15.37, -14.30, 0, -12.19, -14.65,
            -14.17, -14.18, -12.11, -14.47, -12.89,
            //TODO
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,

            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,

            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,

            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,

            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,

            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,

            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
        ];
        this.bgmVolume[98] = 0;
        this.bgmLoopInfo = {
            28: [5, 23, 1, 1, true],
            45: [0, 1e3, 1, 1, false],
            49: [0, 53, 1, 1, false],
            99: [1, 25.2, 2, 3, false],
        };
        this.addBgmLoopInfo = function (id, start, end, fadeIn, fadeOut, ignoreFirst) {
            if (!this.bgmLoopInfo) {
                this.bgmLoopInfo = {}
            }
            this.bgmLoopInfo[id] = [start, end, fadeIn || 0, fadeOut || 0, ignoreFirst || false]
        };
        for (let i = 0; i < this.bgmVolume.length; i++) {
            if (!this.bgmLoopInfo[i]) {
                this.addBgmLoopInfo(i, 0, 1e3, 1, 1, false)
            }
        }
    }
}

/**
 * Reader
 * @param {ReaderParam} param parameter
 */
const Reader = function (param) {
    let pageNum = param.htmlNum
    let bookDesc = param.bookDesc
    let bgSrc = param.bgSrc
    let numChapter = param.numChapter
    let chTitles = param.chTitles
    let chPages = param.chPages
    let hiddenPages = param.hiddenPages
    let bgmVolume = param.bgmVolume
    let bgmInfo = param.bgmInfo
    let bgmExtId = param.bgmExtId
    let i18nString = param.i18nString
    let i18nHtml = param.i18nHtml
    let PARAMETER = param

    const DEBUG_MODE = true
    let LOCAL_MODE = false
    let AUDIO_LOCAL_MODE = true
    let VOICE_LANGUAGE = 'zh'

    const META = document.getElementsByTagName('meta')
    let LANGUAGE = GetLanguage()
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

    const NUM_CHAPTER = numChapter
    const CHAPTER_TITLES = chTitles
    const HIDDEN_PAGES = hiddenPages || {}

    let NUM_PAGES = chPages
    if (NUM_PAGES[LANGUAGE]) {
        NUM_PAGES = NUM_PAGES[LANGUAGE]
    }

    const BGM_SINGLE_ID = bgmExtId
    // loudness matching
    const BGM_BASE_VOLUME = bgmVolume || []
    for (let i = 0; i < BGM_BASE_VOLUME.length; i++) {
        BGM_BASE_VOLUME[i] = Math.pow(10, BGM_BASE_VOLUME[i] / 20)
    }

    let BGM_INFO = bgmInfo || {}
    if (BGM_INFO[LANGUAGE]) {
        BGM_INFO = BGM_INFO[LANGUAGE]
    }

    const MUSIC_LOCAL_SRC_PREFIX = '../res/music/'
    const MUSIC_LOCAL_SRC_POSTFIX = '.mp3'
    // const VOICE_SRC_POSTFIX = '.wav'
    // const VOICE_ICON = '<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"/></svg>'

    let IS_MOBILE = IsMobile()
    this.IS_MOBILE = IS_MOBILE

    const ViewerConfig = { zoomRatio: 0.2 }
    let GlobalViewer = new Viewer(document.getElementById('images'), ViewerConfig)
    let CurrentPage = -1
    let CurrentBgMusicID = -1
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
    const KCurrentChapter = 'current-chapter'
    const KGalleryWidth = 'gallery-width'
    const KBgColor = 'bg-color'
    const KBGMEnabled = 'bgm-enabled'
    const KBGMVolume = 'bgm-volume'
    // const KVoiceLanguage = 'voice-lang'

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
        document.getElementById('home-index-return-bg').style.display = ShowHomeIndex ? 'block' : 'none'
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

    const ToggleHome = function (show) {
        document.getElementById('home').style.display = show ? 'block' : 'none'
    }

    const ToggleMenu = function (show) {
        ShowMenu = show
        let disp = IS_MOBILE ? 'flex' : 'block'
        document.getElementById('menu-container').style.display = show ? disp : 'none'
    }

    const ToggleConfig = function (show) {
        ShowConfig = show
        document.getElementById('menu-config-container').style.display = show ? 'block' : 'none'
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
    }

    const SetBgMusicHandle = function (id, height, time) {
        ClearBgMusicHandle()
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
            let info = document.createElement('div')
            info.id = 'bgm-player-info'
            info.classList.add('black-text-shadow')
            info.innerText = ''
            if (BgmGlobalInfo && BgmGlobalInfo[id]) {
                info.innerText = 'BGM: ' + BgmGlobalInfo[id][0]
            }
            //
            container.appendChild(info)
            container.appendChild(player)
            // set volume realtime
            RemoveGlobalBgmTasks()
            AddGlobalTask(function () {
                let p = document.getElementById('bgm-player')
                if (!p || p.bgm_id != id) {
                    return
                }
                let base = BGM_BASE_VOLUME[id - 1] * BgMusicVolume
                let info = PARAMETER.bgmLoopInfo && PARAMETER.bgmLoopInfo[id]
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

    const SetHomePage = function () {
        let obj_bg = document.getElementById('home-bg')
        if (obj_bg) {
            obj_bg.src = HOME_BG_SRC
        }
        let obj_bg2 = document.getElementById('home-bg2')
        if (obj_bg2) {
            obj_bg2.src = HOME_BG_SRC
        }
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
            //
            obj_container.className = 'home-index-container'
            obj_img.className = 'home-index-img'
            obj_a.className = 'home-index-a'
            obj_a.href = '#'
            obj_a.onclick = function () {
                ToggleHomeIndex(false)
                GotoPage(i)
            }
            obj_img_wrapper.className = 'home-index-img-wrapper'
            obj_text.className = 'home-index-banner'
            //
            obj_text.textContent = GetChapterTitle(i)
            //
            obj_img.src = GetChapterCoverSrc(i)
            //
            obj_img_wrapper.appendChild(obj_img)
            obj_a.appendChild(obj_img_wrapper)
            obj_a.appendChild(obj_text)
            obj_container.appendChild(obj_a)
            obj_index.appendChild(obj_container)
        }
        for (let i = 0; i < NUM_CHAPTER; i++) {
            let obj_i = document.createElement('i')
            obj_index.appendChild(obj_i)
        }
        let obj_index_return = document.getElementById('home-index-return')
        obj_index_return.onclick = function () {
            ToggleHomeIndex(false)
        }
    }

    const SetMenu = function () {
        let obj_menu_next = document.getElementById('menu-next')
        obj_menu_next.onclick = function () {
            if (CurrentPage < 0 || CurrentPage >= NUM_PAGES - 1) {
                return
            }
            GotoPage(CurrentPage + 1)
        }
        let obj_menu_prev = document.getElementById('menu-prev')
        obj_menu_prev.onclick = function () {
            if (CurrentPage < 1 || CurrentPage >= NUM_PAGES) {
                return
            }
            GotoPage(CurrentPage - 1)
        }
        let obj_menu_home = document.getElementById('menu-home')
        obj_menu_home.onclick = function () {
            GotoHome()
            ToggleHomeIndex(true)
        }
        let obj_menu_bgm = document.getElementById('menu-bgm')
        obj_menu_bgm.onclick = function () {
            ToggleBGMPlayer(!ShowBGMPlayer)
        }
        let obj_menu_config = document.getElementById('menu-config')
        obj_menu_config.onclick = function () {
            ToggleConfig(!ShowConfig)
        }
        //
        let container = document.getElementById('menu-container')
        container.onclick = function (e) {
            e.stopPropagation()
        }
        if (IS_MOBILE) {
            container.classList.remove('menu')
            container.classList.add('menu-mobile')
        }
        document.body.onclick = function () {
            ToggleConfig(false)
            ToggleBGMPlayer(false)
        }
    }

    const SetStyle = function () {
        let ret_btn = document.getElementById('home-index-return')
        if (LANGUAGE == 'en') {
            ret_btn.style.fontSize = '2rem'
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
        CurrentPage = -1
        ClearGallery()
        RemoveBGMPlayer()
        ToggleConfig(false)
        ToggleMenu(false)
        let title = document.getElementById('home')
        title.style.display = 'block'
        SetLocalStorage(KCurrentChapter, -1)
    }

    const GotoPage = function (idx) {
        if (idx >= NUM_CHAPTER) {
            return
        }
        // clear
        ActiveHidden = {}
        if (idx < 0) {
            return GotoHome()
        }
        CurrentPage = idx
        SetLocalStorage(KCurrentChapter, idx)
        //
        ToggleMenu(true)
        ToggleConfig(false)
        ToggleHome(false)
        ToggleGallery(true)
        SetBgMusicHandle(GetBgMusicID(idx, 0), BgMusicPlayerHeight, 500)
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
            let num = '' + (i + 1)
            num = '0'.repeat(4 - num.length) + num
            let src = IMG_SRC_PREFIX + (idx + 1) + '/' + num + '.jpg'
            if (PARAMETER.fnGetImgSrc) {
                src = PARAMETER.fnGetImgSrc(idx + 1, num)
            }
            obj_img.src = src
            obj_img.alt = num + '.jpg'
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
            //
            /*
            let voice_info = GetVoiceInfo(idx, i)
            let num_voice = 0
            let voice_pos = 0
            if (typeof (voice_info) == 'number') {
                num_voice = voice_info
            } else {
                num_voice = voice_info[0]
                voice_pos = voice_info[1]
            }
            let obj_voice_list = num_voice ? document.createElement('div') : null
            if (num_voice) {
                obj_voice_list = document.createElement('div')
                obj_voice_list.className = 'voice-icon-list'
                obj_div.appendChild(obj_voice_list)
                if (voice_pos > 0) {
                    obj_voice_list.style.top = voice_pos + '%'
                }
            }
            for (let j = 0; j < num_voice; j++) {
                let obj_icon_box = document.createElement('div')
                obj_icon_box.innerHTML = VOICE_ICON
                obj_icon_box.className = 'voice-icon-box'
                let handle = 0
                obj_icon_box.onclick = function () {
                    //
                    if (idx == (LANGUAGE == 'en' ? 65 : 66) && i == 21 & j == 0) {
                        RemoveBGMPlayer()
                        BgMusicSpecialPause = true
                        if (handle) {
                            clearTimeout(handle)
                        }
                        handle = setTimeout(function () {
                            BgMusicSpecialPause = false
                        }, 12000)
                    }
                    let player = document.getElementById('voice-player')
                    player.pause()
                    player.src = GetVoiceSrc(idx, i, j)
                    player.play()
                }
                obj_voice_list.appendChild(obj_icon_box)
            }
            */
        }
        AddToGallery(obj_ul)
        if (!IS_MOBILE) {
            GlobalViewer = new Viewer(obj_ul, ViewerConfig)
        }
        // always return top
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
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
        SetLocalStorage(KBgColor, select.selectedIndex)
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
        let lastBgColor = GetLocalStorage(KBgColor)
        if (lastBgColor) {
            bg_select.selectedIndex = Number(lastBgColor)
            SetBackgroundColor()
        }
        //
        const bgm_switch = document.getElementById('menu-config-bgm-switch')
        let handle = 0
        bgm_switch.onchange = function () {
            SetLocalStorage(KBGMEnabled, Number(bgm_switch.checked))
            if (handle) {
                clearTimeout(handle)
            }
            handle = setTimeout(function () {
                if (bgm_switch.checked == EnableBGM) {
                    return
                }
                EnableBGM = bgm_switch.checked
                if (EnableBGM) {
                    let id = GetBgMusicID(CurrentPage, GetScrollRatio())
                    SetBGMPlayer(false, id, BgMusicPlayerHeight)
                } else {
                    RemoveBGMPlayer()
                }
            }, 500)
        }
        let lastBGMEnabled = GetLocalStorage(KBGMEnabled)
        if (lastBGMEnabled && Number(lastBGMEnabled) == 0) {
            bgm_switch.checked = false
            bgm_switch.onchange()
        }
        //
        const width_setter = document.getElementById('menu-config-width')
        width_setter.onchange = function () {
            const value = width_setter.value
            SetLocalStorage(KGalleryWidth, value)
            const gallery = document.getElementById('gallery')
            gallery.style.maxWidth = parseInt(value) + '%'
        }
        let lastWidth = GetLocalStorage(KGalleryWidth)
        if (lastWidth) {
            width_setter.value = lastWidth
            width_setter.onchange()
        }
        //
        const volume_setter = document.getElementById('menu-config-bgm-volume')
        volume_setter.onchange = function () {
            const value = volume_setter.value
            SetLocalStorage(KBGMVolume, value)
            BgMusicVolume = Number(value) / 100
        }
        let lastVolume = GetLocalStorage(KBGMVolume)
        if (lastVolume) {
            volume_setter.value = lastVolume
            volume_setter.onchange()
        }
        //
        /*
        if (LANGUAGE == 'en') {
            document.getElementById('menu-config-vlang-container').style.display = 'block'
            const vlang_select = document.getElementById('menu-config-vlang')
            vlang_select.onchange = function () {
                SetLocalStorage(KVoiceLanguage, vlang_select.selectedIndex)
                VOICE_LANGUAGE = vlang_select.value
                this.VOICE_LANGUAGE = VOICE_LANGUAGE
            }
            let lastVLang = GetLocalStorage(KVoiceLanguage)
            if (lastVLang) {
                vlang_select.selectedIndex = Number(lastVLang)
                vlang_select.onchange()
            }
        }
        */
    }
    //
    function GetMusicListSrc(id, height) {
        return 'https://music.163.com/outchain/player?type=0&id=' + id + '&auto=1&height=' + height
    }

    function GetMusicSingleSrc(id, height) {
        return 'https://music.163.com/outchain/player?type=2&id=' + id + '&auto=1&height=' + height
    }

    function GetBgMusicID(index, ratio) {
        if (!EnableBGM) {
            return -1
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
                const value = v[1][i];
                if (ratio > value - 0.1) {
                    idx = v[0][i]
                }
            }
            id = AUDIO_LOCAL_MODE ? idx : [idx - 1]
        }
        return id
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

    function OnScrollChange() {
        let ratio = GetScrollRatio()
        if (EnableBGM && CurrentPage > -1) {
            let id = GetBgMusicID(CurrentPage, ratio)
            if (id != CurrentBgMusicID) {
                SetBgMusicHandle(id, BgMusicPlayerHeight, 500)
            }
        }
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
        if (EnableBGM && CurrentPage > -1) {
            let player = document.getElementById('bgm-player')
            if (player && player.paused) {
                player.play()
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

    function GetChapterTitle(i) {
        if (CHAPTER_TITLES[LANGUAGE]) {
            return CHAPTER_TITLES[LANGUAGE][i]
        }
        return CHAPTER_TITLES[i]
    }

    function SetLocalStorage(k, v) {
        if (!window.localStorage) {
            return
        }
        try {
            window.localStorage.setItem(k, v)
        } catch (error) {
        }
    }

    function GetLocalStorage(k) {
        if (!window.localStorage) {
            return undefined
        }
        let v = undefined
        try {
            v = window.localStorage.getItem(k)
        } catch (error) {
        }
        return v
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

    ToggleHomeIndex(true)

    let lastCurrentChapter = GetLocalStorage(KCurrentChapter)
    if (lastCurrentChapter) {
        GotoPage(Number(lastCurrentChapter))
    } else {
        GotoPage(-1)
    }
};

// module.exports = {
//     Reader
// }

// export const reader = Reader
