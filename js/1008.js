(function () {
    let p = new ReaderParam()
    let bookNum = 1008
    p.bookIndex = bookNum
    p.bookTitle = '月影篇'
    p.bookDate = '2017'
    p.bookDesc = {
        zh: '在第一律者复制人入侵圣芙蕾雅学园的风波平息之后，姬子也从昏迷中苏醒了过来。正当大家在为姬子的归来庆祝之时，符华却收到了一项神秘的任务。并且，这项任务的委托人给了她一个奇怪的指令…',
    }
    p.editorNote = {
        zh: '- 本篇为《逆熵入侵篇》的后续漫画。'
            + '</br>- 本篇为游戏2.1版本「月影逐龙」（主线第7章）的前置漫画。'
            + '</br>- <a href="https://www.bilibili.com/video/BV1vW411H7zJ">版本PV</a>'
            + '</br>- <a href="https://www.bilibili.com/video/BV17W411B7xq">漫画纪念PV</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1008.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/76361817/15ec2ab810f9faa6d630f27c69848413_5531029812150322633.jpg',
    ]
    p.numChapter = 13
    p.chTitles = [
        '第一话 暗流',
        '第二话 潜入',
        '第三话 恐慌',
        '第四话 幽灵',
        '第五话 赎罪',
        '第六话 委托',
        '第七话 突入',
        '第八话 死斗',
        '第九话 真相',
        '第十话 奇迹',
        '第十一话 异变',
        '第十二话 影',
        '第十三话 承诺',
    ]
    p.chPages = [
        24, 23, 23, 25, 24, 21, 20, 22, 20, 22, 18, 21, 11
    ]
    p.hiddenPages = null
    p.bgmInfo = [
        [[-1, 70, 77, 78], [0, 1, 47]],
        [[78, 77, 78], [0, 16, 43]],
        78,
        79,
        [[80, 68], [0, 59]],
        1,
        9,
        [[81, 82], [0, 26]],
        83,
        [[83, 8], [0, 55]],
        82,
        [[82, 58], [0, 30]],
        14,
    ]
    p.addBgmLoopInfo(58, 31, 63, 1, 1)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
