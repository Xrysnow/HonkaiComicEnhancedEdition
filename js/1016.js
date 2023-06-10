(function () {
    let p = new ReaderParam()
    let bookNum = 1016
    p.bookIndex = bookNum
    p.bookTitle = '双子：入侵'
    p.editorNote = {
        zh: '- 本篇为4.1版本活动《双子：入侵 海渊乐园篇》的前置漫画。'
            + '（<a href="https://www.bilibili.com/video/BV1mf4y117Uz?t=94.6">版本PV</a>）'
            + '</br>- 相关游戏内容：3.1版本活动《地下城大冒险》、网页活动《镰刀勇者成名录》。'
            + '</br>- <a href="https://mihoyo.tmall.com/category.htm?viewType=grid&keyword=%B5%D8%CF%C2%B3%C7">相关周边</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1016.jpg',
        'https://uploadstatic.mihoyo.com/contentweb/20191114/2019111412074936496.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/ae5a37b8c8b6635b6f068c09d471bebb_8248911072777294432.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/910ccbeb958e836f19eb9d44078a23de_5484264929558081197.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/9f8b331744fc371a57063306e8ad8b3a_1070322913256225547.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/9e1d0ba6609affb5f1fc5ac448bde418_6094251868884897931.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/98bba8ea253b0d3fd048a83d8ee3682c_974669528238486833.png',
    ]
    p.numChapter = 14
    p.chTitles = [
        '地下城篇01', //https://mp.weixin.qq.com/s/Rnx7gN7rTkmuwxqY93Pjpw
        '地下城篇02', //https://mp.weixin.qq.com/s/T7Xhd8eiMzz3JvE4-duI0w
        '地下城篇03', //https://mp.weixin.qq.com/s/-zdtpIpZiTo8s8RsvnorHA
        '地下城篇04', //https://mp.weixin.qq.com/s/_uvbbm3yzqJtEwOQYVE6Lw
        '末世篇01', //https://mp.weixin.qq.com/s/0UKhF-5T6B3RiizcPSjBhA
        '末世篇02', //https://mp.weixin.qq.com/s/at_sA4-J3sktUjbQ5fMKCA
        '末世篇03', //https://mp.weixin.qq.com/s/CIj7xUfg9ZGRsRXwxO7mnw
        '末世篇04', //https://mp.weixin.qq.com/s/CIj7xUfg9ZGRsRXwxO7mnw
        '末世篇05', //https://mp.weixin.qq.com/s/Y10UKt15ubKN9aogVwizJA
        '神探篇01', //https://mp.weixin.qq.com/s/aY2b17ZKVvuBlX-KCOnaxA
        '神探篇02', //https://mp.weixin.qq.com/s/pFcHsBwxNFRsMoGMrDmkdg
        '神探篇03', //https://mp.weixin.qq.com/s/mP_dzC2FQ_jQHwTuDuYjdA
        '神探篇04', //https://mp.weixin.qq.com/s/nemV-i1ziIsARxvoohlvwQ
        '神探篇05', //https://mp.weixin.qq.com/s/OcRZEJLLDmrHgc1i4AZZ6Q
    ]
    p.chPages = [
        13, 13, 16, 15, 14,
        13, 8, 9, 11, 6,
        7, 7, 6, 9
    ]
    p.hiddenPages = null
    p.bgmInfo = [
        89, 89, 89, 89, 89,
        89, 89, 89, 89, 89,
        89, 89, 89, 89,
    ]
    p.addBgmLoopInfo(89, 0, 1e5, 0.5, 0.5)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
