(function () {
    let p = new ReaderParam()
    let bookNum = 1008
    p.bookIndex = bookNum
    p.bookTitle = '月影篇'
    p.bookMode = 'rl'
    p.editorNote = {
        zh: '- 本篇为《逆熵入侵篇》的后续漫画。'
            + '</br>- 本篇为游戏2.1版本「月影逐龙」（主线第7章）的前置漫画。'
            + '（<a href="https://www.bilibili.com/video/BV1vW411H7zJ">版本PV</a>）'
            + '</br>- <a href="https://mp.weixin.qq.com/s/AStYKap_07NCY6QxJFSzew">漫画预告</a>'
            + '　<a href="https://www.bilibili.com/video/BV17W411B7xq">漫画纪念PV</a>'
            + '　<a href="https://mp.weixin.qq.com/s/ziKg2P8VUOsAADLXO3YZlA">对应的「崩坏教室」</a>'
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
        '第一话 暗流', //https://mp.weixin.qq.com/s/bjIoCuvUHNlVKi6C7tJ5Hw
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
        '第十三话 承诺', //https://mp.weixin.qq.com/s/tPOafLceUfxQdrqFI_8fmQ
    ]
    p.chPages = [
        24, 23, 23, 25, 24, 21, 20, 22, 20, 22, 18, 21, 11
    ]
    p.addBookFirstBlank()
    p.bookModeBlank[5] = []
    p.bookModeBlank[8] = []
    p.hiddenPages = null
    p.bgmInfo = [
        [[-1, 70, 77, 78], [0, 0.1, 47, 77.5]],
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
    p.bgmInfo2 = [
        [[-1, 70, 77, 78], [0, 1, 12, 20]],
        [[78, 77, 78], [0, 6, 10]],
        78,
        79,
        [[80, 68], [0, 14]],
        1,
        9,
        [[81, 82], [0, 8]],
        83,
        [[83, 8], [0, 14]],
        82,
        [[82, 58], [0, 8]],
        14,
    ]
    p.addBgmLoopInfo(58, 31, 63, 3, 1)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
