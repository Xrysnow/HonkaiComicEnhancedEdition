(function () {
    let p = new ReaderParam()
    let bookNum = 1005
    p.bookIndex = bookNum
    p.bookTitle = '绯樱篇'
    p.bookMode = 'rl'
    p.editorNote = {
        zh: '- 本篇原名为《崩坏学园EX 绯樱篇》，为崩坏系列的第一篇连载漫画。'
            + '</br>- 本篇第一话于2月14日发布。'
            + '</br>- <a href="https://www.bilibili.com/video/BV1ds41127Kp">漫画纪念PV</a>'
            + '</br>- <a href="https://mp.weixin.qq.com/s/hi7DQDOBIK5CoWtDGMuMgw">发布地址</a>'
            + '</br>- <a href="https://mp.weixin.qq.com/s/Y9PCqw7TOxnk3Gr1ax6cFA">设定补充</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1005.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/e4fb6a57e01089caf16d16705227a915_8663746868829492760.png',
    ]
    p.numChapter = 8
    p.chTitles = [
        '第一话 邂逅',
        '第二话 异变',
        '第三话 神祭',
        '第四话 厄神',
        '第五话 凛',
        '第六话 弑神',
        '第七话 樱',
        '第八话 卡莲',
    ]
    p.chPages = [
        16, 17, 14, 15, 20, 12, 12, 25
    ]
    p.bookModeBlank = {
        1: [0],
        2: [0],
        3: [0],
        6: [0],
        7: [0],
    }
    let prefix2 = Util.getImgLegacySrcPrefix()
    let hiddenSrcPrefix = prefix2 + '2/chapter/'
    p.hiddenPages = {
        0: {
            5: [
                hiddenSrcPrefix + '0001/0006.jpg',
                hiddenSrcPrefix + '0001/0007.jpg',
            ],
        },
    }
    p.bgmInfo = [
        1183,
        [[1183, 64], [0, 22]],
        1291,
        1352,
        1183,
        [[1183, 65], [0, 31]],
        65,
        [[65, 1095], [0, 54]],
    ]
    p.bgmInfo2 = [
        1183,
        64,
        1291,
        1352,
        1183,
        [[1183, 65], [0, 5]],
        65,
        [[65, 1095], [0, 14]],
    ]
    p.addBgmLoopInfo(65, 51.5, 100, 1, 2, false)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
