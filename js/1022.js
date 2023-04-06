(function () {
    let p = new ReaderParam()
    let bookNum = 1022
    p.bookIndex = bookNum
    p.bookTitle = '云墨剑心'
    p.bookDate = '2020'
    p.bookDesc = {
        zh: '魔教办的「圣火大会」震动中原，若是能击败「天下第二」的阎世罗，定是能名扬天下。各界皆派了高手前来应战，太虚山赤鸢仙人和首徒林朝雨亦不例外。但是，她们还有着别的目的——入魔者，杀无赦。',
    }
    p.editorNote = {
        zh: '- 本篇为游戏主线20章「千年之羽」的前置漫画。'
            + '</br>- <a href="https://www.bilibili.com/video/BV12V411m77f">版本PV</a>'
    }
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1022.jpg'
    p.numChapter = 1
    p.chTitles = [
        '入魔者',
    ]
    p.chPages = [
        32
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
