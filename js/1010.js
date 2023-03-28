(function () {
    let p = new ReaderParam()
    let bookNum = 1010
    p.htmlNum = bookNum
    p.bookTitle = '神之键秘话'
    p.bookDate = '2017'
    p.bookDesc = {
        zh: '距离现在的五万多年前，上个世代的人类已经发展出了高度的文明，为了和律者战斗，人们通过研究律者核心的残片，制作出了抵抗崩坏、守护未来的关键武器——神之键。',
    }
    p.editorNote = null
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1010.jpg'
    p.numChapter = 5
    p.chTitles = [
        '轩辕剑秘话',
        '地藏御魂',
        '天火圣裁',
        '原初之翼',
        '空白之键',
    ]
    p.chPages = [
        15, 24, 27, 33, 24
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
