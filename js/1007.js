(function () {
    let p = new ReaderParam()
    let bookNum = 1007
    p.bookIndex = bookNum
    p.bookTitle = '恩返篇'
    p.bookMode = 'rl'
    p.editorNote = {
        zh: '- 本篇为《绯樱篇》和《樱花追忆篇》的后续漫画。'
            + '</br>- 本篇为游戏1.4版本「樱色轮回」（开放世界玩法）与1.8版本「赤染御魂」的前置漫画。'
            + '</br>- <a href="https://www.bilibili.com/video/BV1Ex411Q7aD">1.4版本PV</a>　<a href="https://www.bilibili.com/video/BV17x411V7sx">1.8版本PV</a>'
            + '</br>- <a href="https://www.bilibili.com/video/BV1bx411i7x5">漫画纪念PV</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1007.jpg',
        'https://uploadstatic.mihoyo.com/contentweb/20191114/2019111410280911829.jpg',
        'https://uploadstatic.mihoyo.com/contentweb/20191114/2019111411163449247.jpg',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/bc4710ab6684beceb65f69f6aaef6ff8_1430276547149355918.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/7abdce803be8cbb127ed9c8ce35bf4cb_8917905992397628881.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/77124895/48dec3a1c20d64a2f9fc3fa952d96fa5_2323140217591864630.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/5992b0a9a8beab5d6cf1fe689c97bece_5309074062947447891.png',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/01/02/75216984/ca625755b16650d0d988b1d26ab97092_8284551980973295943.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/01/02/75216984/c4ee3e92c0ff19edb17adac5dd633151_968592048276238281.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/01/02/75216984/88b2563f6a568863b144079e52ba5699_8535319220815726816.png',
    ]
    p.numChapter = 11
    p.chTitles = [
        '第一话 封印',
        '间章 A1',
        '第二话 重逢',
        '第三话 巫女',
        '第四话 噩梦',
        '第五话 祭祀',
        '第六话 梦境',
        '第七话 烈焰',
        '第八话 恩返',
        '第九话 原谅',
        '第十话 终幕',
    ]
    p.chPages = [
        24, 24, 14, 19, 17, 21, 31, 19, 21, 18, 12
    ]
    p.bookModeBlank = {
        1: [0],
        3: [0],
        4: [0, 5],
        6: [0],
        9: [0],
        10: [0],
    }
    let hiddenSrcPrefix = '../res/img/legacy/1007/'
    p.hiddenPages = {
        2: {
            0: [
                hiddenSrcPrefix + '3/0001.jpg',
            ],
            3: [
                hiddenSrcPrefix + '3/0005.jpg',
            ],
        },
    }
    p.bgmInfo = [
        [[-1, 72, 1449], [0, 1, 80]],
        [[1449, 73], [0, 33]],
        1183,
        74,
        75,
        1352,
        1183,
        [[76, 64], [0, 52]],
        [[64, 65], [0, 49]],
        [[65, 1374], [0, 45]],
        [[1183, 77], [0, 80]],
    ]
    p.bgmInfo2 = [
        [[72, 1449], [0, 19]],
        [[1449, 73], [0, 10]],
        1183,
        74,
        75,
        1352,
        1183,
        [[76, 64], [0, 11]],
        [[64, 65], [0, 11]],
        [[65, 1374], [0, 8]],
        [[1183, 77], [0, 10]],
    ]
    p.addBgmLoopInfo(65, 51.5, 100, 0.5, 0.5, false)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
