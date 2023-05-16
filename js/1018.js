(function () {
    let p = new ReaderParam()
    let bookNum = 1018
    p.bookIndex = bookNum
    p.bookTitle = '雾都假日'
    p.editorNote = null
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1018.jpg',
        'https://uploadstatic.mihoyo.com/contentweb/20200313/2020031319071683018.jpg',
        'https://uploadstatic.mihoyo.com/contentweb/20200410/2020041019021430937.png',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/76361817/c357d1a0b39d98f205e20498a83b8005_6941896988745841099.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/6dc87990eb5281787b5d678425cca1de_4591660967237094665.png',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/e37102451378c028f857a98deabf6d7c_3335937190504226687.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/f1c9b2c344a32cbb2c63c634ffbabb9c_2514934904987963594.png',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/05/25/50494840/f879fc2f5e7d826bf89221cfcac07d67_3097490388034985413.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/03/24/50494840/b323d72a5315e73ba7ed99fc59fe233b_8291015092685344599.jpg',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2023/03/11/75216984/d771eeccc6239417819e5debff32db10_6301448115140986262.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2023/03/11/75216984/072c2bdda6eeef142ec7d212ac732e22_7166695009189594864.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2023/03/11/75216984/121fabad648d9b5fb57978a4b1a47b03_2969837608346700720.png',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2023/03/20/75216984/a2b192cd9204682fc1056a43e971892e_2843672094991173787.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2023/03/20/75216984/93b163ad1cffec70713fa6253164f11c_7958230781202904495.png',
    ]
    p.numChapter = 10
    p.chTitles = [
        '序章 砂之挽歌',
        '第一话 线索',
        '第二话 强者',
        '第三话 传说',
        '第四话 探查',
        '第五话 密道',
        '第六话 棋子',
        '第七话 意外',
        '第八话 作战',
        '最终话 假期',
    ]
    p.chPages = [
        17, 20, 25, 17, 16, 20, 19, 19, 19, 12
    ]
    p.fnGetChapterCoverSrc = function (i) {
        if (i > 4) {
            i = i + 1
        }
        return p.chCoverSrcPrefix + i + '.jpg'
    }
    p.fnGetImgSrc = function (i, n) {
        if (i > 4) {
            i = i + 1
        }
        return p.imgSrcPrefix + i + '/' + n + '.jpg'
    }
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
