(function () {
    let p = new ReaderParam()
    let bookNum = 1003
    p.bookIndex = bookNum
    p.bookTitle = '圣痕之谜篇'
    p.editorNote = {
        zh: '- 本篇为《樱花追忆篇》（原《学园篇》）的后续，已被官网删除。'
            + '</br>- 设定补充（与漫画同步更新）：<a href="https://mp.weixin.qq.com/s/tTdikP7KO_wfgP8D5hwStg">【1】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/Yx4yLiemakwvRgS3CPz25g">【2】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/Q3-byZ03NzZx0P81ygX6rg">【3】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/SmBQQUtsX58GKfc8Lm4Yng">【4】</a>'
            + '</br>- 本篇为游戏1.1版本外传「轩辕篇」及1.2版本外传「蚩尤篇」（已加入编年史）的前置漫画。'
            + '</br>- 本篇剧情与游戏内差异较大，但对于阅读编年史「轩辕篇」「蚩尤篇」「遗忘之人」等剧情仍有一定帮助。'
            + '</br>- <a href="https://www.bilibili.com/video/BV1Ms411W7As">1.1版本PV</a>　<a href="https://www.bilibili.com/video/BV1Fs411Y7Tn">1.2版本PV</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = prefix + 'book_cover/1003.jpg'
    p.numChapter = 8
    p.chTitles = [
        '第十五话 圣痕',
        '第十六话 广州，美食之都！',
        '第十七话 听说你是画漫画的',
        '第十八话 下海',
        '第十九话 救援',
        '第二十话 心魔',
        '第二十一话 诅咒',
        '第二十二话 新生',
    ]
    p.chPages = [
        27, 24, 22, 28, 26, 25, 27, 28
    ]
    let prefix2 = Util.getImgLegacySrcPrefix()
    let hiddenSrcPrefix = prefix2 + '1/chapter/'
    p.hiddenPages = {
        0: {
            0: [
                hiddenSrcPrefix + '0017/0001.jpg',
                hiddenSrcPrefix + '0017/0002.jpg',
                hiddenSrcPrefix + '0017/0003.jpg',
                hiddenSrcPrefix + '0017/0004.jpg',
                hiddenSrcPrefix + '0017/0005.jpg',
                hiddenSrcPrefix + '0017/0006.jpg',
                hiddenSrcPrefix + '0017/0007.jpg',
                hiddenSrcPrefix + '0017/0008.jpg',
            ],
        },
        5: {
            25: [
                hiddenSrcPrefix + '0024/0001.jpg',
                hiddenSrcPrefix + '0024/0002.jpg',
                hiddenSrcPrefix + '0024/0003.jpg',
            ]
        }
    }
    p.bgmInfo = [
        [[-1, 44, 58], [0, 1, 73]],
        [[30, 1290], [0, 57]],
        44,
        [[44, 59], [0, 24]],
        [[60, 59], [0, 18]],
        [[61, -1, 59], [0, 22, 29]],
        [[8, 59, 31], [0, 26, 88]],
        [[31, 62], [0, 34]],
    ]
    p.addBgmLoopInfo(58, 0, 31, 1, 1)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
