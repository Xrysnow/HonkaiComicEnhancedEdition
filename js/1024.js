(function () {
    let p = new ReaderParam()
    let bookNum = 1024
    p.bookIndex = bookNum
    p.bookTitle = '新春旅行'
    p.bookMode = 'rl'
    p.editorNote = {
        zh: '- 本篇为游戏4.6版本活动「神州漂流记」的前置漫画。'
            + '（<a href="https://www.bilibili.com/video/BV14N411o7Ut">版本PV</a>）'
            + '</br>- <a href="https://www.bilibili.com/video/BV1wy4y127kC">相关服装PV</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1024.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/f2af8e4af994a60e2035551e72341e22_2630937856556331035.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/ca337faf867dfb76c867b659baa15c01_2377894978169620316.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/72cd6041c424aaa3f0b5138b0284a4be_1052996942343373345.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/4dabe7a05e18336cc3e210eb77120b34_4529751337605329151.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/cdb8bd0b8592263ef61300e044d6d8fe_4698452506566260911.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/51610632211697e69a4d0825cb057e37_6888569795889821027.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/75e2ce955d2d349bef485928ac3f2afc_8068810623931115303.jpg',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/02/06/75216984/635564ec1f37081b7d8176ebb3c018aa_4768249038185137620.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/02/06/75216984/78e35df854247bc7adb8d697ef62dfc1_6533968369973031999.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/02/06/75216984/c2cb2c09d16881c8cbe630cee9d93cc0_8630010043980772039.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/03/28/75216984/45fbf7acdbe46cd3c675c69fbc48c2f6_2843226734594046733.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/03/23/75216984/bddc9aa7c231f4ce415cd6542adf5106_8567533878240687596.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/04/13/75216984/cd468f66bb8b0d559428d42334b0d361_1638234829845120376.png',
    ]
    p.numChapter = 1
    p.chTitles = [
        '短篇',
    ]
    p.chPages = [
        19
    ]
    p.hiddenPages = null
    p.bgmInfo = [
        [[106, 107], [0, 68]],
    ]
    p.bgmInfo2 = [
        [[106, 107], [0, 13]],
    ]
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
