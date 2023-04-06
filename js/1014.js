(function () {
    let p = new ReaderParam()
    let bookNum = 1014
    p.bookIndex = bookNum
    p.bookTitle = '夏日回忆-预告篇'
    p.bookDate = '2018'
    p.bookDesc = {
        zh: '在街头徘徊的琪亚娜正在为打工而苦恼，阴差阳错之下她来到了吼姆欢乐餐厅，还通过了面试，然而意想不到的事还是发生了，并由此拉开了这个夏天的序幕…',
    }
    p.editorNote = {
        zh: '- 本篇为游戏2.4版本「夏日回忆」活动（已加入活动相册）的前置漫画。'
            + '</br>- <a href="https://www.bilibili.com/video/BV1es411V7ri">活动PV</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = prefix + 'book_cover/1014.jpg'
    p.numChapter = 4
    p.chTitles = [
        '第一话',
        '第二话',
        '第三话',
        '第四话',
    ]
    p.chPages = [
        10, 7, 9, 11
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
