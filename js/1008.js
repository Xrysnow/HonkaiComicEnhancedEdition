(function () {
    let p = new ReaderParam()
    let bookNum = 1008
    p.htmlNum = bookNum
    p.bookTitle = '月影篇'
    p.bookDate = '2017'
    p.bookDesc = {
        zh: '在第一律者复制人入侵圣芙蕾雅学园的风波平息之后，姬子也从昏迷中苏醒了过来。正当大家在为姬子的归来庆祝之时，符华却收到了一项神秘的任务。并且，这项任务的委托人给了她一个奇怪的指令…',
    }
    p.editorNote = null
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1002.jpg'
    p.numChapter = 13
    p.chTitles = [
        '第一话 暗流',
        '第二话 潜入',
        '第三话 恐慌',
        '第四话 幽灵',
        '第五话 赎罪',
        '第六话 委托',
        '第七话 突入',
        '第八话 死斗',
        '第九话 真相',
        '第十话 奇迹',
        '第十一话 异变',
        '第十二话 影',
        '第十三话 承诺',
    ]
    p.chPages = [
        24, 23, 23, 25, 24, 21, 20, 22, 20, 22, 18, 21, 11
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
