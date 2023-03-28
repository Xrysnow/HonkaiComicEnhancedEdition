(function () {
    let p = new ReaderParam()
    let bookNum = 1016
    p.htmlNum = bookNum
    p.bookTitle = '双子：入侵'
    p.bookDate = '2019-2020'
    p.bookDesc = {
        zh: '故事发生在一座基地，这里白天灯光明媚，夜晚也灯光明媚；每隔一段时日，就有研究员不省人事……逆熵姐妹无意中发现了知名偶像“伏特加女孩”的秘密，就此展开一段跌宕起伏的冒险！',
    }
    p.editorNote = {
        zh: ''
    }
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1016.jpg'
    p.numChapter = 14
    p.chTitles = [
        '地下城篇01',
        '地下城篇02',
        '地下城篇03',
        '地下城篇：04',
        '末世篇：01',
        '末世篇：02',
        '末世篇：03',
        '末世篇：04',
        '末世篇05',
        '神探篇01',
        '神探篇02',
        '神探篇03',
        '神探篇04',
        '神探篇05',
    ]
    p.chPages = [
        13, 13, 16, 15, 14,
        13, 8, 9, 11, 6,
        7, 7, 6, 9
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
