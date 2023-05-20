(function () {
    let p = new ReaderParam()
    let bookNum = 1020
    p.bookIndex = bookNum
    p.bookTitle = '武装人偶'
    p.editorNote = {
        zh: '- <a href="https://www.bilibili.com/video/BV1Db411H7NH">「武装人偶」介绍视频</a>'
            + '</br>- <a href="https://www.bilibili.com/bangumi/play/ep407936">动画《人偶学园》</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1020.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/91006211/5f881ab4d6c20cc8eec84d99467f8b90_1706163659591993741.jpg',
    ]
    p.numChapter = 2
    p.chTitles = [
        '神殿',
        '乐土',
    ]
    p.chPages = [
        18, 21
    ]
    p.hiddenPages = null
    p.bgmInfo = [
        [[71, 1030, 93], [0, 15, 45]],
        [[88, 94], [0, 72]],
    ]
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
