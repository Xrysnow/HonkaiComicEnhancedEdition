(function () {
    let p = new ReaderParam()
    let bookNum = 102
    p.bookIndex = bookNum
    p.bookTitle = '崩坏AI娘爱酱绝对不会告诉玩家的事实'
    p.editorNote = {
        zh: '- 本篇为游戏公测前的预热漫画，收录于<a href="http://event.mihoyo.com/ip_product/list.php?type=preheat&bookid=0">【旧版IP站】</a>。',
    }
    let prefix = 'http://static-event.benghuai.com/ip_resources_new/preheat/'
    if (AppInfo.ImageLocal) {
        prefix = Util.getImgLegacySrcPrefix() + 'preheat/'
    }
    p.bookCoverSrc = prefix + 'cover/avatar.jpg'
    p.imgSrcPrefix = prefix + 'page/'
    p.chCoverSrcPrefix = ''
    p.bgSrc = [
        p.bookCoverSrc,
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/11/14/75216984/a553b46b3b246f1c3306036a1f9e4d64_4910180361641039847.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/11/14/75216984/b5833e16f0054dabece6fd1ad7986a22_2504596694165768515.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/11/21/75216984/39a07f0b21b4e1ad18a0ee17702d1ba8_1918858350432775187.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/11/21/75216984/013af9889e882745c29d5e0946b09db2_8884192003334027969.png',
    ]
    p.bookCoverSrc
    p.numChapter = 18
    p.chTitles = [
        '惊人的事实——开始',
        '说好的公测呢？',
        '停电怪我咯？',
        '爱酱扑街中...',
        '垂死病中惊坐起',
        '坎坷的AI人生',
        '退役偶像的生活',
        '技术宅拯救世界',
        '炎夏摸鱼的爱酱',
        '猝不及防的狗粮',
        '正确的召唤方式',
        '向黑爱势力低头',
        '游戏高手的对决',
        '老板来两个币',
        '新的首领',
        '当反派也不容易',
        '等到花儿都谢了',
        '爱酱的生日',
    ]
    p.chPages = [
        1, 1, 1, 1, 1,
        1, 1, 1, 1, 1,
        1, 1, 1, 1, 1,
        1, 1, 1
    ]
    p.fnGetImgSrc = function (i, n) {
        let x1 = '0'.repeat(4 - i.toString().length) + i.toString()
        return p.imgSrcPrefix + x1 + '.jpg'
    }
    // from https://web.archive.org/web/20180325082248/http://comic.bh3.com/
    let coverPrefix = 'http://static.event.mihoyo.com/ip_resources_new/preheat/cover/'
    if (AppInfo.ImageLocal) {
        coverPrefix = Util.getImgLegacySrcPrefix() + 'preheat/cover/'
    }
    p.fnGetChapterCoverSrc = function (i) {
        let x = '0'.repeat(4 - i.toString().length) + i.toString()
        return coverPrefix + x + '.jpg'
    }
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
