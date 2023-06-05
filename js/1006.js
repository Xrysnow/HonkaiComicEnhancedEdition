(function () {
    let p = new ReaderParam()
    let bookNum = 1006
    p.bookIndex = bookNum
    p.bookTitle = '逆熵入侵篇'
    p.bookMode = 'rl'
    p.editorNote = {
        zh: '- 本篇为《圣痕之谜篇》的后续。'
            + '</br>- 第十一话与第十二话之间原为「轩辕剑秘话」，已被移动到《神之键秘话》。'
            + '</br>- <a href="https://mp.weixin.qq.com/s/pq78bGYyGAPOCaQP2pRr5g">设定补充</a>'
            + '</br>- <a href="https://www.bilibili.com/video/BV1Wx411S7hm">漫画纪念PV</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = prefix + 'book_cover/1006.jpg'
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
    p.bookModeBlank = {}
    p.addBookFirstBlank()
    p.bookModeBlank[0] = [2]
    p.bookModeBlank[7] = [2]
    let prefix2 = Util.getImgLegacySrcPrefix()
    let hiddenSrcPrefix = prefix2 + '1/chapter/'
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
    // 「轩辕剑秘话」已被移动到《神之键秘话》
    p.fnGetChapterCoverSrc = function (i) {
        if (i >= 12) {
            i += 1
        }
        return p.chCoverSrcPrefix + i + '.jpg'
    }
    p.fnGetImgSrc = function (i, n) {
        if (i >= 12) {
            i += 1
        }
        return p.imgSrcPrefix + i + '/' + n + '.jpg'
    }
    p.bgmInfo = [
        [[-1, 66, 16, 6], [0, 0.1, 51, 78]],
        67,
        1053,
        1053,
        1046,
        1091,
        16,
        [[16, 68], [0, 15]], // 68与游戏一致
        [[68, 14, 69], [0, 30, 88]],
        [[69, 1046], [0, 58]],
        69,
        41,
        40,
        42,
        70,
        71,
    ]
    p.bgmInfo2 = [
        [[66, 16, 6], [0, 11, 17]],
        67,
        1053,
        1053,
        1046,
        1091,
        16,
        [[16, 68], [0, 3]], // 68与游戏一致
        [[68, 14, 69], [0, 6, 14]],
        [[69, 1046], [0, 10]],
        69,
        41,
        40,
        42,
        70,
        71,
    ]
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
