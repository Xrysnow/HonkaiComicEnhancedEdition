(function () {
    let p = new ReaderParam()
    let bookNum = 1015
    p.bookIndex = bookNum
    p.bookTitle = '双子：起源'
    p.editorNote = {
        zh: '- 本篇为游戏3.1版本「逐梦双星」活动（已加入编年史）的前置漫画。'
            + '（<a href="https://www.bilibili.com/video/BV17b411L7cC">版本PV</a>）'
            + '</br>- 标题意为“莉莉娅”和“萝莎莉娅”。'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1015.jpg',
        'https://uploadstatic.mihoyo.com/contentweb/20191114/2019111412074936496.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/9e1d0ba6609affb5f1fc5ac448bde418_6094251868884897931.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/98bba8ea253b0d3fd048a83d8ee3682c_974669528238486833.png',
    ]
    p.numChapter = 2
    p.chTitles = [
        '第一话 Лилия', //https://mp.weixin.qq.com/s/vuiF9v0wKWxYFpKYOVmFng
        '最终话 Розалия', //https://mp.weixin.qq.com/s/RBXY-iRrfkYYMfQmYHGaXA
    ]
    p.chPages = [
        7, 10
    ]
    p.hiddenPages = null
    p.bgmInfo = [
        1176,
        1030,
    ]
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
