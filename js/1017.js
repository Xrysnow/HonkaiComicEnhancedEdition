(function () {
    let p = new ReaderParam()
    let bookNum = 1017
    p.htmlNum = bookNum
    p.bookTitle = '蛇之篇'
    p.bookDate = '2019'
    p.bookDesc = {
        zh: '「蛇」，一种扎根于人类诸多神话与古老传说中的生物，其信仰之起源已无从考证。如今，一切历史与预言将要被应验，一场席卷这个世界的风暴即将来临。',
    }
    p.editorNote = {
        zh: '- 本篇为游戏主线13章「长夜暗空」的前置漫画。'
            + '</br>- <a href="https://www.bilibili.com/video/BV1zE411Z7ZW">版本PV</a>'
    }
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1017.jpg'
    p.numChapter = 1
    p.chTitles = [
        '苏醒',
    ]
    p.chPages = [
        35
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
