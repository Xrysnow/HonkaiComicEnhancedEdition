(function () {
    let p = new ReaderParam()
    let bookNum = 102
    p.htmlNum = bookNum
    p.bookTitle = '崩坏AI娘爱酱绝对不会告诉玩家的事实'
    p.bookDate = '2015-2016'
    p.bookDesc = {
        zh: '休伯利安号战舰AI娘、第一人气偶像爱酱，竟然是使得游戏迟迟不能公测的幕后黑手？！',
    }
    p.editorNote = null
    p.bookCoverSrc = 'https://static-event.benghuai.com/ip_resources_new/preheat/cover/avatar.jpg'
    p.imgSrcPrefix = 'http://static-event.benghuai.com/ip_resources_new/preheat/page/'
    p.chCoverSrcPrefix = ''
    p.bgSrc = p.bookCoverSrc
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
    p.fnGetChapterCoverSrc = function (i) {
        return 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/1003/3.jpg'
    }
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
