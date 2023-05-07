(function () {
    let p = new ReaderParam()
    let bookNum = 1004
    p.bookIndex = bookNum
    p.bookTitle = '绀海篇'
    p.bookDate = '2016'
    p.bookDesc = {
        zh: '故事发生在《崩坏学园2》之前，在寒冷的俄罗斯雪原中，被称为乌拉尔银狼的杀手布洛妮娅和平凡的少女希儿相遇了，等待她们的，却是成为崩坏能实验体的命运...',
    }
    p.editorNote = {
        zh: '- <a href="https://detail.tmall.com/item.htm?id=589288225758">官方实体版漫画</a>'
            + '</br>- 设定补充：<a href="https://mp.weixin.qq.com/s/Cbdp36AcNEPy-VRWSxqa_A">【1】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/4Boeb3_zPHMnfHGwVkbypg">【2】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/rTa0jkSYoKjfMcjzy7oihA">【3】</a>'
            + '</br>- <a href="https://www.bilibili.com/video/BV1js41147GZ">漫画纪念PV</a>'
            + '</br>- <a href="https://www.bilibili.com/video/BV1Hs411h7py">希儿·芙乐艾角色印象PV</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1004.jpg',
        'https://uploadstatic.mihoyo.com/contentweb/20191114/2019111412080952620.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/36fc4e32f72fe1c0f99e2c0ae65b882d_1585232059709414330.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/7a729249b8037edb3934998ba72ee326_32274073509173115.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/81367e4a712348b6caafb464f55c496a_4828421335981953392.png',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/73514954/4e6285984ea19f9b7d7bc129547affa8_6584463630296038598.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/73514954/ee0330f2c0c9850096bfec4c45bbf279_8223883241695453807.jpg',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/04/16/75216984/f7aea16826e1cfc893c72a1b1fbd3d5f_8816340498035010472.jpg',
    ]
    p.numChapter = 11
    p.chTitles = [
        '序章 少女与雪',
        '第一话 孤儿院',
        '第二话 泪',
        '第三话 银狼',
        '第四话 恶魔',
        '第五话 阶梯的复仇剧',
        '第六话 实验',
        '第七话 觉悟',
        '第八话 希儿',
        '第九话 决意',
        '最终话 未来',
    ]
    p.chPages = [
        10, 19, 18, 19, 21, 15, 20, 19, 26, 17, 28
    ]
    let prefix2 = Util.getImgLegacySrcPrefix()
    let hiddenSrcPrefix = prefix2 + '1/chapter/'
    p.hiddenPages = {
        1: {
            18: hiddenSrcPrefix + '0028/0019.jpg',
        },
        2: {
            0: hiddenSrcPrefix + '0029/0001.jpg',
            4: hiddenSrcPrefix + '0029/0006.jpg',
            17: hiddenSrcPrefix + '0029/0020.jpg',
        },
        3: {
            18: [
                hiddenSrcPrefix + '0030/0019.jpg',
                hiddenSrcPrefix + '0030/0020.jpg',
            ],
        },
        4: {
            18: [
                hiddenSrcPrefix + '0031/0019.jpg',
                hiddenSrcPrefix + '0031/0020.jpg',
            ],
        },
        5: {
            15: hiddenSrcPrefix + '0032/0016.jpg',
        },
        6: {
            19: hiddenSrcPrefix + '0033/0020.jpg',
        },
        7: {
            18: hiddenSrcPrefix + '0034/0019.jpg',
        },
        10: {
            0: hiddenSrcPrefix + '0037/0001.jpg',
            10: hiddenSrcPrefix + '0037/0012.jpg',
        },
    }
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
