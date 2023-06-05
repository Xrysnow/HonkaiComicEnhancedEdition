(function () {
    let p = new ReaderParam()
    let bookNum = 1023
    p.bookIndex = bookNum
    p.bookTitle = '异乡'
    p.bookMode = 'rl'
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
    p.addBookFirstBlank()
    p.hiddenPages = null
    p.bgmInfo = [
        [[-1, 108, 81, 108], [0, 0.1, 20, 43]],
        [[109, 108, 110], [0, 42, 66]],
        [[110, 1176, 108], [0, 24, 66]],
        108,
        [[110, 108], [0, 45]],
        [[108, 111], [0, 34]],
        [[59, 112], [0, 74]],
        [[95, 78, 60], [0, 45, 89.5]],
        [[60, 77, 113], [0, 30.5, 91]],
        [[113, 95, 114], [0, 50.5, 69]],
        [[114, 1282, 95], [0, 30, 55]],
        [[6, 115], [0, 55]],
        [[6, 56], [0, 86]],
        56,
        116,
        [[11, 116, 28], [0, 32.5, 55]],
        [[117, 118, 103], [0, 67.5, 95]],
    ]
    p.bgmInfo2 = [
        [[-1, 108, 81, 108], [0, 2, 6, 10]],
        [[109, 108, 110], [0, 10, 14]],
        [[110, 1176, 108], [0, 6, 14]],
        108,
        [[110, 108], [0, 10]],
        [[108, 111], [0, 8]],
        [[59, 112], [0, 16]],
        [[95, 78, 60], [0, 8, 16]],
        [[60, 77, 113], [0, 6, 12]],
        [[113, 95, 114], [0, 10, 14]],
        [[114, 1282, 95], [0, 8, 12]],
        [[6, 115], [0, 14]],
        [[6, 56], [0, 16]],
        56,
        116,
        [[11, 116, 28], [0, 8, 14]],
        [[117, 118, 103], [0, 18, 24]],
    ]
    p.addBgmLoopInfo(28, 23, 72, 0.5, 0.5, true)
    p.addBgmLoopInfo(81, 1.5, 1e3, 1, 1)
    p.addBgmLoopInfo(103, 7, 1e3, 1, 1)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
