(function () {
    let p = new ReaderParam()
    let bookNum = 1013
    p.bookIndex = bookNum
    p.bookTitle = '女武神的餐桌'
    p.bookDate = '2018-2020'
    p.bookDesc = {
        zh: '这是回到宿舍的女武神们，发生在她们身上的和食物有关的故事。女武神们做的料理各不相同，但是其中蕴含的心意，对重要的人想要传达的思念，却是相通的。',
    }
    p.editorNote = {
        zh: '- <a href="https://www.bilibili.com/bangumi/play/ep275898">动画 第一季</a>'
            + '</br>- <a href="https://www.bilibili.com/bangumi/play/ss33688">动画 第二季</a>'
    }
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1013.jpg'
    p.numChapter = 16
    p.chTitles = [
        '第一话 回忆中的俄罗斯甜菜汤',
        '第二话 烤焦的吐司披萨',
        '第三话 不够吃的奶油炖菜',
        '第四话 想象中的餐蛋面',
        '第五话 盛夏的海边烧烤',
        '第六话 甜过头的土豆泥鸡翅',
        '第七话 做给自己吃的煎饺',
        '新春番外篇 冬日里的麻婆豆腐',
        '第八话 逢魔之时的樱花酿',
        '第九话 完美的熔岩巧克力蛋糕',
        '第十话 随心搭配的塔帕斯',
        '第十一话 一菜多吃的芝士烤玉米片',
        '壁纸精选',
        '第十二话 重获新生的樱桃酱',
        '第十三话 两个人的海鲜浓汤',
        '第十四话 猫饭与蛋糕',
    ]
    p.chPages = [
        10, 7, 10, 10, 13,
        13, 12, 10, 11, 14,
        15, 17, 40, 11, 10,
        21
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
