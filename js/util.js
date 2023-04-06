const Settings = {
    KCurrentBook: '/honkai-comic/current-book',
    KCurrentChapter: '/honkai-comic/current-chapter',
    KGalleryWidth: '/honkai-comic/gallery-width',
    KBgColor: '/honkai-comic/bg-color',
    KBGMEnabled: '/honkai-comic/bgm-enabled',
    KBGMVolume: '/honkai-comic/bgm-volume',
    KVoiceVolume: '/honkai-comic/voice-volume',
    // KVoiceLanguage; '/honkai-comic/voice-lang',

    setLocalStorage: function (k, v) {
        if (!window.localStorage) {
            return
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
