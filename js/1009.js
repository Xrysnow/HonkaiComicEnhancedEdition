(function () {
    let p = new ReaderParam()
    let bookNum = 1009
    p.bookIndex = bookNum
    p.bookTitle = '紫鸢篇'
    p.bookDate = '2017-2018'
    p.bookDesc = {
        zh: '公元1470年，意图扩张势力的天命发动了一场规模巨大的东征。尽管对这场战争的目的心怀疑惑，但天命最强的女武神卡莲·卡斯兰娜还是服从了组织的命令。但在战场上，她的觉悟受到了质疑…',
    }
    p.editorNote = null
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1009.jpg'
    p.numChapter = 14
    p.chTitles = [
        '新章节序幕 历史',
        '第一幕 罪孽',
        '第二幕 初遇',
        '第三幕 预告',
        '第四幕 伪装',
        '第五幕 决意',
        '第六幕 地下',
        '第七幕 暴露',
        '第八幕 梦魇',
        '第九幕 分歧',
        '第十幕 觉悟',
        '第十一幕 死斗',
        '第十二幕 信念',
        '终幕 回信',
    ]
    p.chPages = [
        18, 16, 20, 15, 16, 14, 13, 17, 16, 17, 14, 17, 16, 18
    ]
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
