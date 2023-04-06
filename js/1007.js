(function () {
    let p = new ReaderParam()
    let bookNum = 1007
    p.bookIndex = bookNum
    p.bookTitle = '恩返篇'
    p.bookDate = '2017'
    p.bookDesc = {
        zh: '德丽莎背部的八重樱圣痕出现了异常，令德丽莎陷入了昏迷之中。为了唤醒德丽莎，芽衣进入了圣痕的数据空间中调查圣痕异常的原因。而此时，“她”也出现在了被封闭在圣痕空间中的德丽莎面前…',
    }
    p.editorNote = {
        zh: '- 本篇为游戏1.4版本「樱色轮回」（已加入开放世界玩法）的前置漫画。'
        + '</br>- <a href="https://www.bilibili.com/video/BV1Ex411Q7aD">版本PV</a>'
        + '</br>- <a href="https://www.bilibili.com/video/BV1bx411i7x5">漫画纪念PV</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = prefix + 'book_cover/1007.jpg'
    p.numChapter = 11
    p.chTitles = [
        '第一话 封印',
        '间章 A1',
        '第二话 重逢',
        '第三话 巫女',
        '第四话 噩梦',
        '第五话 祭祀',
        '第六话 梦境',
        '第七话 烈焰',
        '第八话 恩返',
        '第九话 原谅',
        '第十话 终幕',
    ]
    p.chPages = [
        24, 24, 14, 19, 17, 21, 31, 19, 21, 18, 12
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
