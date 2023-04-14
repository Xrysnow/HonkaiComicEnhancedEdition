(function () {
    let p = new ReaderParam()
    let bookNum = 1005
    p.bookIndex = bookNum
    p.bookTitle = '绯樱篇'
    p.bookDate = '2015'
    p.bookDesc = {
        zh: '故事发生在《崩坏学园2》之前，在500年前的日本，名为八重樱的巫女生活在一个平静的小村中，一个漂流来的修女，和她带着的蕴含着可怕力量的水晶，打破了这虚伪的平静...',
    }
    p.editorNote = {
        zh: '- 本篇原名为《崩坏EX 绯樱》。'
            + '</br>- <a href="https://www.bilibili.com/video/BV1ds41127Kp">漫画纪念PV</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1005.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/e4fb6a57e01089caf16d16705227a915_8663746868829492760.png',
    ]
    p.numChapter = 8
    p.chTitles = [
        '第一话 邂逅',
        '第二话 异变',
        '第三话 神祭',
        '第四话 厄神',
        '第五话 凛',
        '第六话 弑神',
        '第七话 樱',
        '第八话 卡莲',
    ]
    p.chPages = [
        16, 17, 14, 15, 20, 12, 12, 25
    ]
    let prefix2 = Util.getImgLegacySrcPrefix()
    let hiddenSrcPrefix = prefix2 + '2/chapter/'
    p.hiddenPages = {
        0: {
            5: [
                hiddenSrcPrefix + '0001/0006.jpg',
                hiddenSrcPrefix + '0001/0007.jpg',
            ],
        },
    }
    p.bgmInfo = [
        1183,
        [[1183, 64], [0, 22]],
        1291,
        1352,
        1183,
        [[1183, 65], [0, 31]],
        65,
        [[65, 1095], [0, 11]],
    ]
    p.addBgmLoopInfo(65, 24, 100, 1, 2, false)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
