(function () {
    let p = new ReaderParam()
    let bookNum = 1006
    p.bookIndex = bookNum
    p.bookTitle = '逆熵入侵篇'
    p.bookDate = '2016-2017'
    p.bookDesc = {
        zh: '故事发生在圣痕之谜篇之后，在九幽深受重伤的姬子，生命处于危险之中...为了变强保护重要的人，琪亚娜参加了德丽莎设计的训练，但在这时候，逆熵开始了对圣芙蕾雅学园的入侵！',
    }
    p.editorNote = {
        zh: '- 本篇为《圣痕之谜篇》的后续。'
        + '</br>- <a href="https://www.bilibili.com/video/BV1Wx411S7hm">漫画纪念PV</a>'
    }
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1006.jpg'
    p.numChapter = 16
    p.chTitles = [
        '第一话 第一律者',
        '第二话 樱与白',
        '第三话 入侵',
        '第四话 冲突',
        '第五话 律者',
        '第六话 父女',
        '第七话 名字',
        '第八话 天火',
        '第九话 告别',
        '第十话 秘密',
        '第十一话 交易',
        '第十二话 思念',
        '第十三话 骑士',
        '第十四话 月光',
        '第十五话 尾声',
        '间章 苍玄之书',
    ]
    p.chPages = [
        21, 15, 14, 15, 13, 13, 16, 13, 14, 16, 18, 17, 16, 17, 15, 8
    ]
    let hiddenSrcPrefix = 'http://static-event.benghuai.com/ip_resources_new/comic/1/chapter/'
    p.hiddenPages = {
        0: {
            0: [
                hiddenSrcPrefix + '0038/0001.jpg',
                hiddenSrcPrefix + '0038/0002.jpg',
                hiddenSrcPrefix + '0038/0003.jpg',
                hiddenSrcPrefix + '0038/0004.jpg',
            ],
            2: hiddenSrcPrefix + '0038/0007.jpg',
            21: [
                hiddenSrcPrefix + '0038/0027.jpg',
                hiddenSrcPrefix + '0038/0028.jpg',
                // hiddenSrcPrefix + 'https://static-event.benghuai.com/ip_resources_new/recommend/6.jpg',
            ],
        },
    }
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
