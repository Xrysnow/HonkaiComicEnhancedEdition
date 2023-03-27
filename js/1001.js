(function () {
    let p = new ReaderParam()
    let bookNum = 1001
    p.htmlNum = bookNum
    p.bookTitle = '逃离长空篇'
    p.bookDesc = {
        zh: '紧接着《崩坏学园2》的游戏剧情，2014年，在长空市中，发生了强烈的崩坏。琪亚娜，雷电芽衣，布洛妮娅三个少女在逃离长空市的过程中，遇到了天命组织的女武神，无量塔姬子...',
    }
    p.editorNote = null
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1001.jpg'
    p.numChapter = 7
    p.chTitles = [
        '序章 琪亚娜·出击',
        '第一话 崩坏、爆发',
        '第二话 雷鸣的魔女',
        '第三话 女武神出阵',
        '第四话 女王VS女王',
        '第五话 隙间',
        '第六话 新的旅程',
    ]
    p.chPages = [
        29, 27, 22, 19, 18, 19, 21
    ]
    let hiddenSrcPrefix = 'http://static-event.benghuai.com/ip_resources_new/comic/1/chapter/'
    p.hiddenPages = {
        1: {
            20: hiddenSrcPrefix + '0002/0021.jpg',
        },
        4: {
            3: [
                hiddenSrcPrefix + '0005/0003.jpg',
                hiddenSrcPrefix + '0005/0004.jpg',
            ]
        },
        5: {
            9: hiddenSrcPrefix + '0006/0010.jpg',
            19: hiddenSrcPrefix + '0006/0021.jpg',
        },
    }
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
