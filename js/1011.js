(function () {
    let p = new ReaderParam()
    let bookNum = 1011
    p.bookIndex = bookNum
    p.bookTitle = '玩崩坏3的琪亚娜'
    p.bookDate = '2018'
    p.bookDesc = {
        zh: '琪亚娜刚刚入坑以自己为原型的游戏《崩坏3》，符华以资深老玩家的身份想对她展开全面的指导，但是却发现，自己与“欧洲人”琪亚娜之间，存在着血统的差距…',
    }
    p.editorNote = null
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1011.jpg'
    p.numChapter = 2
    p.chTitles = [
        '第一话',
        '第二话',
    ]
    p.chPages = [
        7, 6
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
