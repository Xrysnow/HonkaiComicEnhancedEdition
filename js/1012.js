//
(function () {
    //
    // let LOCAL_MODE = true
    let LOCAL_MODE = false
    let VOICE_LANGUAGE = 'zh'

    const META = document.getElementsByTagName('meta')
    let LANGUAGE = META['content-language'].content

    {
        let query = window.location.search.substring(1)
        let vars = query.split("&")
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split("=")
            if (pair[0] == 'lang') { LANGUAGE = pair[1] }
            if (pair[0] == 'vlang') { VOICE_LANGUAGE = pair[1] }
        }
    }

    if (LANGUAGE == 'jp') {
        LOCAL_MODE = true
        VOICE_LANGUAGE = 'jp'
    }
    if (META['voice-language']) {
        VOICE_LANGUAGE = META['voice-language'].content
    }

    {
        let href = window.location.href.split('/')
        let page = href[href.length - 1]
        page = page.split('?')[0]
        if (page != '1012.html') {
            window.location.href = '1012.html?lang=' + LANGUAGE
        }
    }

    let BOOK_DECRIPTION = ''
    if (LANGUAGE == 'jp') {
        BOOK_DECRIPTION = '2000年2月1日午前0時、シベリアの天命バビロン実験室で、研究員全員が一夜にして姿を消した。オートがこの「謎」の事件を調査するよう命じたと同時に、「彼女」の出現を心配している人もいるようです。そのすべてが、第二次崩壊の幕を開ける…'
    } else if (LANGUAGE == 'en') {
        BOOK_DECRIPTION = 'February 2000: Every personnel of Babylon Labs vanished within a single night. Overseer Otto of Schicksal dispatched a special task force to investigate the incident. No one realized that this mysterious event would quickly escalate to global proportions.'
    } else {
        BOOK_DECRIPTION = '2000年2月1日午夜，在西伯利亚的天命巴比伦实验室中，所有研究员一夜之间全部消失。在奥托下令调查这起“神秘”事件的同时，还有人似乎在担忧着“她”的出现。而这一切，揭开了第二次崩坏的序幕…'
    }
    let prefix = Util.getImgSrcPrefix()
    const BOOK_COVER_SRC = LOCAL_MODE ? 'img/book_cover/1012.jpg' : prefix + 'book_cover/1012.jpg'
    const COVER_SRC_PREFIX = LOCAL_MODE ? 'img/chapter_cover/1012/' : prefix + 'chapter_cover/1012/'

    let IMG_SRC_PREFIX = null
    if (LANGUAGE == 'jp') {
        IMG_SRC_PREFIX = 'img/book/1012_jp/'
    } else if (LANGUAGE == 'en') {
        IMG_SRC_PREFIX = LOCAL_MODE ? 'img/book/1012_en/' : 'https://d2tpbmzklky1cl.cloudfront.net/manga/static/comic/book/1005/'
    } else {
        IMG_SRC_PREFIX = LOCAL_MODE ? 'img/book/1012/' : prefix + 'book/1012/'
    }

    let HOME_BG_SRC = IMG_SRC_PREFIX + '30/0001.jpg'
    if (LANGUAGE == 'en') {
        HOME_BG_SRC = LOCAL_MODE ? 'img/book/1012_en/cover.jpg' : prefix + 'book/1012/30/0001.jpg'
    }

    const NUM_CHAPTER = 67
    const CHAPTER_TITLES = [
        "楔子 诡变",
        "第一话 鬼魂", "第二话 少女", "第三话 开战", "第四话 结盟", "第五话 撕裂",
        "第六话 破茧", "第七话 空间", "第八话 律者", "第九话 名字", "第十话 对决",
        "第十一话 小丑", "第十二话 少年", "第十三话 护送", "第十四话 游戏", "第十五话 礼物",
        "第十六话 约定", "第十七话 旧梦", "第十八话 神谕", "第十九话 苍月", "第二十话 双雄",
        "第二十一话 计划", "第二十二话 离别", "第二十三话 去月球", "第二十四话 揭幕", "第二十五话 鏖战",
        "第二十六话 牺牲", "第二十七话 最后一战", "第二十八话 一去不回", "壁纸精选", "第二十九话 女王归来", "第三十话 律者袭来",
        "第三十一话 反击号角", "第三十二话 战前演说", "第三十三话 魂钢之秘", "第三十四话 剑心", "第三十五话 随风而逝",
        "第三十六话 羽渡尘", "第三十七话 执念", "第三十八话 血缘", "第三十九话 代价", "第四十话 可可利亚",
        "第四十一话 救世之战", "第四十二话 燃烧冻土", "第四十三话 夙愿", "第四十四话 灵魂", "第四十五话 神",
        "第四十六话 太虚剑神", "第四十七话 斩断", "第四十八话 玩具", "第四十九话 和平", "壁纸精选II", "第五十话 家",
        "第五十一话 拥抱", "第五十二话 最后一搏", "第五十三话 贝纳勒斯", "第五十四话 屠龙", "第五十五话 梦醒",
        "第五十六话 赌局", "第五十七话 集结", "第五十八话 伤痛", "第五十九话 无限回廊", "第六十话 异变",
        "第六十一话 压制", "壁纸精选III", "最终话 守护", "后日谈 归处"
    ]
    const CHAPTER_TITLES_JP = [
        "序章",
        "第1話", "第2話", "第3話", "第4話", "第5話",
        "第6話", "第7話", "第8話", "第9話", "第10話",
        "第11話", "第12話", "第13話", "第14話", "第15話",
        "第16話", "第17話", "第18話", "第19話", "第20話",
        "第21話", "第22話", "第23話", "第24話", "第25話",
        "第26話", "第27話", "第28話", "壁紙", "第29話", "第30話",
        "第31話", "第32話", "第33話", "第34話", "第35話",
        "第36話", "第37話", "第38話", "第39話", "第40話",
        "第41話", "第42話", "第43話", "第44話", "第45話",
        "第46話", "第47話", "第48話", "第49話", "壁紙II", "第50話",
        "第51話", "第52話", "第53話", "第54話", "第55話",
        "第56話", "第57話", "第58話", "第59話", "第60話",
        "第61話", "壁紙III", "最终話", "後日談",
    ]
    const CHAPTER_TITLES_EN = [
        "00 Prelude Tower",
        "01 The Ghost", "02 The Girl", "03 The War Begins", "04 The Alliance", "05 The Tear",
        "06 The Awakening", "07 The Void", "08 The Herrscher", "09 Welt Or Humanity", "10 Void Against Reason",
        "11 The Clown", "12 Young Ziggy", "13 The Raid", "14 The Game", "15 The Present",
        "16 The Promise", "17 Undering Dreams", "18 The Revelation", "19 Throne of Sin", "20 The Kings",
        "21 The Plan", "22 The Launch", "23 Moonflight", "24 The Herrschers", "25 Their Battle",
        "26 The Ninja", "27 Event Horizon", "28 Chandrasekhar", "29 Her Return", "30 Her Angels",
        "31 Counter-Offensive", "32 Eve of War", "33 The Soulium", "34 Blade Heart", "35 Blown Away",
        "36 Fenghuang Down", "37 Obsession", "38 The Progeny", "39 Price to Pay", "40 Cocolia",
        "41 Field of Megiddo", "42 Fire and Ice", "43 Fists of Taixuan", "44 The Soul", "45 DEUS",
        "46 Edge of Taixuan", "47 Broken Link", "48 The New Toy", "49 It's a Dream", "50 Happy Family",
        "51 The Hug", "52 Final Gambit", "53 Benares", "54 Feond Gefyldan", "55 Wake Up Call",
        "56 Alea Iacta Est", "57 The Gathering", "58 The Pain", "59 The Infinite Corridor", "60 The MANTIS",
        "61 The Berserk", "62 Core Cascade", "63 Guardian Angel", "64 Ich liebe Dich", "65 Epilogue",
        "66 Wallpapers"
    ]

    let NUM_PAGES = [
        24, 18, 23, 18, 30,
        22, 25, 29, 21, 27,
        21, 26, 27, 29, 19,
        20, 18, 25, 40, 19,
        21, 21, 22, 16, 19,
        17, 20, 18, 21, 30,
        26, 20, 17, 18, 20,
        17, 18, 20, 20, 22,
        18, 19, 18, 17, 20,
        24, 23, 17, 20, 21,
        20, 32, 24, 23, 21,
        21, 21, 21, 21, 22,
        27, 23, 18, 22, 34,
        75, 22
    ]
    if (LANGUAGE == 'en') {
        NUM_PAGES = [
            24, 16, 16, 14, 28, 20, 20, 24, 18, 23,
            20, 27, 27, 20, 19, 20, 18, 25, 42, 19,
            21, 21, 22, 16, 21, 19, 20, 18, 23, 30,
            20, 17, 18, 20, 17, 18, 20, 20, 22, 18,
            19, 18, 17, 20, 24, 24, 17, 20, 21, 20,
            24, 23, 21, 21, 21, 21, 21, 22, 27, 23,
            18, 22, 27, 23, 27, 22, 34
        ]
    }

    // from CloudMusic@EastenTX, list id = 6941570124
    const BGM_SINGLE_ID = [
        1818567465, 1818580970, 468513225, 1334673822, 1334672915,
        1818580977, 484056610, 1818580979, 1334672907, 484056613,
        1818568430, 1440622024, 1818580969, 1818568450, 1464489909,
        1391654113, 1480346244, 1818580981, 1818567499, 1818581984,
        1818580988, 1334673828
    ]
    // loudness matching
    const BGM_BASE_VOLUME = [
        -9.86, -7.43, -8.97, -14.48, -9.31,
        -5.78, -15.47, -1.39, -14.51, -16.47,
        -8.50, -12.84, -11.49, -7.69, -11.63,
        0/* 8.25 */, -12.30, -7.80, -14.55, -11.50,
        -15.37, -14.30, 0, -12.19, -14.65,
        -14.17, -14.18, -12.11, -14.47, -12.89
    ]
    for (let i = 0; i < BGM_BASE_VOLUME.length; i++) {
        BGM_BASE_VOLUME[i] = Math.pow(10, BGM_BASE_VOLUME[i] / 20)
    }
    // from bilibili@Eastenhhh, bilibili@咖啡好苦请不要加糖
    let BGM_INFO = [
        [[1, 2, 3], [0, 48, 73]],
        // 1-10
        4, [[5, 6], [0, 42]], 3, [[3, 25, 7], [0, 4, 61]], [[8, 11], [0, 24]],
        [[1, 26, 9], [0, 41, 58]], 9, 10, [[11, 27], [0, 19]], 27,
        // 11-20
        13, [[14, 3], [0, 26]], 15, 15, 16,
        16, 17, [[28, 8, 6], [0, 23, 38]], 8, 11,
        // 21-30
        11, 14, 14, 6, 13,
        26, 27, 27, -1, 6, 6,
        // 31-40
        6, [[18, 28], [0, 34]], 19, 20, 29,
        20, 11, 19, 11, 5,
        // 41-50
        [[11, 29], [0, 37]], 10, 21, 8, 8,
        21, [[21, 5], [0, 78]], 5, 14, -1, 16,
        // 51-
        16, 12, 12, 8, 11,
        12, 12, [[29, 5], [0, 72]], 19, 27,
        27, -1, 22, 14
    ]
    if (LANGUAGE == 'en') {
        BGM_INFO = [
            [[1, 2, 3], [0, 48, 73]],
            // 1-10
            4, [[5, 6], [0, 42]], 3, [[3, 25, 7], [0, 4, 61]], [[8, 11], [0, 24]],
            [[1, 26, 9], [0, 41, 58]], 9, 10, [[11, 27], [0, 19]], 27,
            // 11-20
            13, [[14, 3], [0, 26]], 15, 15, 16,
            16, 17, [[28, 8, 6], [0, 23, 38]], 8, 11,
            // 21-30
            11, 14, 14, 6, 13,
            26, 27, 27, 6, 6,
            // 31-40
            6, [[18, 28], [0, 34]], 19, 20, 29,
            20, 11, 19, 11, 5,
            // 41-50
            [[11, 29], [0, 37]], 10, 21, 8, 8,
            21, [[21, 5], [0, 78]], 5, 14, 16,
            // 51-
            16, 12, 12, 8, 11,
            12, 12, [[29, 5], [0, 72]], 19, 27,
            27, 22, 22, 22, 14, -1
        ]
    }

    const MUSIC_LOCAL_SRC_PREFIX = 'res/music/'
    const MUSIC_LOCAL_SRC_POSTFIX = '.mp3'
    const VOICE_SRC_POSTFIX = '.wav'
    const VOICE_INFO = {
        // chaper: { page: num }
        // chaper: { page: [num, pos] }
        1: {
            3: 1, // c6-7
            4: 1, // c23-5
            14: 2, // c28-4
            en: 1 // offset or mapping for en
        },
        3: {
            8: [2, 58], // c24-11
            14: [1, 40], // c24-11
            15: 2, // c24-11
        },
        4: {
            10: [1, 46.5], // 德莉莎-战斗
        },
        6: {
            4: [1, 18], // c24-11
            en: 1
        },
        7: {
            9: 1, // c2-17
            12: 5, // c24-11
            13: 1, // c24-11
            14: 2, // c24-11
            15: 3, // c24-11
            en: { 9: 9, 13: 12, 14: 13, 15: 14, 16: 15 }
        },
        8: {
            13: 1, // BV1aW411P7UJ
            17: 1, // c2-17
            24: [1, 23], // 原神-温迪-战斗
        },
        10: {
            8: 1, // c9-3
            13: [1, 49.5], // c24-11
            18: 1, // c24-11
            //20: 1, // BV1H54y1y7wJ
            22: [1, 40.5], // c24-11
            en: { 8: 8, 13: 13, 18: 18, 21: 20, 23: 22 }
        },
        11: {
            7: 2, // c24-11
            8: 1, // c24-11
            //18: 1, // c11-15
        },
        12: {
            3: 1, // c11-15
        },
        13: {
            3: [1, 31], // c28-4
            25: 1, // c28-2
        },
        14: {
            8: 4, // c28-4
            9: 1, // c28-4
        },
        15: {
            10: [2, 39.5], // c28-4
            11: 3, // c28-4
            12: 1, // c28-4
        },
        18: {
            20: [2, 62], // c28-4
            21: [2, 27], // c28-4
        },
        19: {
            13: [1, 48], // c24-11
        },
        23: {
            8: [1, 58], // c11-15
            12: [1, 14.5], // c11-15
        },
        26: {
            2: [1, 19.5], // BV1aW411P7UJ
        },
        29: {
            //2: 1, // c11-15
        },
        38: {
            13: 1, // 符华-炽翎-战斗
        },
        45: {
            12: 1, // 符华-迅羽-战斗
            17: 1, // c24-11
        },
        46: {
            3: [1, 43], // c20
            4: 1, // c9-6
        },
        48: {
            14: 1, // BV1H54y1y7wJ
            //15: [1, 62.5], // c13-ex3
        },
        49: {
            //5: [1, 58], // BV1Ut411v74a
        },
        51: {
            3: 1, // c5-10
            19: [1, 54], // c24-11
            20: 2, // c24-11
        },
        53: {
            9: [1, 66], // c24-11
            10: 3, // c24-11
            11: 5, // c24-11
            12: 1, // c24-11
            14: 2, // c24-11
            15: 1, // c24-11
            17: [2, 33], // c24-11
        },
        54: {
            6: [1, 51.5], // c24-11
            7: [1, 31.5], // c24-11
            8: 2, // c24-11
            9: 3, // c24-11
            10: 1, // c24-11
            15: 1, // c24-11
            16: 4, // c24-11
            17: 1, // c24-11
            18: 2, // c24-11
            21: 1, // c24-11
        },
        55: {
            13: 1, // c12-1
        },
        57: {
            21: 1, // c17-10
        },
        58: {
            14: 3, // c24-11
        },
        60: {
            16: [2, 38], // c24-11
            17: 1, // c24-11
            21: 1, // c9-4
        },
        61: {
            10: 1, // c9-3
            19: 1, // c24-11
            20: 3, // c24-11
            21: 1, // c24-11
            22: 1, // c24-11
            23: [1, 57.5], // c24-11
        },
        64: {
            9: [1, 29], // BV1aW411P7UJ
        },
        66: {
            6: 2, // c24-11
            7: 2, // c24-11
            8: 1, // c24-11
            // 46: 1, // BV1H54y1y7wJ
            // 53: [1, 24.5], // BV1H54y1y7wJ
            44: 3, // c28-4
            60: 2, // c28-4
            61: 3, // c28-4
            62: 3, // c28-4
            66: 1, // c24-11
            68: 3, // c24-11
            69: 2, // c24-11
            70: 1, // c24-11
            71: 1, // c24-11
            // en in 63,64,65
        },
        67: {
            22: 1 // BV14X4y1w7P6
            // en in 66
        }
    }
    const VOICE_ICON = '<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"/></svg>'

    const ViewerConfig = { zoomRatio: 0.2 }
    let GlobalViewer = new Viewer(document.getElementById('images'), ViewerConfig)
    let CurrentPage = -1
    let CurrentBgMusicID = -1
    let ShowHomeIndex = false
    let ShowHomeAbout = false
    let ShowMenu = false
    let ShowConfig = false
    let ShowBGMPlayer = false
    let EnableBGM = true
    let BgMusicHandle = 0
    let BgMusicPlayerHeight = 66
    let BgMusicSpecialPause = false
    let BgMusicVolume = 1
    let GlobalTaskInterval = 10
    let GlobalTasks = []
    const KCurrentChapter = 'current-chapter'
    const KGalleryWidth = 'gallery-width'
    const KBgColor = 'bg-color'
    const KBGMEnabled = 'bgm-enabled'
    const KBGMVolume = 'bgm-volume'
    const KVoiceLanguage = 'voice-lang'

    function AddGlobalTask(f, tag, intv) {
        if (intv < 1) {
            intv = 1
        }
        GlobalTasks[tag] = [f, intv, 0]
    }
    function RemoveGlobalTask(tag) {
        delete GlobalTasks[tag]
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
        document.getElementById('home-index-wrapper').style.display = ShowHomeIndex ? 'block' : 'none'
        document.getElementById('home-index-bg').style.display = ShowHomeIndex ? 'block' : 'none'
        document.getElementById('home-index').style.display = ShowHomeIndex ? 'flex' : 'none'
        document.getElementById('home-index-return-bg').style.display = ShowHomeIndex ? 'block' : 'none'
        document.getElementById('home-footer').style.display = ShowHomeIndex ? 'none' : 'block'
        document.getElementById('home-bg').style.display = ShowHomeIndex ? 'none' : 'unset'
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
        document.getElementById('menu-container').style.display = show ? 'block' : 'none'
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
            clearTimeout(BgMusicHandle)
            BgMusicHandle = 0
        }
    }

    const SetBgMusicHandle = function (id, height, time) {
        ClearBgMusicHandle()
        BgMusicHandle = setTimeout(function () {
            SetBGMPlayer(false, id, height)
        }, time)
    }

    const RemoveBGMPlayer = function () {
        ToggleBGMPlayer(false)
        ClearBgMusicHandle()
        CurrentBgMusicID = -1
        var container = document.getElementById('bgm-player-container')
        if (container.children.length > 0) {
            container.removeChild(container.children[0])
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
        var container = document.getElementById('bgm-player-container')
        if (!LOCAL_MODE) {
            var frame = document.createElement('iframe')
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
            var player = document.createElement('audio')
            player.id = 'bgm-player'
            player.loop = true
            player.autoplay = true
            player.controls = true
            player.volume = BGM_BASE_VOLUME[id - 1] * BgMusicVolume
            let src = MUSIC_LOCAL_SRC_PREFIX + id + MUSIC_LOCAL_SRC_POSTFIX
            player.src = src
            player.bgm_id = id
            container.appendChild(player)
            if (id == 28) {
                AddGlobalTask(function () {
                    let p = document.getElementById('bgm-player')
                    if (p.bgm_id === 28 && p.currentTime > 23) {
                        p.currentTime = 5
                    }
                }, '1-bgm-28', 1)
            } else {
                RemoveGlobalTask('1-bgm-28')
            }
        }
        //
        console.log('change bgm to ' + id)
    }

    const SetHomePage = function () {
        var obj_bg = document.getElementById('home-bg')
        obj_bg.src = HOME_BG_SRC
        var obj_bg2 = document.getElementById('home-bg2')
        obj_bg2.src = HOME_BG_SRC
        //
        var a1 = document.getElementById('home-menu-index').children[0]
        a1.onclick = function () {
            ToggleHomeIndex(!ShowHomeIndex)
        }
        //
        var a2 = document.getElementById('home-menu-about').children[0]
        a2.onclick = function () {
            ToggleHomeAbout(true)
        }
        var obj_about_bg = document.getElementById('home-about-bg')
        obj_about_bg.onclick = function () {
            ToggleHomeAbout(false)
        }
        //
        var obj_index = document.getElementById('home-index')
        for (let i = 0; i < NUM_CHAPTER; i++) {
            var obj_container = document.createElement('div')
            var obj_a = document.createElement('a')
            var obj_img_wrapper = document.createElement('div')
            var obj_img = document.createElement('img')
            var obj_text = document.createElement('div')
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
            var obj_i = document.createElement('i')
            obj_index.appendChild(obj_i)
        }
        var obj_index_return = document.getElementById('home-index-return')
        obj_index_return.onclick = function () {
            ToggleHomeIndex(false)
        }
        //
        var obj_banner = document.getElementById('home-index-title-banner')
        var obj_img = document.createElement('img')
        obj_img.id = 'home-index-title-img'
        obj_img.src = BOOK_COVER_SRC
        obj_banner.appendChild(obj_img)
        //
        var obj_text = document.getElementById('home-index-title-text')
        obj_text.textContent = BOOK_DECRIPTION
    }

    const SetMenu = function () {
        var obj_menu_next = document.getElementById('menu-next')
        obj_menu_next.onclick = function () {
            if (CurrentPage < 0 || CurrentPage >= NUM_PAGES - 1) {
                return
            }
            GotoPage(CurrentPage + 1)
        }
        var obj_menu_prev = document.getElementById('menu-prev')
        obj_menu_prev.onclick = function () {
            if (CurrentPage < 1 || CurrentPage >= NUM_PAGES) {
                return
            }
            GotoPage(CurrentPage - 1)
        }
        var obj_menu_home = document.getElementById('menu-home')
        obj_menu_home.onclick = function () {
            GotoHome()
            ToggleHomeIndex(true)
        }
        var obj_menu_bgm = document.getElementById('menu-bgm')
        obj_menu_bgm.onclick = function () {
            ToggleBGMPlayer(!ShowBGMPlayer)
        }
        var obj_menu_config = document.getElementById('menu-config')
        obj_menu_config.onclick = function () {
            ToggleConfig(!ShowConfig)
        }
        //
        var container = document.getElementById('menu-container')
        container.onclick = function (e) {
            e.stopPropagation()
        }
        document.body.onclick = function () {
            ToggleConfig(false)
            ToggleBGMPlayer(false)
        }
    }

    const SetStyle = function () {
        var ret_btn = document.getElementById('home-index-return')
        if (LANGUAGE == 'en') {
            ret_btn.style.fontSize = '2rem'
        }
    }

    const ClearGallery = function () {
        GlobalViewer.hide()
        var obj_gallery = document.getElementById('gallery')
        var target = obj_gallery.children[0]
        if (target) {
            obj_gallery.removeChild(target)
        }
    }

    const AddToGallery = function (e) {
        var obj_gallery = document.getElementById('gallery')
        obj_gallery.appendChild(e)
    }

    const GotoHome = function () {
        CurrentPage = -1
        ClearGallery()
        RemoveBGMPlayer()
        ToggleConfig(false)
        ToggleMenu(false)
        var title = document.getElementById('home')
        title.style.display = 'block'
        SetLocalStorage(KCurrentChapter, -1)
    }

    const GotoPage = function (idx) {
        if (idx >= NUM_CHAPTER) {
            return
        }
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
        var ctitle = document.getElementById('chapter-title')
        if (ctitle) {
            ctitle.textContent = GetChapterTitle(idx) //+ ' ' + (idx + 1)
        }
        //
        console.log('ClearGallery')
        ClearGallery()
        const num_page = NUM_PAGES[idx]
        var obj_ul = document.createElement('ul')
        obj_ul.id = 'images'
        for (let i = 0; i < num_page; i++) {
            var obj_li = document.createElement('li')
            var obj_div = document.createElement('div')
            var obj_img = document.createElement('img')
            var num = '' + (i + 1)
            num = '0'.repeat(4 - num.length) + num
            var src = IMG_SRC_PREFIX + (idx + 1) + '/' + num + '.jpg'
            obj_img.src = src
            obj_img.alt = num + '.jpg'
            obj_img.className = 'content-img'
            obj_div.className = 'content-img-wrapper'
            obj_div.appendChild(obj_img)
            obj_li.appendChild(obj_div)
            obj_ul.appendChild(obj_li)
            //
            var voice_info = GetVoiceInfo(idx, i)
            var num_voice = 0
            var voice_pos = 0
            if (typeof (voice_info) == 'number') {
                num_voice = voice_info
            } else {
                num_voice = voice_info[0]
                voice_pos = voice_info[1]
            }
            var obj_voice_list = num_voice ? document.createElement('div') : null
            if (num_voice) {
                obj_voice_list = document.createElement('div')
                obj_voice_list.className = 'voice-icon-list'
                obj_div.appendChild(obj_voice_list)
                if (voice_pos > 0) {
                    obj_voice_list.style.top = voice_pos + '%'
                }
            }
            for (let j = 0; j < num_voice; j++) {
                var obj_icon_box = document.createElement('div')
                obj_icon_box.innerHTML = VOICE_ICON
                obj_icon_box.className = 'voice-icon-box'
                var handle = 0
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
                    var player = document.getElementById('voice-player')
                    player.pause()
                    player.src = GetVoiceSrc(idx, i, j)
                    player.play()
                }
                obj_voice_list.appendChild(obj_icon_box)
            }
        }
        AddToGallery(obj_ul)
        GlobalViewer = new Viewer(obj_ul, ViewerConfig)
    }

    function ReverseColor(rgbColor) {
        rgbColor = rgbColor.replace(/\s/g, "");
        var arrRGB = new Array(3);
        if (rgbColor.indexOf("#") > -1) {
            if (rgbColor.length > 4) {
                var j = 1;
                for (var i = 0; i < arrRGB.length; i++) {
                    arrRGB[i] = 255 - parseInt(rgbColor.substr((i + j), 2), 16);
                    j += 1;
                }
            } else {
                for (var i = 0; i < arrRGB.length; i++) {
                    var t = rgbColor.substr((i + 1), 1);
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
        var sheets = document.styleSheets
        for (let i = 0; i < sheets.length; i++) {
            const e = sheets[i]
            if (!e.href) {
                for (let j = 0; j < e.cssRules.length; j++) {
                    const rule = e.cssRules[j]
                    if (rule.selectorText == '.menu-icon') {
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
        var lastBgColor = GetLocalStorage(KBgColor)
        if (lastBgColor) {
            bg_select.selectedIndex = Number(lastBgColor)
            SetBackgroundColor()
        }
        //
        const bgm_switch = document.getElementById('menu-config-bgm-switch')
        var handle = 0
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
                    var id = GetBgMusicID(CurrentPage, GetScrollRatio())
                    SetBGMPlayer(false, id, BgMusicPlayerHeight)
                } else {
                    RemoveBGMPlayer()
                }
            }, 500)
        }
        var lastBGMEnabled = GetLocalStorage(KBGMEnabled)
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
        var lastWidth = GetLocalStorage(KGalleryWidth)
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
            var player = document.getElementById('bgm-player')
            if (player && CurrentBgMusicID > 0) {
                player.volume = BGM_BASE_VOLUME[CurrentBgMusicID - 1] * BgMusicVolume
            }
        }
        var lastVolume = GetLocalStorage(KBGMVolume)
        if (lastVolume) {
            volume_setter.value = lastVolume
            volume_setter.onchange()
        }
        //
        if (LANGUAGE == 'en') {
            document.getElementById('menu-config-vlang-container').style.display = 'block'
            const vlang_select = document.getElementById('menu-config-vlang')
            vlang_select.onchange = function () {
                SetLocalStorage(KVoiceLanguage, vlang_select.selectedIndex)
                VOICE_LANGUAGE = vlang_select.value
            }
            var lastVLang = GetLocalStorage(KVoiceLanguage)
            if (lastVLang) {
                vlang_select.selectedIndex = Number(lastVLang)
                vlang_select.onchange()
            }
        }
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
        var v = BGM_INFO[index]
        var id = -1
        if (typeof (v) == 'number') {
            if (v < 0) {
                return -1
            }
            id = LOCAL_MODE ? v : BGM_SINGLE_ID[v - 1]
        } else {
            var idx = 0
            for (let i = 0; i < v[0].length; i++) {
                const value = v[1][i];
                if (ratio > value - 0.1) {
                    idx = v[0][i]
                }
            }
            id = LOCAL_MODE ? idx : BGM_SINGLE_ID[idx - 1]
        }
        return id
    }

    function GetScrollRatio() {
        var totalH = document.body.scrollHeight || document.documentElement.scrollHeight
        var clientH = window.innerHeight || document.documentElement.clientHeight
        var validH = totalH - clientH
        var scrollH = document.body.scrollTop || document.documentElement.scrollTop
        return scrollH / validH * 100
    }

    window.addEventListener('scroll', function (e) {
        var ratio = GetScrollRatio()
        if (EnableBGM && CurrentPage > -1) {
            var id = GetBgMusicID(CurrentPage, ratio)
            if (id != CurrentBgMusicID) {
                SetBgMusicHandle(id, BgMusicPlayerHeight, 500)
            }
        }
        //debug
        // document.getElementById('chapter-title').textContent = ratio.toFixed(2)
    })

    let IsFirstClick = true
    window.addEventListener('click', function (e) {
        if (!IsFirstClick) {
            return
        }
        IsFirstClick = false
        if (EnableBGM && CurrentPage > -1) {
            var player = document.getElementById('bgm-player')
            if (player && player.paused) {
                player.play()
            }
        }
    })

    function GetVoiceInfo(i_chapter, i_page) {
        const invalid = 0
        if (LANGUAGE != 'en') {
            if (!VOICE_INFO[i_chapter + 1]) {
                return invalid
            }
            var v = VOICE_INFO[i_chapter + 1][i_page + 1]
            if (!v) {
                return invalid
            }
            return v
        } else {
            var num = i_chapter + 1
            var c = num
            if (num >= 30 && num <= 50) {
                c = num + 1
            } else if (num >= 51 && num <= 62) {
                c = num + 2
            } else if (num == 63) {
                c = 66
            } else if (num == 64) {
                c = 66
                i_page += 26
            } else if (num == 65) {
                c = 66
                i_page += 48
            } else if (num == 66) {
                c = 67
            }
            if (!VOICE_INFO[c]) {
                return invalid
            }
            if (VOICE_INFO[c].en) {
                mapping = VOICE_INFO[c].en
                if (typeof (mapping) == 'number') {
                    i_page -= mapping
                } else if (mapping[i_page + 1]) {
                    i_page = mapping[i_page + 1] - 1
                } else {
                    return invalid
                }
            }
            var v = VOICE_INFO[c][i_page + 1]
            if (!v) {
                return invalid
            }
            return v
        }
    }

    function GetVoiceSrc(i_chapter, i_page, i_voice) {
        var c = '' + (i_chapter + 1)
        var p = '' + (i_page + 1)
        var v = '' + (i_voice + 1)
        if (LANGUAGE == 'en') {
            var num = i_chapter + 1
            c = num
            if (num >= 30 && num <= 50) {
                c = num + 1
            } else if (num >= 51 && num <= 62) {
                c = num + 2
            } else if (num == 63) {
                c = 66
            } else if (num == 64) {
                c = 66
                i_page += 26
            } else if (num == 65) {
                c = 66
                i_page += 48
            } else if (num == 66) {
                c = 67
            }
            if (num <= 62 && VOICE_INFO[c] && VOICE_INFO[c].en) {
                var mapping = VOICE_INFO[c].en
                if (typeof (mapping) == 'number') {
                    i_page -= mapping
                } else if (mapping[i_page + 1]) {
                    i_page = mapping[i_page + 1] - 1
                }
            }
            c = '' + c
            p = '' + (i_page + 1)
        }
        var file = [c, p, v].map(function (e, i, a) {
            return '0'.repeat(2 - e.length) + e
        }).join('_') + VOICE_SRC_POSTFIX
        return (VOICE_LANGUAGE == 'jp' ? 'res/voice_jp/' : 'res/voice/') + file
    }

    function GetChapterCoverSrc(i) {
        var num = i + 1
        if (LANGUAGE != 'en') {
            return COVER_SRC_PREFIX + num + '.jpg'
        } else {
            //[30, 52, 65]
            var n = null
            if (num <= 29) {
                n = num
            } else if (num >= 30 && num <= 51) {
                n = num + 1
            } else if (num >= 52 && num <= 62) {
                n = num + 2
            } else if (num == 63) {
                if (LOCAL_MODE) {
                    return 'img/chapter_cover/1012/66.jpg'
                } else {
                    n = 65
                }
            } else if (num == 64) {
                if (LOCAL_MODE) {
                    return 'img/chapter_cover/1012_en/64.jpg'
                } else {
                    n = 65
                }
            } else if (num == 65) {
                if (LOCAL_MODE) {
                    return 'img/chapter_cover/1012_en/65.jpg'
                } else {
                    n = 65
                }
            } else if (num == 66) {
                n = 67
            } else {
                if (LOCAL_MODE) {
                    return 'img/chapter_cover/1012_en/67.jpg'
                } else {
                    return 'https://d2tpbmzklky1cl.cloudfront.net/manga/static/comic/chapter_cover/1005/67.jpg'
                }
            }
            return COVER_SRC_PREFIX + n + '.jpg'
        }
    }

    function GetChapterTitle(i) {
        if (LANGUAGE == 'jp') {
            return CHAPTER_TITLES_JP[i]
        }
        if (LANGUAGE == 'en') {
            return CHAPTER_TITLES_EN[i]
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
        var v = undefined
        try {
            v = window.localStorage.getItem(k)
        } catch (error) {
        }
        return v
    }

    function ReplaceString(id, str) {
        var obj = document.getElementById(id)
        if (obj) {
            obj.innerText = str
        }
    }

    function ReplaceHtml(id, str) {
        var obj = document.getElementById(id)
        if (obj) {
            obj.innerHTML = str
        }
    }

    const I18N_STRING = {
        'page-title': { en: 'Second Eruption', jp: '第二次崩壊' },
        'home-title': { en: 'Second Eruption', jp: '第二次崩壊' },
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
    const I18N_HTML = {
        'home-about-content': {
            en: `
            <p>
                This webpage is an enhanced edition of <a class="about-link" href="https://manga.honkaiimpact3.com/book/1005">Second Eruption</a>. All pictures, musics and voices are from miHoYo. Some voices are edited.
                <br />
                BGM playlist provider: <a class="about-link" href="https://space.bilibili.com/18882628">Bilibili@Eastenhhh</a>, <a class="about-link" href="https://space.bilibili.com/252972714">Bilibili@咖啡好苦请不要加糖</a>.
                <br />
                Japanese version source: <a class="about-link" href="https://drive.google.com/drive/folders/1k-4hZvFf1d4nvZqXUPMOxT5mDK80kQuu">Google Drive</a>
                <br />
                Japanese version translator: <a class="about-link" href="https://twitter.com/ccyn3rd">Twitter@しこやん</a>
                <br />
                Image viewer: <a class="about-link" href="https://fengyuanchen.github.io/viewerjs">Viewer.js</a>.
                <br />
                Code repository: <a class="about-link" href="https://github.com/Xrysnow/TheSecondEruptionEnhancedEdition">Github</a>.
                <br />
                * Due to the removal of background sounds and other reasons, some voices will be unnatural.
                <br />
                * BGM may not play automatically if there is reading progress. Click on the blank space to play.
            </p>
            <p>
                Features:
                <br />
                - Better contents
                <br />
                - Side toolbar
                <br />
                - Image viewer (click a picture to enter)
                <br />
                - Automatic BGM playback and page-accurate switching
                <br />
                - Corresponding voice of specific pages (click buttons on the right side of the picture to play)
                <br />
                - Reading progress and settings saving
                <br />
                - See settings for more features
            </p>
            <p>Original: miHoYo</p>
            <p>Made by: Xrysnow</p>
            <p>2022.02.13</p>
            `,
            jp: `
            <p>
            この作品は<a class="about-link"
                href="https://comic.bh3.com/book/1012">漫画「第二次崩壊」</a>の二次創作です。画像、音楽、ボイスはmiHoYo公式より。ボイスは一部編集されています。
            <br />
            BGMリスト提供：<a class="about-link" href="https://space.bilibili.com/18882628">ピリピリ@Eastenhhh</a>、<a class="about-link" href="https://space.bilibili.com/252972714">ピリピリ@咖啡好苦请不要加糖</a>
            <br />
            日本語版ソース：<a class="about-link"
                href="https://drive.google.com/drive/folders/1k-4hZvFf1d4nvZqXUPMOxT5mDK80kQuu">Google
                Drive</a>
            <br />
            日本語版の翻訳：<a class="about-link" href="https://twitter.com/ccyn3rd">Twitter@しこやん</a>
            <br />
            イメージビューア：<a class="about-link" href="https://fengyuanchen.github.io/viewerjs">Viewer.js</a>
            <br />
            コードリポジトリ：<a class="about-link"
                href="https://github.com/Xrysnow/TheSecondEruptionEnhancedEdition">Github</a>
            <br />
            * 背景音の除去などにより、一部のボイスが不自然になることがあります。
            <br />
            * 進捗状況があるの場合、BGMが自動的に再生されないことがあります。ページの空白をクリックすると再生されます。
        </p>
        <p>
            機能紹介：
            <br />
            - 改良された目次
            <br />
            - サイドツールバー
            <br />
            - イメージビューア（画像をクリックするとアクセスできます）
            <br />
            - BGMの自動再生と切り替え
            <br />
            - 特定のページに対応するボイス（画像の右のボタンをクリックすると再生されます）
            <br />
            - 進捗状況と設定の保存
            <br />
            - その他の機能については、設定をご覧ください
        </p>
        <p>原作：miHoYo</p>
        <p>製作：Xrysnow</p>
        <p>2022.02.13</p>
        `
        }
    }
    if (LANGUAGE == 'en' || LANGUAGE == 'jp') {
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

    let lastCurrentChapter = GetLocalStorage(KCurrentChapter)
    if (lastCurrentChapter) {
        GotoPage(Number(lastCurrentChapter))
    } else {
        GotoPage(-1)
    }
})();