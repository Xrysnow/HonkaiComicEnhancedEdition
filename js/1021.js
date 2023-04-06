(function () {
    let p = new ReaderParam()
    let bookNum = 1021
    p.bookIndex = bookNum
    p.bookTitle = '传承'
    p.bookDate = '2020'
    p.bookDesc = {
        zh: '在过去的4500年间，第二神之键一直被用于观测「虚数之树」上的其他「平行世界」。盛者必衰，一度辉煌的文明，终究会凋零。隐藏在第二神之键中的答案，正缓缓浮出水面…',
    }
    p.editorNote = null
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = prefix + 'book_cover/1021.jpg'
    p.numChapter = 16
    p.chTitles = [
        '泡影',
        '须弥芥子',
        '因果转轮',
        '病',
        '逐火之蛾',
        '众生',
        '千分之一',
        '它',
        '梦境',
        '报身',
        '代价',
        '圣痕计划',
        '罪',
        '挚友',
        '抉择',
        '最后的布局',
    ]
    p.chPages = [
        14, 20, 19, 21, 20, 21, 19, 18, 16, 35, 21, 21, 19, 30, 20, 21
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
