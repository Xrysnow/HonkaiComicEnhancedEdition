(function () {
    let p = new ReaderParam()
    let bookNum = 1004
    p.htmlNum = bookNum
    p.bookTitle = '绀海篇'
    p.bookDate = '2016'
    p.bookDesc = {
        zh: '故事发生在《崩坏学园2》之前，在寒冷的俄罗斯雪原中，被称为乌拉尔银狼的杀手布洛妮娅和平凡的少女希儿相遇了，等待她们的，却是成为崩坏能实验体的命运...',
    }
    p.editorNote = {
        zh: '',
    }
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1004.jpg'
    p.numChapter = 11
    p.chTitles = [
        '序章 少女与雪',
        '第一话 孤儿院',
        '第二话 泪',
        '第三话 银狼',
        '第四话 恶魔',
        '第五话 阶梯的复仇剧',
        '第六话 实验',
        '第七话 觉悟',
        '第八话 希儿',
        '第九话 决意',
        '最终话 未来',
    ]
    p.chPages = [
        10, 19, 18, 19, 21, 15, 20, 19, 26, 17, 28
    ]
    let hiddenSrcPrefix = 'http://static-event.benghuai.com/ip_resources_new/comic/1/chapter/'
    p.hiddenPages = {
        1: {
            18: hiddenSrcPrefix + '0028/0019.jpg',
        },
        2: {
            0: hiddenSrcPrefix + '0029/0001.jpg',
            4: hiddenSrcPrefix + '0029/0006.jpg',
            17: hiddenSrcPrefix + '0029/0020.jpg',
        },
        3: {
            18: [
                hiddenSrcPrefix + '0030/0019.jpg',
                hiddenSrcPrefix + '0030/0020.jpg',
            ],
        },
        4: {
            18: [
                hiddenSrcPrefix + '0031/0019.jpg',
                hiddenSrcPrefix + '0031/0020.jpg',
            ],
        },
        5: {
            15: hiddenSrcPrefix + '0032/0016.jpg',
        },
        6: {
            19: hiddenSrcPrefix + '0033/0020.jpg',
        },
        7: {
            18: hiddenSrcPrefix + '0034/0019.jpg',
        },
        10: {
            0: hiddenSrcPrefix + '0037/0001.jpg',
            10: hiddenSrcPrefix + '0037/0012.jpg',
        },
    }
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
