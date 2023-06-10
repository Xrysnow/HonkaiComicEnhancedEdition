(function () {
    let p = new ReaderParam()
    let bookNum = 1009
    p.bookIndex = bookNum
    p.bookTitle = '紫鸢篇'
    p.bookMode = 'rl'
    p.editorNote = {
        zh: '- 对应的「崩坏教室」：'
            + '<a href="https://mp.weixin.qq.com/s/nka1fOFyrrQQtddLpwWdlA">【1】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/1thxGdPlkuVMO758xNEuFQ">【2】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/JVyyef_ZUewEMgKJct25Ow">【3】</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1009.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/2e4f345f4201fc250623e04e3dcf715d_6837183955309441359.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/8fe2659c22045d34c5ab5731787cb3a3_7009565843993094543.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/d42338912c5422f80500a6a5bb3e0f23_4798808526292163068.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/6542ce520441fd4d8776fe02985a2c12_1509410578476881865.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/01953764b86eb8cdfaf4af39708dda82_2852090147954161163.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/940658e82328857b7912b2925a2850d7_8568948109943362061.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/57e5912e6e0f37e006fdc5932d768ac6_561684129668183381.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/50494840/6dbd2bc0691da58001202ce450f73515_2875638540091157655.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/22/75216984/fbf77512b25400af7df6add522e542d7_6421145313708128234.jpg',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/03/24/50494840/f6c889bac9817975f420bd5375be156c_5364218441273722437.jpg',
    ]
    p.numChapter = 14
    p.chTitles = [
        '新章节序幕 历史', //https://mp.weixin.qq.com/s/uPgPg4l8GuVIvlDVO2AUkg
        '第一幕 罪孽',
        '第二幕 初遇',
        '第三幕 预告',
        '第四幕 伪装',
        '第五幕 决意',
        '第六幕 地下',
        '第七幕 暴露',
        '第八幕 梦魇',
        '第九幕 分歧',
        '第十幕 觉悟',
        '第十一幕 死斗',
        '第十二幕 信念',
        '终幕 回信', //https://mp.weixin.qq.com/s/x5tnlIOm-wLdKGG6-FaK8A
    ]
    p.chPages = [
        18, 16, 20, 15, 16, 14, 13, 17, 16, 17, 14, 17, 16, 18
    ]
    p.addBookFirstBlank()
    p.hiddenPages = null
    p.bgmInfo = [
        [[-1, 84], [0, 1]],
        45,
        [[45, 85], [0, 67]],
        45,
        56,
        84,
        [[84, 56], [0, 29]],
        56,
        84,
        47,
        [[47, 86], [0, 29]],
        [[86, 48], [0, 96]],
        [[48, 87], [0, 61]],
        87,
    ]
    p.bgmInfo2 = [
        84,
        45,
        [[45, 85], [0, 14]],
        45,
        56,
        84,
        [[84, 56], [0, 4]],
        56,
        84,
        47,
        [[47, 86], [0, 6]],
        [[86, 48], [0, 17]],
        [[48, 87], [0, 11]],
        87,
    ]
    p.addBgmLoopInfo(56, 0, 40, 0.5, 1)
    p.addBgmLoopInfo(85, 3, 51, 0.1, 1)
    p.addBgmLoopInfo(86, 33, 84, 1, 1)
    p.addBgmLoopInfo(87, 34, 94, 1, 1)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
