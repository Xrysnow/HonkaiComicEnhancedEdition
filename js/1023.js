(function () {
    let p = new ReaderParam()
    let bookNum = 1023
    p.bookIndex = bookNum
    p.bookTitle = '异乡'
    p.bookDate = '2020'
    p.bookDesc = {
        zh: '2029年，银河某处。星门已然开启，天上之人一定会循着「信标」而来。而我们则要将视线投向过去，回到第四神之键刚刚修复完成的时候…',
    }
    p.editorNote = null
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1023.jpg'
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
