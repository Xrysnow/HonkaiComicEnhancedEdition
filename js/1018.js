(function () {
    let p = new ReaderParam()
    let bookNum = 1018
    p.bookIndex = bookNum
    p.bookTitle = '雾都假日'
    p.bookDate = '2019-2020'
    p.bookDesc = {
        zh: '在英国伦敦的繁华街道上，幽兰黛尔与丽塔不约而同地踏足于此，远离崩坏的战场与激烈的战斗，在这片历史悠久的土地上，迎接她们的是全新的任务，还是一场久违的假日？',
    }
    p.editorNote = null
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1018.jpg'
    p.numChapter = 10
    p.chTitles = [
        '序章 砂之挽歌',
        '第一话 线索',
        '第二话 强者',
        '第三话 传说',
        '第四话 探查',
        '第五话 密道',
        '第六话 棋子',
        '第七话 意外',
        '第八话 作战',
        '最终话 假期',
    ]
    p.chPages = [
        17, 20, 25, 17, 16, 20, 19, 19, 19, 12
    ]
    p.fnGetChapterCoverSrc = function (i) {
        if (i > 4) {
            i = i + 1
        }
        return p.chCoverSrcPrefix + i + '.jpg'
    }
    p.fnGetImgSrc = function (i, n) {
        if (i > 4) {
            i = i + 1
        }
        return p.imgSrcPrefix + i + '/' + n + '.jpg'
    }
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
