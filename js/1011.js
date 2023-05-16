(function () {
    let p = new ReaderParam()
    let bookNum = 1011
    p.bookIndex = bookNum
    p.bookTitle = '玩崩坏3的琪亚娜'
    p.editorNote = null
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = prefix + 'book_cover/1011.jpg'
    p.numChapter = 2
    p.chTitles = [
        '第一话',
        '第二话',
    ]
    p.chPages = [
        7, 6
    ]
    p.hiddenPages = null
    p.bgmInfo = [
        89,
        89,
    ]
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
