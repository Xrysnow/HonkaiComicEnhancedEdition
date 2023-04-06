(function () {
    let p = new ReaderParam()
    let bookNum = 1020
    p.bookIndex = bookNum
    p.bookTitle = '武装人偶'
    p.bookDate = '2020'
    p.bookDesc = {
        zh: '身体量子化的薛定谔穿梭寻访于不同的世界泡之中，探索着世界的真相。她拜访过很多世界泡，也接触了很多形形色色的事物。薛定谔本以为自己已经习惯了各种奇怪的设定，只是这一次，真的有点奇怪…',
    }
    p.editorNote = {
        zh: '- <a href="https://www.bilibili.com/video/BV1Db411H7NH">「武装人偶」介绍视频</a>'
            + '</br>- <a href="https://www.bilibili.com/bangumi/play/ep407936">动画《人偶学园》</a>'
    }
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1020.jpg'
    p.numChapter = 2
    p.chTitles = [
        '神殿',
        '乐土',
    ]
    p.chPages = [
        18, 21
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
