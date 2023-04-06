(function () {
    let p = new ReaderParam()
    let bookNum = 1019
    p.bookIndex = bookNum
    p.bookTitle = '年岁'
    p.bookDate = '2020'
    p.bookDesc = {
        zh: '时值大唐时期，神州鼎盛于世间。但高度的文明却让这片大地成为崩坏侵蚀的目标，在灾祸的巨浪之中，文明的壁垒摇摇欲坠。而此刻，神州最后的护盾则是名为“赤鸢”的仙人。临近年关，面对热情邀请仙人一起过年的村民，仙人却转身离去…',
    }
    p.editorNote = {
        zh: '- 本篇为游戏3.7版本活动「神州仙行记」及主线20章「千年之羽」的前置漫画。'
            + '</br>- 本篇更新于2020年小年期间。'
            + '</br>- <a href="https://www.bilibili.com/video/BV1mJ411H7VM">版本PV</a>'
    }
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1019.jpg'
    p.numChapter = 2
    p.chTitles = [
        '赤鸢',
        '烟火',
    ]
    p.chPages = [
        9, 27
    ]
    p.hiddenPages = null
    p.bgmInfo = [
        [[30, 14, 31], [0, 46, 78]],
        [[30, 14, 32], [0, 30, 49]],
    ]
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
