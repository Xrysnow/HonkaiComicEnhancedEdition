(function () {
    let p = new ReaderParam()
    let bookNum = 1004
    p.bookIndex = bookNum
    p.bookTitle = '绀海篇'
    p.bookMode = 'rl'
    p.editorNote = {
        zh: '- <a href="https://detail.tmall.com/item.htm?id=589288225758">官方实体版漫画</a>'
            + '</br>- <a href="https://mp.weixin.qq.com/s/Cbdp36AcNEPy-VRWSxqa_A">对应的「崩坏教室」</a>'
            + '　<a href="https://mp.weixin.qq.com/s/4Boeb3_zPHMnfHGwVkbypg">相关设定1</a>'
            + '　<a href="https://mp.weixin.qq.com/s/rTa0jkSYoKjfMcjzy7oihA">相关设定2</a>'
            + '</br>- <a href="https://www.bilibili.com/video/BV1js41147GZ">漫画纪念PV</a>'
            + '</br>- <a href="https://www.bilibili.com/video/BV1Hs411h7py">希儿·芙乐艾角色印象PV</a>'
            + '　<a href="https://www.bilibili.com/video/av14220400">声优对谈</a>'
            + '</br>- 实体版对部分画面和台词做了额外修改。'
    }
    //完结纪念 崩坏学园2 https://mp.weixin.qq.com/s/puHxh6JKhIrW97Jl1zUoPQ
    //完结纪念 崩坏3 https://mp.weixin.qq.com/s/jiIHCmmJb9WlIarBCz7p2w
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
        '序章 少女与雪', //https://mp.weixin.qq.com/s/5oACufMLtMh5gOo6vZCIaA
        '第一话 孤儿院', //https://mp.weixin.qq.com/s/GYAQw5pgfg9Hvbe8iDa2MQ
        '第二话 泪', //https://mp.weixin.qq.com/s/A09fZm1lGn5vCQ7buiNUIg
        '第三话 银狼', //https://mp.weixin.qq.com/s/WSlwSQ6Ek8xFk3WLjn6QQA
        '第四话 恶魔', //https://mp.weixin.qq.com/s/roPbwp-Hk-gp69h-8YI74g
        '第五话 阶梯的复仇剧', //https://mp.weixin.qq.com/s/1neBmRHjEsIUB5bYXsOoGQ
        '第六话 实验', //https://mp.weixin.qq.com/s/4lQL33sbo-C2HeWmOHPnxQ
        '第七话 觉悟', //https://mp.weixin.qq.com/s/oCbjkmZkrg1afJuid0s37w
        '第八话 希儿', //https://mp.weixin.qq.com/s/sRcAMZ12fM5ifVJxzCov1w
        '第九话 决意', //https://mp.weixin.qq.com/s/uwuQ9Z4Qq-5aoS8LC8O37w
        '最终话 未来', //https://mp.weixin.qq.com/s/FRavSjy2bvuNsV5JU0k8lg
    ]
    p.chPages = [
        10, 19, 18, 19, 21, 15, 20, 19, 26, 17, 28
    ]
    p.bookModeBlank = {
        1: [12],
        2: [10],
        3: [1],
        9: [14],
    }
    p.addBookFirstBlank()
    p.bookModeBlank[8] = [3]
    p.bookModeBlank[10] = []
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
    p.bgmInfo = [
        [[-1, 1110, 98], [0, 0.1, 52]],
        [[98, 80, -1], [0, 28, 69]],
        [[14, 59, -1], [0, 35, 62]],
        [[59, -1], [0, 69]],
        [[105, 80, -1], [0, 19, 67]],
        [[80, 1374, -1], [0, 50, 81]],
        [[1374, 1110, -1], [0, 48, 81.5]],
        [[1110, 1335], [0, 48]],
        1335,
        1335,
        [[1335, -1], [0, 90]],
    ]
    p.bgmInfo2 = [
        [[-1, 1110, 98], [0, 1, 6]],
        [[98, 80, -1], [0, 6, 13]],
        [[14, 59], [0, 8]],
        [[59, -1], [0, 13]],
        [[105, 80], [0, 6]],
        [[80, 1374], [0, 8]],
        [[1374, 1110], [0, 10]],
        [[1110, 1335], [0, 10]],
        1335,
        1335,
        [[1335, -1], [0, 23]],
    ]
    p.addBgmLoopInfo(28, 5, 23, 1, 1, true)
    p.addBgmLoopInfo(105, 0, 69, 0.5, 1)
    p.addBgmLoopInfo(1335, 7, 169, 0.5, 0.5)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
