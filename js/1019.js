(function () {
    let p = new ReaderParam()
    let bookNum = 1019
    p.bookIndex = bookNum
    p.bookTitle = '年岁'
    p.editorNote = {
        zh: '- 本篇为游戏3.7版本活动「神州仙行记」与主线20章「千年之羽」（4.3版本）的前置漫画。'
            + '（<a href="https://www.bilibili.com/video/BV1mJ411H7VM">3.7版本PV</a>'
            + '　<a href="https://www.bilibili.com/video/BV12V411m77f">4.3版本PV</a>）'
            + '</br>- 本篇第二话更新于2020年小年期间（1月18日）。'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1019.jpg',
        'https://uploadstatic.mihoyo.com/contentweb/20200120/2020012014354871886.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/bafe263c60d75cf4516a046f0e7af023_6808564814037714766.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/688eee50029360c4f77642e80d5da25f_6743901993825668838.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/bb1c4fc8aaf0d05d19566af4b6268022_3623408778795490639.png',
    ]
    p.numChapter = 2
    p.chTitles = [
        '赤鸢', //https://mp.weixin.qq.com/s/CPmAaJlox_HQuE68LmkGuA
        '烟火', //https://mp.weixin.qq.com/s/sNK-qSNYbVu5I8XOsQkGPA
    ]
    p.chPages = [
        9, 27
    ]
    p.hiddenPages = null
    p.bgmInfo = [
        [[30, 14, 31], [0, 46, 78]],
        [[30, 14, 32], [0, 30, 49]],
    ]
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
