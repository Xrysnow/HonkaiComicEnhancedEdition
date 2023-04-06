(function () {
    let p = new ReaderParam()
    let bookNum = 1002
    p.bookIndex = bookNum
    p.bookTitle = '樱花追忆篇'
    p.bookDate = '2015-2016'
    p.bookDesc = {
        zh: '被无量塔姬子带入圣芙蕾雅学园的琪亚娜三人，在学园长德丽莎的要求下，接受成为女武神的培训，在训练过程中，琪亚娜却意外遇见了500年前死去的祖先卡莲，和卡莲纠缠一生的“她”，也出现在了德丽莎的面前...',
    }
    p.editorNote = {
        zh: '- 本篇原名为《学园篇》，为《逃离长空篇》的后续。'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = prefix + 'book_cover/1002.jpg'
    p.numChapter = 8
    p.chTitles = [
        '第七话 琪亚娜最大的危机',
        '第八话 历史信标',
        '第九话 卡莲和琪亚娜',
        '第十话 此身为盾',
        '第十一话 白骑士·月光',
        '第十二话 第四律者诞生？',
        '第十三话 跨越500年的重逢',
        '第十四话 愿樱花与你同在',
    ]
    p.chPages = [
        15, 17, 17, 18, 23, 18, 18, 20
    ]
    let prefix2 = Util.getImgLegacySrcPrefix()
    let hiddenSrcPrefix = prefix2 + '1/chapter/'
    p.hiddenPages = {
        0: {
            1: [
                hiddenSrcPrefix + '0008/0001.jpg',
                hiddenSrcPrefix + '0008/0002.jpg',
            ],
            2: hiddenSrcPrefix + '0008/0004.jpg',
            4: hiddenSrcPrefix + '0008/0007.jpg',
            15: hiddenSrcPrefix + '0008/0019.jpg',
        },
        1: {
            1: [
                hiddenSrcPrefix + '0009/0001.jpg',
                hiddenSrcPrefix + '0009/0002.jpg',
            ],
            17: [
                hiddenSrcPrefix + '0009/0019.jpg',
                hiddenSrcPrefix + '0009/0020.jpg',
            ],
        },
        2: {
            1: [
                hiddenSrcPrefix + '0010/0001.jpg',
                hiddenSrcPrefix + '0010/0002.jpg',
            ],
            17: [
                hiddenSrcPrefix + '0010/0019.jpg',
                hiddenSrcPrefix + '0010/0020.jpg',
            ],
        },
        3: {
            1: [
                hiddenSrcPrefix + '0011/0001.jpg',
                hiddenSrcPrefix + '0011/0002.jpg',
            ],
            18: [
                hiddenSrcPrefix + '0011/0020.jpg',
                hiddenSrcPrefix + '0011/0021.jpg',
            ],
        },
        4: {
            1: [
                hiddenSrcPrefix + '0012/0001.jpg',
                hiddenSrcPrefix + '0012/0002.jpg',
            ],
            23: [
                hiddenSrcPrefix + '0012/0025.jpg',
                hiddenSrcPrefix + '0012/0026.jpg',
            ],
        },
        5: {
            1: [
                hiddenSrcPrefix + '0013/0001.jpg',
                hiddenSrcPrefix + '0013/0002.jpg',
            ],
            18: [
                hiddenSrcPrefix + '0013/0020.jpg',
                hiddenSrcPrefix + '0013/0021.jpg',
            ],
        },
        6: {
            1: [
                hiddenSrcPrefix + '0014/0001.jpg',
                hiddenSrcPrefix + '0014/0002.jpg',
            ],
            17: [
                hiddenSrcPrefix + '0014/0019.jpg',
                hiddenSrcPrefix + '0014/0020.jpg',
            ],
            18: [
                hiddenSrcPrefix + '0014/0022.jpg',
                hiddenSrcPrefix + '0014/0023.jpg',
                hiddenSrcPrefix + '0014/0024.jpg',
            ],
        },
        7: {
            1: [
                hiddenSrcPrefix + '0015/0001.jpg',
                hiddenSrcPrefix + '0015/0002.jpg',
            ],
            9: hiddenSrcPrefix + '0015/0011.jpg',
            20: [
                hiddenSrcPrefix + '0015/0023.jpg',
                hiddenSrcPrefix + '0015/0024.jpg',
            ],
        },
    }
    p.bgmInfo = [
        [[-1, 43], [0, 1]],
        [[43, 44, 45], [0, 23, 91]],
        45,
        [[46, 49], [0, 60]],
        [[49, 50, 47], [0, 36, 77]],
        [[56, 52], [0, 91]],
        53,
        [[54, 57, 55], [0, 47, 86]],
    ]
    p.addBgmLoopInfo(50, 0, 21.2, 0.5, 0.5)
    p.addBgmLoopInfo(54, 0, 33.8, 1, 1)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
