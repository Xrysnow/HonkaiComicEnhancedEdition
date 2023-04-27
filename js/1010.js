(function () {
    let p = new ReaderParam()
    let bookNum = 1010
    p.bookIndex = bookNum
    p.bookTitle = '神之键秘话'
    p.bookDate = '2017-2018'
    p.bookDesc = {
        zh: '距离现在的五万多年前，上个世代的人类已经发展出了高度的文明，为了和律者战斗，人们通过研究律者核心的残片，制作出了抵抗崩坏、守护未来的关键武器——神之键。',
    }
    p.editorNote = {
        zh: '- 本篇更新较为分散，其中「轩辕剑秘话」为2017年1月更新，「空白之键」为2018年11月更新。'
            + '</br>- 「地藏御魂」为《紫鸢篇》的前置漫画。'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1010.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/eb4c1d7378170e1d52115d2284a504af_5701453498518035470.png',
    ]
    p.numChapter = 5
    p.chTitles = [
        '轩辕剑秘话',//2017.1
        '地藏御魂',//2017.10
        '天火圣裁',
        '原初之翼',
        '空白之键',//2018.11
    ]
    p.chPages = [
        15, 24, 27, 33, 24
    ]
    p.hiddenPages = {
        0: {
            14: prefix + 'book/1006/12/0015.jpg'
        }
    }
    p.fnGetImgSrc = function (i, n) {
        if (i == 1 && n <= 14) {
            // 旧版分辨率更高
            return prefix + 'book/1006/12/' + n + '.jpg'
        }
        return p.imgSrcPrefix + i + '/' + n + '.jpg'
    }
    p.bgmInfo = [
        88,
        88,
        [[55, 89], [0, 67]],
        [[66, 1037], [0, 69]],
        88,
    ]
    p.addBgmLoopInfo(1037, 25, 75, 0.5, 1)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
