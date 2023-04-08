(function () {
    let p = new ReaderParam()
    let bookNum = 1010
    p.bookIndex = bookNum
    p.bookTitle = '神之键秘话'
    p.bookDate = '2017'
    p.bookDesc = {
        zh: '距离现在的五万多年前，上个世代的人类已经发展出了高度的文明，为了和律者战斗，人们通过研究律者核心的残片，制作出了抵抗崩坏、守护未来的关键武器——神之键。',
    }
    p.editorNote = null
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = prefix + 'book_cover/1010.jpg'
    p.numChapter = 5
    p.chTitles = [
        '轩辕剑秘话',
        '地藏御魂',
        '天火圣裁',
        '原初之翼',
        '空白之键',
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
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
