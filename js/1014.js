(function () {
    let p = new ReaderParam()
    let bookNum = 1014
    p.bookIndex = bookNum
    p.bookTitle = '夏日回忆-预告篇'
    p.editorNote = {
        zh: '- 本篇为游戏2.4版本「夏日回忆」活动（已加入活动相册）的前置漫画。'
            + '（<a href="https://www.bilibili.com/video/BV1es411V7ri">活动PV</a>）'
            + '</br>- <a href="https://mp.weixin.qq.com/s/GaBbA5iJVbdEp0AUhlwybQ">相关周边</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1014.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2023/01/31/75216984/53f33f0b6082fa14a8dfbd06d56e6442_603858116611818230.png',
    ]
    p.numChapter = 4
    p.chTitles = [
        //https://mp.weixin.qq.com/s/EVee4U1KNgN18TG8t2URUg
        '第一话',
        //https://mp.weixin.qq.com/s/oUGcH4QBOrZPIYboYfSmJQ
        '第二话',
        //https://mp.weixin.qq.com/s/EGMzEtty-ibf2-Qz9fltSw
        '第三话',
        //https://mp.weixin.qq.com/s/N3aegrst-1pgGydGb0DhtQ
        '第四话',
    ]
    p.chPages = [
        10, 7, 9, 11
    ]
    p.hiddenPages = null
    p.bgmInfo = [
        1030,
        1336,
        1206,
        89,
    ]
    p.addBgmLoopInfo(1336, 0, 34, 0, 0.5)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
