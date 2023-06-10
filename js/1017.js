(function () {
    let p = new ReaderParam()
    let bookNum = 1017
    p.bookIndex = bookNum
    p.bookTitle = '蛇之篇'
    p.editorNote = {
        zh: '- 本篇为游戏主线13章「长夜暗空」（3.5版本）的前置漫画。'
            + '（<a href="https://www.bilibili.com/video/BV1zE411Z7ZW">版本PV</a>）'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1017.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/76361817/ff6deb160aca996caa65b6134f6a6ad0_1068788306494454691.png',
    ]
    p.numChapter = 1
    p.chTitles = [
        '苏醒',
    ]
    p.chPages = [
        35
    ]
    p.hiddenPages = null
    p.bgmInfo = [
        [[62, 19], [0, 75]],
    ]
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
