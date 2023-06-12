const AltStorage = {
    _data: {},
    getItem: function (k) {
        return this._data[k]
    },
    setItem: function (k, v) {
        this._data[k] = v
    },
    removeItem: function (k) {
        delete this._data[k]
    }
}

const Settings = {
    KCurrentBook: '/honkai-comic/current-book',
    KCurrentChapter: '/honkai-comic/current-chapter',
    KGalleryWidth: '/honkai-comic/gallery-width',
    KBgColor: '/honkai-comic/bg-color',
    KBGMEnabled: '/honkai-comic/bgm-enabled',
    KBGMVolume: '/honkai-comic/bgm-volume',
    KVoiceEnabled: '/honkai-comic/voice-enabled',
    KVoiceVolume: '/honkai-comic/voice-volume',
    KFinishedChapters: '/honkai-comic/finished-chapters',
    KBookModes: '/honkai-comic/book-modes',
    KLoadCount: '/honkai-comic/load-count',

    setLocalStorage: function (k, v) {
        if (!window.localStorage) {
            window.localStorage = AltStorage
        }
        try {
            window.localStorage.removeItem(k)
            window.localStorage.setItem(k, v)
        } catch (error) {
        }
    },
    getLocalStorage: function (k) {
        if (!window.localStorage) {
            return undefined
        }
        let v = undefined
        try {
            v = window.localStorage.getItem(k)
        } catch (error) {
        }
        return v
    },

    setDefault: function () {
        if (this.getLocalStorage(this.KGalleryWidth) == undefined) {
            console.log('set default GalleryWidth')
            this.setGalleryWidth(80)
        }
        if (this.getLocalStorage(this.KBGMEnabled) == undefined) {
            console.log('set default BGMEnabled')
            this.setBgmEnabled(true)
        }
        if (this.getLocalStorage(this.KBGMVolume) == undefined) {
            console.log('set default BGMVolume')
            this.setBgmVolume(50)
        }
        if (this.getLocalStorage(this.KVoiceEnabled) == undefined) {
            console.log('set default VoiceEnabled')
            this.setVoiceEnabled(true)
        }
        if (this.getLocalStorage(this.KVoiceVolume) == undefined) {
            console.log('set default VoiceVolume')
            this.setVoiceVolume(100)
        }
    },

    clearStorage: function () {
        if (!window.localStorage) {
            return
        }
        let keys = Object.keys(this)
        for (let i = 0; i < keys.length; i++) {
            const k = keys[i]
            if (k[0] == 'K') {
                try {
                    window.localStorage.removeItem(this[k])
                } catch (error) {
                }
            }
        }
    },

    setCurrentChapter: function (idxBook, idxChapter) {
        this.setLocalStorage(this.KCurrentBook, Number(idxBook))
        this.setLocalStorage(this.KCurrentChapter, Number(idxChapter))
    },
    getCurrentChapter: function () {
        let idxBook = Number(this.getLocalStorage(this.KCurrentBook))
        let idxChapter = Number(this.getLocalStorage(this.KCurrentChapter))
        return [idxBook, idxChapter]
    },

    setGalleryWidth: function (value) {
        this.setLocalStorage(this.KGalleryWidth, value)
    },
    getGalleryWidth: function () {
        return Number(this.getLocalStorage(this.KGalleryWidth))
    },

    setBgColor: function (idx) {
        this.setLocalStorage(this.KBgColor, idx)
    },
    getBgColor: function () {
        return Number(this.getLocalStorage(this.KBgColor))
    },

    setBgmEnabled: function (value) {
        this.setLocalStorage(this.KBGMEnabled, Number(value > 0))
    },
    getBgmEnabled: function () {
        return Number(this.getLocalStorage(this.KBGMEnabled)) > 0
    },

    setBgmVolume: function (value) {
        this.setLocalStorage(this.KBGMVolume, Number(value))
    },
    getBgmVolume: function () {
        return Number(this.getLocalStorage(this.KBGMVolume))
    },

    setVoiceEnabled: function (value) {
        this.setLocalStorage(this.KVoiceEnabled, Number(value > 0))
    },
    getVoiceEnabled: function () {
        return Number(this.getLocalStorage(this.KVoiceEnabled)) > 0
    },

    setVoiceVolume: function (value) {
        this.setLocalStorage(this.KVoiceVolume, Number(value))
    },
    getVoiceVolume: function () {
        return Number(this.getLocalStorage(this.KVoiceVolume))
    },

    setFinishedChapters: function (value) {
        if (typeof (value) != 'string') {
            value = JSON.stringify(value)
        }
        this.setLocalStorage(this.KFinishedChapters, value)
    },
    getFinishedChapters: function () {
        let value = this.getLocalStorage(this.KFinishedChapters)
        if (!value) {
            return undefined
        }
        return JSON.parse(value)
    },
    addFinishedChapter: function (ibook, ichapter, progress) {
        let value = this.getFinishedChapters()
        if (!value) {
            value = {}
        }
        if (!value[ibook]) {
            value[ibook] = {}
        }
        value[ibook][ichapter] = true
        value[ibook]['progress'] = progress
        this.setFinishedChapters(value)
    },
    isChapterFinished: function (ibook, ichapter) {
        let value = this.getFinishedChapters()
        if (!value || !value[ibook]) {
            return false
        }
        return Boolean(value[ibook][ichapter])
    },
    getBookProgress: function (ibook) {
        let value = this.getFinishedChapters()
        if (!value || !value[ibook] || !value[ibook]['progress']) {
            return 0
        }
        return Number(value[ibook]['progress'])
    },

    setBookMode: function (ibook, mode) {
        let value = this.getLocalStorage(this.KBookModes)
        if (!value) {
            value = {}
        } else {
            value = JSON.parse(value)
        }
        if (!mode) {
            value[ibook] = 'none'
        } else {
            value[ibook] = mode
        }
        this.setLocalStorage(this.KBookModes, JSON.stringify(value))
    },
    getBookMode: function (ibook) {
        let value = this.getLocalStorage(this.KBookModes)
        if (!value) {
            return null
        }
        value = JSON.parse(value)
        if (!value[ibook]) {
            return null
        }
        return value[ibook]
    },

    updateLoadCount: function () {
        let value = this.getLoadCount()
        value += 1
        this.setLocalStorage(this.KLoadCount, value)
    },
    getLoadCount: function () {
        let value = Number(this.getLocalStorage(this.KLoadCount))
        if (isNaN(value)) {
            return 0
        }
        return value
    },
}
Settings.setDefault()

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
    },
    htmlParent: function (element, level) {
        if (level == undefined) {
            level = 1
        }
        /**@type {HTMLElement}*/
        let temp = element
        for (let index = 0; index < level; index++) {
            temp = temp.parentElement
        }
        return temp
    },
    //
    getImageSizeAsync: function (src, callback) {
        let img = new Image()
        img.src = src
        let set = 0
        let check = function () {
            if (img.width > 0 || img.height > 0) {
                callback([img.width, img.height])
                clearInterval(set)
            }
        }
        set = setInterval(check, 20)
    },
    isImageCrossPage: function (w, h, ibook) {
        if (ibook == 1012) {
            return w * 1.15 > h
        }
        return w > h
    },
    //
    getQueryString: function (name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
        let r = window.location.search.substring(1).match(reg)
        if (r != null) {
            return decodeURI(r[2])
        }
        return null
    },
    isMobile: function () {
        let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
        let getArr = Agents.filter(i => navigator.userAgent.includes(i))
        return getArr.length ? true : false
    },
    isOnWeb: function () {
        return window.location.protocol.substring(0, 4) == 'http'
    },
    getLanguage: function () {
        const META = document.getElementsByTagName('meta')
        /**@type {string}*/
        let lang = META['content-language'].content || 'zh'
        let query = window.location.search.substring(1)
        let vars = query.split("&")
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split("=")
            if (pair[0] == 'lang') { lang = pair[1] }
        }
        return lang
    },
    getImgSrcPrefix: function () {
        if (AppInfo.ImageLocal) {
            return '../res/img/'
        }
        return 'https://comicstatic.bh3.com/new_static_v2/comic/'
    },
    getImgLegacySrcPrefix: function () {
        if (AppInfo.ImageLocal) {
            return '../res/img/legacy/'
        }
        return 'http://static-event.benghuai.com/ip_resources_new/comic/'
    },
    getBgmSrc: function (id) {
        return '../res/music/' + id + '.mp3'
    },
    // for index
    getBookCoverSrc: function (id) {
        if (id == 101) {
            return this.getImgLegacySrcPrefix() + '3/cover/avatar.jpg'
        } else if (id == 102) {
            return this.getImgLegacySrcPrefix().replace('comic/', '') + 'preheat/cover/avatar.jpg'
        } else if (200 < id && id < 300) {
            let i = 4 - (id - 200)
            return this.getImgSrcPrefix().replace('comic/', '') + 'fiction/20200309' + i + '.jpg'
        }
        return this.getImgSrcPrefix() + 'book_cover/' + id + '.jpg'
    },
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
    },
    checkNumber: function (value, lo, hi, allowInf) {
        value = Number(value)
        if (isNaN(value)) {
            return false
        }
        if (!allowInf && !isFinite(value)) {
            return false
        }
        if (typeof (lo) == 'number' && value < lo) {
            return false
        }
        if (typeof (hi) == 'number' && value > hi) {
            return false
        }
        return true
    },
}

let ComicData = [
    {
        id: 1001,
        title: '逃离长空篇',
        type: '主线',
        date: [[2015, 6], [2015, 9]],
        page: 'common.html?id=1001',
        description: '紧接着《崩坏学园2》的游戏剧情，2014年，在长空市中，发生了强烈的崩坏。琪亚娜，雷电芽衣，布洛妮娅三个少女在逃离长空市的过程中，遇到了天命组织的女武神，无量塔姬子...',
    },
    {
        id: 1002,
        title: '樱花追忆篇',
        type: '主线',
        date: [[2015, 10], [2016, 2]],
        page: 'common.html?id=1002',
        description: '被无量塔姬子带入圣芙蕾雅学园的琪亚娜三人，在学园长德丽莎的要求下，接受成为女武神的培训，在训练过程中，琪亚娜却意外遇见了500年前死去的祖先卡莲，和卡莲纠缠一生的“她”，也出现在了德丽莎的面前...',
    },
    {
        id: 101,
        title: '番外篇',
        type: '未收录',
        date: [[2015, 2], [2016, 7]],
        page: 'common.html?id=101',
        description: '崩坏学园漫画短篇集，用漫画的形式将生在崩坏中的点点滴滴记录在画页上。邀请风格不同的画师太太们用不同的风格为您展示崩坏不一样的魅力',
        deprecated: true,
    },
    {
        id: 102,
        title: '爱酱的事实',
        type: '未收录',
        date: [[2016, 6], [2016, 10]],
        page: 'common.html?id=102',
        description: '休伯利安号战舰AI娘、第一人气偶像爱酱，竟然是使得游戏迟迟不能公测的幕后黑手？！',
        deprecated: true,
    },
    {
        id: 1003,
        title: '圣痕之谜篇',
        type: '已删除',
        date: [[2016, 3], [2016, 6]],
        page: 'common.html?id=1003',
        description: '在传说中，在古代的神州，英雄姬轩辕手持轩辕剑，在崩坏兽的威胁下拯救了人类。5000年后，为了寻找传说中的轩辕剑和圣痕，无量塔姬子，琪亚娜和符华来到了神州南部的海底，探索失落的传奇...',
        deprecated: true,
    },
    {
        id: 1004,
        title: '绀海篇',
        type: '番外',
        date: [[2016, 7], [2016, 9]],
        page: 'common.html?id=1004',
        description: '故事发生在《崩坏学园2》之前，在寒冷的俄罗斯雪原中，被称为乌拉尔银狼的杀手布洛妮娅和平凡的少女希儿相遇了，等待她们的，却是成为崩坏能实验体的命运...',
    },
    {
        id: 1005,
        title: '绯樱篇',
        type: '番外',
        date: [[2015, 2], [2015, 6]],
        page: 'common.html?id=1005',
        description: '故事发生在《崩坏学园2》之前，在500年前的日本，名为八重樱的巫女生活在一个平静的小村中，一个漂流来的修女，和她带着的蕴含着可怕力量的水晶，打破了这虚伪的平静...',
    },
    {
        id: 1006,
        title: '逆熵入侵篇',
        type: '主线',
        date: [[2016, 10], [2017, 3]],
        page: 'common.html?id=1006',
        description: '故事发生在圣痕之谜篇之后，在九幽深受重伤的姬子，生命处于危险之中...为了变强保护重要的人，琪亚娜参加了德丽莎设计的训练，但在这时候，逆熵开始了对圣芙蕾雅学园的入侵！',
    },
    {
        id: 1007,
        title: '恩返篇',
        type: '主线',
        date: [[2017, 3], [2017, 6]],
        page: 'common.html?id=1007',
        description: '德丽莎背部的八重樱圣痕出现了异常，令德丽莎陷入了昏迷之中。为了唤醒德丽莎，芽衣进入了圣痕的数据空间中调查圣痕异常的原因。而此时，“她”也出现在了被封闭在圣痕空间中的德丽莎面前…',
    },
    {
        id: 1008,
        title: '月影篇',
        type: '主线',
        date: [[2017, 7], [2017, 9]],
        page: 'common.html?id=1008',
        description: '在第一律者复制人入侵圣芙蕾雅学园的风波平息之后，姬子也从昏迷中苏醒了过来。正当大家在为姬子的归来庆祝之时，符华却收到了一项神秘的任务。并且，这项任务的委托人给了她一个奇怪的指令…',
    },
    {
        id: 201,
        title: '逆熵',
        type: '视觉小说',
        date: [[2017, 8], [2018, 7]],
        page: 'https://event.bh3.com/avgAntiEntropy/indexAntiEntropy.php',
        description: '-',
    },
    {
        id: 1009,
        title: '紫鸢篇',
        type: '主线',
        date: [[2017, 10], [2018, 2]],
        page: 'common.html?id=1009',
        description: '公元1470年，意图扩张势力的天命发动了一场规模巨大的东征。尽管对这场战争的目的心怀疑惑，但天命最强的女武神卡莲·卡斯兰娜还是服从了组织的命令。但在战场上，她的觉悟受到了质疑…',
    },
    {
        id: 1010,
        title: '神之键秘话',
        type: '番外',
        date: [[2017, 1], [2018, 11]],
        page: 'common.html?id=1010',
        description: '距离现在的五万多年前，上个世代的人类已经发展出了高度的文明，为了和律者战斗，人们通过研究律者核心的残片，制作出了抵抗崩坏、守护未来的关键武器——神之键。',
    },
    {
        id: 1011,
        title: '玩崩坏3的琪亚娜',
        type: '番外',
        date: [[2018, 2]],
        page: 'common.html?id=1011',
        description: '琪亚娜刚刚入坑以自己为原型的游戏《崩坏3》，符华以资深老玩家的身份想对她展开全面的指导，但是却发现，自己与“欧洲人”琪亚娜之间，存在着血统的差距…',
    },
    {
        id: 1012,
        title: '第二次崩坏',
        type: '主线',
        date: [[2018, 3], [2019, 9]],
        page: 'common.html?id=1012',
        description: '2000年2月1日午夜，在西伯利亚的天命巴比伦实验室中，所有研究员一夜之间全部消失。在奥托下令调查这起“神秘”事件的同时，还有人似乎在担忧着“她”的出现。而这一切，揭开了第二次崩坏的序幕…',
    },
    {
        id: 1013,
        title: '女武神的餐桌',
        type: '番外',
        date: [[2018, 4], [2020, 6]],
        page: 'common.html?id=1013',
        description: '这是回到宿舍的女武神们，发生在她们身上的和食物有关的故事。女武神们做的料理各不相同，但是其中蕴含的心意，对重要的人想要传达的思念，却是相通的。',
    },
    {
        id: 1014,
        title: '夏日回忆-预告篇',
        type: '番外',
        date: [[2018, 7], [2018, 8]],
        page: 'common.html?id=1014',
        description: '在街头徘徊的琪亚娜正在为打工而苦恼，阴差阳错之下她来到了吼姆欢乐餐厅，还通过了面试，然而意想不到的事还是发生了，并由此拉开了这个夏天的序幕…',
    },
    {
        id: 202,
        title: '幽兰黛尔',
        type: '视觉小说',
        date: [[2018, 11], [2020, 3]],
        page: 'https://event.bh3.com/avgAntiEntropy/indexDurandal.php',
        description: '-',
    },
    {
        id: 1015,
        title: '双子：起源',
        type: '番外',
        date: [[2019, 5]],
        page: 'common.html?id=1015',
        description: '故事发生在一座孤儿院；这里白天阳光明媚，夜晚阴森可怖；每隔一段时日，就有孩子神秘消失……阿琳姐妹无意中发现了美艳女院长“妈妈”的秘密，就此展开一段跌宕起伏的冒险！',
    },
    {
        id: 1016,
        title: '双子：入侵',
        type: '番外',
        date: [[2019, 6], [2020, 7]],
        page: 'common.html?id=1016',
        description: '故事发生在一座基地，这里白天灯光明媚，夜晚也灯光明媚；每隔一段时日，就有研究员不省人事……逆熵姐妹无意中发现了知名偶像“伏特加女孩”的秘密，就此展开一段跌宕起伏的冒险！',
    },
    {
        id: 1017,
        title: '蛇之篇',
        type: '番外',
        date: [[2019, 10]],
        page: 'common.html?id=1017',
        description: '「蛇」，一种扎根于人类诸多神话与古老传说中的生物，其信仰之起源已无从考证。如今，一切历史与预言将要被应验，一场席卷这个世界的风暴即将来临。',
    },
    {
        id: 1018,
        title: '雾都假日',
        type: '主线',
        date: [[2019, 10], [2020, 1]],
        page: 'common.html?id=1018',
        description: '在英国伦敦的繁华街道上，幽兰黛尔与丽塔不约而同地踏足于此，远离崩坏的战场与激烈的战斗，在这片历史悠久的土地上，迎接她们的是全新的任务，还是一场久违的假日？',
    },
    {
        id: 203,
        title: '神州折剑录',
        type: '视觉小说',
        date: [[2019, 11], [-1, -1]],
        page: 'https://webstatic.mihoyo.com/bh3/event/novel-7swords/index.html#/',
        description: '-',
    },
    {
        id: 1019,
        title: '年岁',
        type: '番外',
        date: [[2020, 1]],
        page: 'common.html?id=1019',
        description: '时值大唐时期，神州鼎盛于世间。但高度的文明却让这片大地成为崩坏侵蚀的目标，在灾祸的巨浪之中，文明的壁垒摇摇欲坠。而此刻，神州最后的护盾则是名为“赤鸢”的仙人。临近年关，面对热情邀请仙人一起过年的村民，仙人却转身离去…',
    },
    {
        id: 1020,
        title: '武装人偶',
        type: '番外',
        date: [[2020, 1]],
        page: 'common.html?id=1020',
        description: '身体量子化的薛定谔穿梭寻访于不同的世界泡之中，探索着世界的真相。她拜访过很多世界泡，也接触了很多形形色色的事物。薛定谔本以为自己已经习惯了各种奇怪的设定，只是这一次，真的有点奇怪…',
    },
    {
        id: 1021,
        title: '传承',
        type: '主线',
        date: [[2020, 2], [2020, 6]],
        page: 'common.html?id=1021',
        description: '在过去的4500年间，第二神之键一直被用于观测「虚数之树」上的其他「平行世界」。盛者必衰，一度辉煌的文明，终究会凋零。隐藏在第二神之键中的答案，正缓缓浮出水面…',
    },
    {
        id: 1022,
        title: '云墨剑心',
        type: '番外',
        date: [[2020, 4]],
        page: 'common.html?id=1022',
        description: '魔教办的「圣火大会」震动中原，若是能击败「天下第二」的阎世罗，定是能名扬天下。各界皆派了高手前来应战，太虚山赤鸢仙人和首徒林朝雨亦不例外。但是，她们还有着别的目的——入魔者，杀无赦。',
    },
    {
        id: 1023,
        title: '异乡',
        type: '主线',
        date: [[2020, 7], [2020, 12]],
        page: 'common.html?id=1023',
        description: '2029年，银河某处。星门已然开启，天上之人一定会循着「信标」而来。而我们则要将视线投向过去，回到第四神之键刚刚修复完成的时候…',
    },
    {
        id: 1024,
        title: '新春旅行',
        type: '番外',
        date: [[2021, 1]],
        page: 'common.html?id=1024',
        description: '对“过年”这一神州盛典进行了各种考察的德丽莎，制定了最终的计划。南国、海岛、神秘的年兽……奇妙的旅程即将拉开序幕？',
    },
];

const AlbumInfo = {
    崩坏学园2: ['崩坏学园2 OST'],
    Impact: ['崩坏3-Impact-Original Soundtrack'],
    女武神的餐桌: ['崩坏3「女武神的餐桌」Original Soundtrack'],
    Onwards: ['崩坏3-Onwards-Original Soundtrack'],
    DualEgo: ['Dual-Ego'],
    后崩坏书: ['崩坏3-后崩坏书-Original Soundtrack'],
    Review: ['崩坏3-Review-Original Soundtrack'],
    未定的注定: ['未定的注定'],
    女武神的餐桌2: ['崩坏3「女武神的餐桌Ⅱ」Original Soundtrack'],
    Rubia: ['Rubia'],
    Yesterday: ['崩坏3-Yesterday-Original Soundtrack'],
    Alive: ['崩坏3-Alive-Original Soundtrack'],
    Oracle: ['Oracle'],
    Regression: ['Regression'],
    Paradox: ['崩坏3-Paradox-Original Soundtrack'],
    后崩坏书2: ['崩坏3-后崩坏书2-Original Soundtrack'],
    Elysium: ['崩坏3-Elysium-Original Soundtrack'],
    跨越终焉之日: ['崩坏3-跨越终焉之日-Original Soundtrack'],
    DaCapo: ['Da Capo'],
    失控: ['崩坏星穹铁道-失控 Out of Control'],
};

const BgmGlobalInfo = {
    // name, album, ITU loudness
    1: ['Unknown', 'Yesterday', -13],
    2: ['Sea Wall', 'Alive', -16],
    3: ['A.O.S forces', '崩坏学园2', -14],
    4: ['Trace', 'Onwards', -8],
    5: ['Snowfield', 'Onwards', -14],
    6: ['Narrate', 'Alive', -17],
    7: ['Another', 'Impact', -7],
    8: ['Lose', 'Alive', -22],
    9: ['Raid', 'Onwards', -9],
    10: ['Rage', 'Impact', -7],
    11: ['North Wind', 'Yesterday', -14],
    12: ['The World', '后崩坏书', -10],
    13: ['Del', 'Alive', -12],
    14: ['Pendant', 'Yesterday', -16],
    15: ['未定的注定 (伴奏)', '未定的注定', -11],
    16: ['A Sprinkling of Warmth', '女武神的餐桌', -31],
    17: ['未来再见 (Instrumental)', '女武神的餐桌2', -11],
    18: ['Firew', 'Alive', -15],
    19: ['Kevin', 'Yesterday', -9],
    20: ['Freez', 'Alive', -11],
    21: ['Hard Bone', 'Alive', -8],
    22: ['Nightglow（Instrumental）', 'Onwards', -9],
    23: ['Lonec', 'Alive', -12],
    // 24: ['Armband', 'Alive', -10],
    25: ['The Chariot', '后崩坏书', -8],
    26: ['Lyin (See you in the next world)', 'Onwards', -9],
    27: ['真红之剑', 'Review', -9],
    28: ['Oracle (伴奏)', 'Oracle', -11],
    29: ['向天举起叛逆之剑', 'Review', -9],
    30: ['Clouds', 'Onwards', -10],
    31: ['Kong', 'Yesterday', -15],
    32: ['Rubia (伴奏)', 'Rubia', -9],
    33: ['Musta virta', '崩坏学园2', -10],
    34: ['Lighting', 'Impact', -7],
    35: ['Ark', 'Impact', -9],
    36: ['DATE-IV', '崩坏学园2', -12],
    37: ['Race Is On', 'Yesterday', -8],
    38: ['Enough', 'Yesterday', -9],
    39: ['Yesterday', 'Yesterday', -17],
    40: ['Never Let You Go', 'Yesterday', -8],
    41: ['Why', 'Yesterday', -11],
    42: ['Enough', 'Yesterday', -9],
    43: ['Shopsation', '崩坏学园2', -12],
    44: ['And IsL', '后崩坏书2', -15],
    45: ['Kolosten', 'Paradox', -12],
    46: ['Sabre', 'Paradox', -11],
    47: ['Otto', 'Paradox', -15],
    48: ['Constraint', 'Paradox', -12],
    49: ['IRAS 17514', 'Paradox', -9],
    50: ['Tiger', '崩坏学园2', -10],
    51: ['Beloved', 'Onwards', -9],
    52: ['Moonrise', 'Onwards', -13],
    53: ['Revir', '后崩坏书', -14],
    54: ['Es', 'Alive', -10],
    55: ['Ambiguous Light', '跨越终焉之日', -14],
    56: ['Dissipate', 'Paradox', -16],
    57: ['A-310', 'Review', -8],
    58: ['月影逐龙', 'Review', -9],
    59: ['Noitats', '后崩坏书', -11],
    60: ['Candy Room', 'Elysium', -16],
    61: ['Brief', 'Elysium', -14],
    62: ['Deep Waves', 'Yesterday', -10],
    63: ['Honkai Impact 3rd', '跨越终焉之日', -12],
    64: ['Katana', 'Onwards', -8],
    65: ['赤染御魂', 'Review', -10],
    66: ['Sink', 'Yesterday', -9],
    67: ['Routine', 'Onwards', -11],
    68: ['Elsewhere', 'Onwards', -12],
    69: ['Clock', 'Yesterday', -12],
    70: ['Ortem', '后崩坏书', -12],
    71: ['Planet Directory', '跨越终焉之日', -13],
    72: ['Paradox', 'Yesterday', -15],
    73: ['Ann', 'Alive', -11],
    74: ['Shrine', 'Onwards', -12],
    75: ['Empty', 'Onwards', -12],
    76: ['Decisive', 'Alive', -12],
    77: ['Lil\' Dash of Love', '女武神的餐桌', -10],
    78: ['Egdirb', '后崩坏书', -12],
    79: ['Haxxor Bunny', 'Paradox', -13],
    80: ['Mystify', 'Onwards', -13],
    81: ['Ele Wh', '后崩坏书2', -15],
    82: ['Vortex', 'Yesterday', -8],
    83: ['Xiao', 'Yesterday', -11],
    84: ['Wreckage', 'Paradox', -15],
    85: ['Regression (伴奏)', 'Regression', -12],
    86: ['I Alone Am Honored', 'Paradox', -12],
    87: ['Distant', 'Paradox', -17],
    88: ['Consciousness', '跨越终焉之日', -14],
    89: ['Cowboy', 'Paradox', -12],
    90: ['Tins', '跨越终焉之日', -14],
    91: ['Gion3', '跨越终焉之日', -14],
    92: ['Train to the Future', '跨越终焉之日', -14],
    93: ['Twilight Woods', 'Elysium', -16],
    94: ['Elysian Realm', 'Elysium', -11],
    95: ['Mystery', 'Alive', -15],
    96: ['Subtle', 'Elysium', -16],
    97: ['Lightless Land', 'Elysium', -11],
    98: ['Drizzle', 'Paradox', -16],
    99: ['Asphyxia', 'Paradox', -20],
    100: ['Forgotten City', 'Elysium', -12],
    101: ['For Kevin', '跨越终焉之日', -18],
    102: ['Armband', 'Alive', -10],
    103: ['星穹铁道 Star Rail', '失控', -13],
    104: ['Nrbl', 'Alive', -10],
    105: ['Dual-Ego (伴奏)', 'DualEgo', -10],
    106: ['Mend', 'Alive', -12],
    107: ['Summer Survival', '跨越终焉之日', -12],
    108: ['Loneliness', 'Yesterday', -14],
    109: ['St.Freya', 'Paradox', -20],
    110: ['Fry BeL', '后崩坏书2', -16],
    111: ['End of Domination', 'Paradox', -14],
    112: ['Er Pi', '后崩坏书2', -16],
    113: ['Shimmer', 'Onwards', -12],
    114: ['Sora', 'Yesterday', -16],
    115: ['行星漂流 Drift', '失控', -13],
    116: ['Essr Emp', '后崩坏书2', -9],
    117: ['Welt Joyce', '跨越终焉之日', -15],
    118: ['太空漫步 Space Walk', '失控', -14],
    //
    999: ['Da Capo (伴奏)', 'DaCapo', -11],
    //
    1030: ['', '', -11],
    1034: ['', '', -13],
    1037: ['千年之羽 (伴奏)', '', -10],
    1046: ['', '', -10],
    1053: ['', '', -9],
    1091: ['', '', -16],
    1095: ['', '', -15],
    1110: ['', '', -15],
    1130: ['', '', -13],
    1147: ['', '', -8],
    1176: ['', '', -15],
    1183: ['八重桜 (伴奏)', '', -19],
    1206: ['', '', -15],
    1282: ['', '', -14],
    1290: ['', '', -9],
    1291: ['', '', -13],
    1335: ['漆夜雪', '', -9],
    1336: ['Bunny Jump (伴奏)', '', -11],
    1352: ['', '', -8],
    1374: ['', '', -12],
    1449: ['', '', -14],
};

let AppInfo = {
    LocalVersion: 91,
    RemoteVersion: -1,
    ImageLocal: false,
    AudioLocal: true,
    getVersionString: function () {
        let v = this.LocalVersion
        if (this.RemoteVersion > 0) {
            v = this.RemoteVersion
        }
        let major = Math.floor(v / 100).toString()
        let minor = Math.round(v - major * 100).toString()
        let str = 'v' + major + '.' + '0'.repeat(2 - minor.length) + minor
        if (Util.isOnWeb()) {
            str += 'W'
        }
        if (!this.ImageLocal) {
            // light version
            str += 'L'
        }
        return str
    }
}

function GlobalScript() {
    let version = document.getElementById('version-mark')
    if (version) {
        version.innerText = AppInfo.getVersionString()
    }
}

try {
    GlobalScriptEx()
} catch (e) {
    GlobalScript()
}
