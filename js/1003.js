(function () {
    let p = new ReaderParam()
    let bookNum = 1003
    p.bookIndex = bookNum
    p.bookTitle = '圣痕之谜篇'
    p.bookDate = '2016'
    p.bookDesc = {
        zh: '在传说中，在古代的神州，英雄姬轩辕手持轩辕剑，在崩坏兽的威胁下拯救了人类。5000年后，为了寻找传说中的轩辕剑和圣痕，无量塔姬子，琪亚娜和符华来到了神州南部的海底，探索失落的传奇...',
    }
    p.editorNote = {
        zh: '- 本篇为《樱花追忆篇》（原《学园篇》）的后续，已被官网删除。'
            + '</br>- 本篇为游戏1.1版本外传「轩辕篇」及1.2版本外传「蚩尤篇」（已加入编年史）的前置漫画。'
            + '</br>- 本篇大部分设定已废弃，但对于阅读编年史「轩辕篇」「蚩尤篇」「遗忘之人」等剧情仍有一定帮助。'
            + '</br>- <a href="https://www.bilibili.com/video/BV1Ms411W7As">1.1版本PV</a>　<a href="https://www.bilibili.com/video/BV1Fs411Y7Tn">1.2版本PV</a>'
        }
    p.bookCoverSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/book/' + bookNum + '/'
    p.chCoverSrcPrefix = 'https://comicstatic.bh3.com/new_static_v2/comic/chapter_cover/' + bookNum + '/'
    p.bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1003.jpg'
    p.numChapter = 8
    p.chTitles = [
        '第十五话 圣痕',
        '第十六话 广州，美食之都！',
        '第十七话 听说你是画漫画的',
        '第十八话 下海',
        '第十九话 救援',
        '第二十话 心魔',
        '第二十一话 诅咒',
        '第二十二话 新生',
    ]
    p.chPages = [
        27, 24, 22, 28, 26, 25, 27, 28
    ]
    let hiddenSrcPrefix = 'http://static-event.benghuai.com/ip_resources_new/comic/1/chapter/'
    p.hiddenPages = {
        0: {
            0: [
                hiddenSrcPrefix + '0017/0001.jpg',
                hiddenSrcPrefix + '0017/0002.jpg',
                hiddenSrcPrefix + '0017/0003.jpg',
                hiddenSrcPrefix + '0017/0004.jpg',
                hiddenSrcPrefix + '0017/0005.jpg',
                hiddenSrcPrefix + '0017/0006.jpg',
                hiddenSrcPrefix + '0017/0007.jpg',
                hiddenSrcPrefix + '0017/0008.jpg',
            ],
        },
        5: {
            25: [
                hiddenSrcPrefix + '0024/0001.jpg',
                hiddenSrcPrefix + '0024/0002.jpg',
                hiddenSrcPrefix + '0024/0003.jpg',
            ]
        }
    }
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
