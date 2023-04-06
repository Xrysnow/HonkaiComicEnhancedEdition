(function () {
    let p = new ReaderParam()
    let bookNum = 1024
    p.bookIndex = bookNum
    p.bookTitle = '新春旅行'
    p.bookDate = '2021'
    p.bookDesc = {
        zh: '对“过年”这一神州盛典进行了各种考察的德丽莎，制定了最终的计划。南国、海岛、神秘的年兽……奇妙的旅程即将拉开序幕？',
    }
    p.editorNote = {
        zh: '- 本篇为游戏4.6版本活动「神州漂流记」的前置漫画。'
            + '</br>- <a href="https://www.bilibili.com/video/BV14N411o7Ut">版本PV</a>'
            + '</br>- <a href="https://www.bilibili.com/video/BV1wy4y127kC">服装PV</a>'
    }
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1024.jpg'
    p.numChapter = 1
    p.chTitles = [
        '短篇',
    ]
    p.chPages = [
        19
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
