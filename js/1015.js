(function () {
    let p = new ReaderParam()
    let bookNum = 1015
    p.bookIndex = bookNum
    p.bookTitle = '双子：起源'
    p.bookDate = '2019'
    p.bookDesc = {
        zh: '故事发生在一座孤儿院；这里白天阳光明媚，夜晚阴森可怖；每隔一段时日，就有孩子神秘消失……阿琳姐妹无意中发现了美艳女院长“妈妈”的秘密，就此展开一段跌宕起伏的冒险！',
    }
    p.editorNote = {
        zh: '- 本篇为游戏3.1版本「逐梦双星」活动（已加入编年史）的前置漫画。'
            + '</br>- 标题意为“莉莉娅”和“萝莎莉娅”。'
            + '</br>- <a href="https://www.bilibili.com/video/BV17b411L7cC">版本PV</a>'
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
        '第一话 Лилия',
        '最终话 Розалия',
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
