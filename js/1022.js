(function () {
    let p = new ReaderParam()
    let bookNum = 1022
    p.bookIndex = bookNum
    p.bookTitle = '云墨剑心'
    p.editorNote = {
        zh: '- 本篇为游戏主线20章「千年之羽」（4.3版本）的前置漫画。'
            + '（<a href="https://www.bilibili.com/video/BV12V411m77f">版本PV</a>）'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1022.jpg',
        'https://uploadstatic.mihoyo.com/contentweb/20200120/2020012014354871886.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/76361817/22d07a03160859fd0ad4296f7ff30783_5877719382818342623.jpg',
    ]
    p.numChapter = 1
    p.chTitles = [
        '入魔者',
    ]
    p.chPages = [
        32
    ]
    p.hiddenPages = null
    p.bgmInfo = [
        [[-1, 18, 104, 20, 30], [0, 0.1, 10.3, 59.8, 82.7]],
    ]
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
