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
        zh: '- 标题意为“莉莉娅”和“萝莎莉娅”。'
            + '</br>- 本篇为游戏3.1版本「逐梦双星」活动（已加入编年史）的前置漫画。'
            + '</br>- <a href="https://www.bilibili.com/video/BV17b411L7cC">版本PV</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = prefix + 'book_cover/1015.jpg'
    p.numChapter = 2
    p.chTitles = [
        '第一话 Лилия',
        '最终话 Розалия',
    ]
    p.chPages = [
        7, 10
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
