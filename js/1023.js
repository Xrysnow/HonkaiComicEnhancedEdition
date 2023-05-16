(function () {
    let p = new ReaderParam()
    let bookNum = 1023
    p.bookIndex = bookNum
    p.bookTitle = '异乡'
    p.editorNote = null
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = prefix + 'book_cover/1023.jpg'
    p.numChapter = 17
    p.chTitles = [
        '序言',
        '外星人',
        '误导',
        '钥匙',
        '压迫感',
        '袭击',
        '机器',
        '对峙',
        '父女',
        '选择',
        '真相',
        '拯救',
        '决心',
        '王牌',
        '外之键',
        '奇点',
        '新的旅途',
    ]
    p.chPages = [
        23, 21, 21, 17, 19, 19, 22, 17, 13, 19, 21, 23, 19, 18, 20, 25, 25
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
