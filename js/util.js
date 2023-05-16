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
    KVoiceVolume: '/honkai-comic/voice-volume',
    KFinishedChapters: '/honkai-comic/finished-chapters',
    KBookModes: '/honkai-comic/book-modes',

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
            this.setBgmEnabled(1)
        }
        if (this.getLocalStorage(this.KBGMVolume) == undefined) {
            console.log('set default BGMVolume')
            this.setBgmVolume(50)
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
        try {
            for (let i = 0; i < keys.length; i++) {
                const k = keys[i]
                if (k[0] == 'K') {
                    window.localStorage.removeItem(k)
                }
            }
        } catch (error) {
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
        this.setLocalStorage(this.KBGMEnabled, Number(value))
    },
    getBgmEnabled: function () {
        return Number(this.getLocalStorage(this.KBGMEnabled))
    },

    setBgmVolume: function (value) {
        this.setLocalStorage(this.KBGMVolume, Number(value))
    },
    getBgmVolume: function () {
        return Number(this.getLocalStorage(this.KBGMVolume))
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
        return 'https://comicstatic.bh3.com/new_static_v2/comic/'
    },
    getImgLegacySrcPrefix: function () {
        return 'http://static-event.benghuai.com/ip_resources_new/comic/'
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
    }
}

let ComicData = [
    {
        id: 1001,
        title: '逃离长空篇',
        type: '主线',
        date: [[2015, 6], [2015, 9]],
        page: 'common.html?id=1001',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1001.jpg',
        description: '紧接着《崩坏学园2》的游戏剧情，2014年，在长空市中，发生了强烈的崩坏。琪亚娜，雷电芽衣，布洛妮娅三个少女在逃离长空市的过程中，遇到了天命组织的女武神，无量塔姬子...',
    },
    {
        id: 1002,
        title: '樱花追忆篇',
        type: '主线',
        date: [[2015, 10], [2016, 2]],
        page: 'common.html?id=1002',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1002.jpg',
        description: '被无量塔姬子带入圣芙蕾雅学园的琪亚娜三人，在学园长德丽莎的要求下，接受成为女武神的培训，在训练过程中，琪亚娜却意外遇见了500年前死去的祖先卡莲，和卡莲纠缠一生的“她”，也出现在了德丽莎的面前...',
    },
    {
        id: 101,
        title: '番外篇',
        type: '未收录',
        date: [[2014, 11], [2016, 7]],
        page: 'common.html?id=101',
        cover: 'https://static-event.benghuai.com/ip_resources_new/comic/3/cover/avatar.jpg',
        description: '崩坏学园漫画短篇集，用漫画的形式将生在崩坏中的点点滴滴记录在画页上。邀请风格不同的画师太太们用不同的风格为您展示崩坏不一样的魅力',
        deprecated: true,
    },
    {
        id: 102,
        title: '爱酱的事实',
        type: '未收录',
        date: [[2016, 6], [2016, 10]],
        page: 'common.html?id=102',
        cover: 'https://static-event.benghuai.com/ip_resources_new/preheat/cover/avatar.jpg',
        description: '休伯利安号战舰AI娘、第一人气偶像爱酱，竟然是使得游戏迟迟不能公测的幕后黑手？！',
        deprecated: true,
    },
    {
        id: 1003,
        title: '圣痕之谜篇',
        type: '已删除',
        date: [[2016, 3], [2016, 6]],
        page: 'common.html?id=1003',
        cover: 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1003.jpg',
        description: '在传说中，在古代的神州，英雄姬轩辕手持轩辕剑，在崩坏兽的威胁下拯救了人类。5000年后，为了寻找传说中的轩辕剑和圣痕，无量塔姬子，琪亚娜和符华来到了神州南部的海底，探索失落的传奇...',
        deprecated: true,
    },
    {
        id: 1004,
        title: '绀海篇',
        type: '番外',
        date: [[2016, 7], [2016, 9]],
        page: 'common.html?id=1004',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1004.jpg',
        description: '故事发生在《崩坏学园2》之前，在寒冷的俄罗斯雪原中，被称为乌拉尔银狼的杀手布洛妮娅和平凡的少女希儿相遇了，等待她们的，却是成为崩坏能实验体的命运...',
    },
    {
        id: 1005,
        title: '绯樱篇',
        type: '番外',
        date: [[2015, 2], [2015, 6]],
        page: 'common.html?id=1005',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1005.jpg',
        description: '故事发生在《崩坏学园2》之前，在500年前的日本，名为八重樱的巫女生活在一个平静的小村中，一个漂流来的修女，和她带着的蕴含着可怕力量的水晶，打破了这虚伪的平静...',
    },
    {
        id: 1006,
        title: '逆熵入侵篇',
        type: '主线',
        date: [[2016, 10], [2017, 3]],
        page: 'common.html?id=1006',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1006.jpg',
        description: '故事发生在圣痕之谜篇之后，在九幽深受重伤的姬子，生命处于危险之中...为了变强保护重要的人，琪亚娜参加了德丽莎设计的训练，但在这时候，逆熵开始了对圣芙蕾雅学园的入侵！',
    },
    {
        id: 1007,
        title: '恩返篇',
        type: '主线',
        date: [[2017, 3], [2017, 6]],
        page: 'common.html?id=1007',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1007.jpg',
        description: '德丽莎背部的八重樱圣痕出现了异常，令德丽莎陷入了昏迷之中。为了唤醒德丽莎，芽衣进入了圣痕的数据空间中调查圣痕异常的原因。而此时，“她”也出现在了被封闭在圣痕空间中的德丽莎面前…',
    },
    {
        id: 1008,
        title: '月影篇',
        type: '主线',
        date: [[2017, 7], [2017, 9]],
        page: 'common.html?id=1008',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1008.jpg',
        description: '在第一律者复制人入侵圣芙蕾雅学园的风波平息之后，姬子也从昏迷中苏醒了过来。正当大家在为姬子的归来庆祝之时，符华却收到了一项神秘的任务。并且，这项任务的委托人给了她一个奇怪的指令…',
    },
    {
        id: 1009,
        title: '紫鸢篇',
        type: '主线',
        date: [[2017, 10], [2018, 2]],
        page: 'common.html?id=1009',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1009.jpg',
        description: '公元1470年，意图扩张势力的天命发动了一场规模巨大的东征。尽管对这场战争的目的心怀疑惑，但天命最强的女武神卡莲·卡斯兰娜还是服从了组织的命令。但在战场上，她的觉悟受到了质疑…',
    },
    {
        id: 1010,
        title: '神之键秘话',
        type: '番外',
        date: [[2017, 1], [2018, 11]],
        page: 'common.html?id=1010',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1010.jpg',
        description: '距离现在的五万多年前，上个世代的人类已经发展出了高度的文明，为了和律者战斗，人们通过研究律者核心的残片，制作出了抵抗崩坏、守护未来的关键武器——神之键。',
    },
    {
        id: 1011,
        title: '玩崩坏3的琪亚娜',
        type: '番外',
        date: [[2018, 2]],
        page: 'common.html?id=1011',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1011.jpg',
        description: '琪亚娜刚刚入坑以自己为原型的游戏《崩坏3》，符华以资深老玩家的身份想对她展开全面的指导，但是却发现，自己与“欧洲人”琪亚娜之间，存在着血统的差距…',
    },
    {
        id: 1012,
        title: '第二次崩坏',
        type: '主线',
        date: [[2018, 3], [2019, 9]],
        page: '1012.html',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1012.jpg',
        description: '2000年2月1日午夜，在西伯利亚的天命巴比伦实验室中，所有研究员一夜之间全部消失。在奥托下令调查这起“神秘”事件的同时，还有人似乎在担忧着“她”的出现。而这一切，揭开了第二次崩坏的序幕… https://detail.tmall.com/item.htm?id=618270891041',
    },
    {
        id: 1013,
        title: '女武神的餐桌',
        type: '番外',
        date: [[2018, 4], [2020, 6]],
        page: 'common.html?id=1013',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1013.jpg',
        description: '这是回到宿舍的女武神们，发生在她们身上的和食物有关的故事。女武神们做的料理各不相同，但是其中蕴含的心意，对重要的人想要传达的思念，却是相通的。',
    },
    {
        id: 1014,
        title: '夏日回忆-预告篇',
        type: '番外',
        date: [[2018, 7], [2018, 8]],
        page: 'common.html?id=1014',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1014.jpg',
        description: '在街头徘徊的琪亚娜正在为打工而苦恼，阴差阳错之下她来到了吼姆欢乐餐厅，还通过了面试，然而意想不到的事还是发生了，并由此拉开了这个夏天的序幕…',
    },
    {
        id: 1015,
        title: '双子：起源',
        type: '番外',
        date: [[2019, 5]],
        page: 'common.html?id=1015',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1015.jpg',
        description: '故事发生在一座孤儿院；这里白天阳光明媚，夜晚阴森可怖；每隔一段时日，就有孩子神秘消失……阿琳姐妹无意中发现了美艳女院长“妈妈”的秘密，就此展开一段跌宕起伏的冒险！',
    },
    {
        id: 1016,
        title: '双子：入侵',
        type: '番外',
        date: [[2019, 6], [2020, 7]],
        page: 'common.html?id=1016',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1016.jpg',
        description: '故事发生在一座基地，这里白天灯光明媚，夜晚也灯光明媚；每隔一段时日，就有研究员不省人事……逆熵姐妹无意中发现了知名偶像“伏特加女孩”的秘密，就此展开一段跌宕起伏的冒险！',
    },
    {
        id: 1017,
        title: '蛇之篇',
        type: '番外',
        date: [[2019, 10]],
        page: 'common.html?id=1017',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1017.jpg',
        description: '「蛇」，一种扎根于人类诸多神话与古老传说中的生物，其信仰之起源已无从考证。如今，一切历史与预言将要被应验，一场席卷这个世界的风暴即将来临。',
    },
    {
        id: 1018,
        title: '雾都假日',
        type: '主线',
        date: [[2019, 10], [2020, 1]],
        page: 'common.html?id=1018',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1018.jpg',
        description: '在英国伦敦的繁华街道上，幽兰黛尔与丽塔不约而同地踏足于此，远离崩坏的战场与激烈的战斗，在这片历史悠久的土地上，迎接她们的是全新的任务，还是一场久违的假日？',
    },
    {
        id: 1019,
        title: '年岁',
        type: '番外',
        date: [[2020, 1]],
        page: 'common.html?id=1019',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1019.jpg',
        description: '时值大唐时期，神州鼎盛于世间。但高度的文明却让这片大地成为崩坏侵蚀的目标，在灾祸的巨浪之中，文明的壁垒摇摇欲坠。而此刻，神州最后的护盾则是名为“赤鸢”的仙人。临近年关，面对热情邀请仙人一起过年的村民，仙人却转身离去…',
    },
    {
        id: 1020,
        title: '武装人偶',
        type: '番外',
        date: [[2020, 1]],
        page: 'common.html?id=1020',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1020.jpg',
        description: '身体量子化的薛定谔穿梭寻访于不同的世界泡之中，探索着世界的真相。她拜访过很多世界泡，也接触了很多形形色色的事物。薛定谔本以为自己已经习惯了各种奇怪的设定，只是这一次，真的有点奇怪…',
    },
    {
        id: 1021,
        title: '传承',
        type: '主线',
        date: [[2020, 2], [2020, 6]],
        page: 'common.html?id=1021',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1021.jpg',
        description: '在过去的4500年间，第二神之键一直被用于观测「虚数之树」上的其他「平行世界」。盛者必衰，一度辉煌的文明，终究会凋零。隐藏在第二神之键中的答案，正缓缓浮出水面…',
    },
    {
        id: 1022,
        title: '云墨剑心',
        type: '番外',
        date: [[2020, 4]],
        page: 'common.html?id=1022',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1022.jpg',
        description: '魔教办的「圣火大会」震动中原，若是能击败「天下第二」的阎世罗，定是能名扬天下。各界皆派了高手前来应战，太虚山赤鸢仙人和首徒林朝雨亦不例外。但是，她们还有着别的目的——入魔者，杀无赦。',
    },
    {
        id: 1023,
        title: '异乡',
        type: '主线',
        date: [[2020, 7], [2020, 12]],
        page: 'common.html?id=1023',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1023.jpg',
        description: '2029年，银河某处。星门已然开启，天上之人一定会循着「信标」而来。而我们则要将视线投向过去，回到第四神之键刚刚修复完成的时候…',
    },
    {
        id: 1024,
        title: '新春旅行',
        type: '番外',
        date: [[2021, 1]],
        page: 'common.html?id=1024',
        cover: 'http://comicstatic.bh3.com/new_static_v2/comic/book_cover/1024.jpg',
        description: '对“过年”这一神州盛典进行了各种考察的德丽莎，制定了最终的计划。南国、海岛、神秘的年兽……奇妙的旅程即将拉开序幕？',
    },
];

let AppInfo = {
    LocalVersion: 1,
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
