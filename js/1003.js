(function () {
    let p = new ReaderParam()
    let bookNum = 1003
    p.bookIndex = bookNum
    p.bookTitle = '圣痕之谜篇'
    p.bookMode = 'rl'
    p.editorNote = {
        zh: '- 本篇为《樱花追忆篇》的后续，已被《崩坏3》IP站删除。'
            + '</br>- 设定补充（与漫画同步更新）：<a href="https://mp.weixin.qq.com/s/tTdikP7KO_wfgP8D5hwStg">【1】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/Yx4yLiemakwvRgS3CPz25g">【2】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/Q3-byZ03NzZx0P81ygX6rg">【3】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/SmBQQUtsX58GKfc8Lm4Yng">【4】</a>'
            + '</br>- 本篇为游戏1.1版本外传「轩辕篇」及1.2版本外传「蚩尤篇」（已加入编年史）的前置漫画。'
            + '（<a href="https://www.bilibili.com/video/BV1Ms411W7As">1.1版本PV</a>　<a href="https://www.bilibili.com/video/BV1Fs411Y7Tn">1.2版本PV</a>）'
            + '</br>- 本篇对观看编年史「轩辕篇」「蚩尤篇」「遗忘之人」等剧情仍有一定帮助。'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = prefix + 'book_cover/1003.jpg'
    p.numChapter = 8
    p.chTitles = [
        '第十五话 圣痕', //https://mp.weixin.qq.com/s/5djtoah_0oKOOWiyH0ReTg
        '第十六话 广州，美食之都！', //https://mp.weixin.qq.com/s/oBPz8ws3d9-PXW0Fs--ZAQ
        '第十七话 听说你是画漫画的', //https://mp.weixin.qq.com/s/ENenVKfxg4_9zDVGwAj_tw
        '第十八话 下海', //https://mp.weixin.qq.com/s/MmuOg8AsuwRIdGI1F0oVDw
        '第十九话 救援', //https://mp.weixin.qq.com/s/YxA9Hxd7W4MZRNyPdqrqKQ
        '第二十话 心魔', //https://mp.weixin.qq.com/s/n6O-xTYHK1_DANQUEMtk3w
        '第二十一话 诅咒', //https://mp.weixin.qq.com/s/PCKylnqInYOP7BCFmgZZ_A
        '第二十二话 新生', //https://mp.weixin.qq.com/s/uGnTkRa-6vLhext7XK44CA
    ]
    p.chPages = [
        27, 24, 22, 28, 26, 25, 27, 28
    ]
    p.bookModeBlank = {
        0: [16],
        1: [3, 13],
        2: [0, 10],
        7: [10],
    }
    for (let i = 3; i < 7; i++) {
        p.bookModeBlank[i] = [0]
    }
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
    p.bgmInfo2 = [
        [[-1, 44, 58], [0, 1, 20]],
        [[30, 1290], [0, 13.01]],
        44,
        [[44, 59], [0, 8]],
        [[60, 59], [0, 6]],
        [[61, -1, 59], [0, 5, 7]],
        [[8, 59, 31], [0, 7, 24]],
        [[31, 62], [0, 10]],
    ]
    p.addBgmLoopInfo(58, 0, 31, 1, 1)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
