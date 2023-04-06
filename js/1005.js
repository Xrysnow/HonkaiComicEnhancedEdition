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
        zh: '本篇原名为《崩坏EX 绯樱》。'
        + '</br>- <a href="https://www.bilibili.com/video/BV1ds41127Kp">漫画纪念PV</a>'
    }
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1005.jpg'
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
    let hiddenSrcPrefix = 'http://static-event.benghuai.com/ip_resources_new/comic/2/chapter/'
    p.hiddenPages = {
        0: {
            5: [
                hiddenSrcPrefix + '0001/0006.jpg',
                hiddenSrcPrefix + '0001/0007.jpg',
            ],
        },
    }
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
