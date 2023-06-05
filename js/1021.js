(function () {
    let p = new ReaderParam()
    let bookNum = 1021
    p.bookIndex = bookNum
    p.bookTitle = '传承'
    p.bookMode = 'rl'
    p.editorNote = null
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1021.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/73514954/fe39fc4a6324e6f56f3a41416225e565_2745354954126186424.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/f4b96c2fb99a2b94260f295ca85ac983_8665254224988187316.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/26caccc47c9e504cfa4fab78feedbb39_839600948863478661.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/a0a45bc8e5fafe24839115355c08bd57_146009563887995285.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/44437cacc03dab20911213a962ce3057_8192488671501323294.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/22/75216984/2a03786b3a7413c76d99fdf94668270f_8648840729497920030.jpg',
    ]
    p.numChapter = 16
    p.chTitles = [
        '泡影',
        '须弥芥子',
        '因果转轮',
        '病',
        '逐火之蛾',
        '众生',
        '千分之一',
        '它',
        '梦境',
        '报身',
        '代价',
        '圣痕计划',
        '罪',
        '挚友',
        '抉择',
        '最后的布局',
    ]
    p.chPages = [
        14, 20, 19, 21, 20, 21, 19, 18, 16, 35, 21, 21, 19, 30, 20, 21
    ]
    p.addBookFirstBlank()
    p.hiddenPages = null
    p.bgmInfo = [
        [[-1, 93, 60], [0, 0.1, 87]],
        [[59, 93, 97], [0, 57, 92]],
        [[97, 98], [0, 97.5]],
        98,
        [[98, 84], [0, 31]],
        [[84, 56], [0, 45]],
        11,
        [[1, 7], [0, 89]],
        7,
        [[99, 87, 55], [0, 20, 89]],
        55,
        100,
        [[100, 19], [0, 74]],
        [[19, 101], [0, 60]],
        [[101, 1147], [0, 57]],
        [[102, 101, 103], [0, 60, 85]],
    ]
    p.bgmInfo2 = [
        [[93, 60], [0, 12]],
        [[59, 93, 97], [0, 12, 18]],
        [[97, 98], [0, 18]],
        98,
        [[98, 84], [0, 6]],
        [[84, 56], [0, 10]],
        11,
        [[1, 7], [0, 16]],
        7,
        [[99, 87, 55], [0, 8, 32]],
        55,
        100,
        [[100, 19], [0, 14]],
        [[19, 101], [0, 18]],
        [[101, 1147], [0, 12]],
        [[102, 101, 103], [0, 12, 18]],
    ]
    p.addBgmLoopInfo(100, 0, 43, 0.5, 1)
    p.addBgmLoopInfo(1147, 0, 27, 0.5, 1)
    p.addBgmLoopInfo(102, 0, 19, 3, 5)
    p.addBgmLoopInfo(103, 0, 20, 1, 2)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
