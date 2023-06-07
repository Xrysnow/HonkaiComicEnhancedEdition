(function () {
    let p = new ReaderParam()
    let bookNum = 1002
    p.bookIndex = bookNum
    p.bookTitle = '樱花追忆篇'
    p.bookMode = 'rl'
    p.editorNote = {
        zh: '- 本篇原名为《学园篇》，为《逃离长空篇》的后续。'
            + '</br>- 设定补充（与漫画同步更新）：<a href="https://mp.weixin.qq.com/s/eLHzrC8ztPV9jZ5-5k5s2Q">【1】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/Zy-9MaR4nn5QQx0Rv-nYdg">【2】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/GQXF3YLk1p2uG6rPUdD0yw">【3】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/--0mFqshUnvtX2uogdbZog">【4】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/CyZW7sVLRgvyLFcRG0lLLA">【5】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/_cFfNhqmC_ts7eBHeV10uw">【6】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/sMD9Jw_JDTGEQkWF_NDuEQ">【7】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/fY9pTDBOJlUO7vk1yvx31A">【8】</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1002.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/d7732a5f5d5d6124833c9653005203d9_9122773130294541052.png',
    ]
    p.numChapter = 8
    p.chTitles = [
        '第七话 琪亚娜最大的危机', //https://mp.weixin.qq.com/s/aqFGnw0pSTLRd1ibKg-NyQ
        '第八话 历史信标',
        '第九话 卡莲和琪亚娜', //https://mp.weixin.qq.com/s/tj1BfsnW8F2V-LLkQJV9GQ
        '第十话 此身为盾', //https://mp.weixin.qq.com/s/ply71sfyyY_ZmxVBfdINLg
        '第十一话 白骑士·月光', //https://mp.weixin.qq.com/s/am0q0bn1__15krUcJywQuA
        '第十二话 第四律者诞生？', //https://mp.weixin.qq.com/s/jzmUkbdg2LYL6DURUVbcTw
        '第十三话 跨越500年的重逢', //https://mp.weixin.qq.com/s/b-ZpeELhIcDIboR1W6fE7w
        '第十四话 愿樱花与你同在', //https://mp.weixin.qq.com/s/_yNZj4rFKX1gMy8MjOz15Q
    ]
    p.chPages = [
        15, 17, 17, 18, 23, 18, 18, 20
    ]
    p.bookModeBlank = {
        5: [6],
    }
    for (let i = 0; i < 8; i++) {
        if (i != 5) {
            p.bookModeBlank[i] = [1.02]
        }
    }
    p.addBookFirstBlank()
    let prefix2 = Util.getImgLegacySrcPrefix()
    let hiddenSrcPrefix = prefix2 + '1/chapter/'
    p.hiddenPages = {
        0: {
            1: [
                hiddenSrcPrefix + '0008/0001.jpg',
                hiddenSrcPrefix + '0008/0002.jpg',
            ],
            2: hiddenSrcPrefix + '0008/0004.jpg',
            4: hiddenSrcPrefix + '0008/0007.jpg',
            15: hiddenSrcPrefix + '0008/0019.jpg',
        },
        1: {
            1: [
                hiddenSrcPrefix + '0009/0001.jpg',
                hiddenSrcPrefix + '0009/0002.jpg',
            ],
            17: [
                hiddenSrcPrefix + '0009/0019.jpg',
                hiddenSrcPrefix + '0009/0020.jpg',
            ],
        },
        2: {
            1: [
                hiddenSrcPrefix + '0010/0001.jpg',
                hiddenSrcPrefix + '0010/0002.jpg',
            ],
            17: [
                hiddenSrcPrefix + '0010/0019.jpg',
                hiddenSrcPrefix + '0010/0020.jpg',
            ],
        },
        3: {
            1: [
                hiddenSrcPrefix + '0011/0001.jpg',
                hiddenSrcPrefix + '0011/0002.jpg',
            ],
            18: [
                hiddenSrcPrefix + '0011/0020.jpg',
                hiddenSrcPrefix + '0011/0021.jpg',
            ],
        },
        4: {
            1: [
                hiddenSrcPrefix + '0012/0001.jpg',
                hiddenSrcPrefix + '0012/0002.jpg',
            ],
            23: [
                hiddenSrcPrefix + '0012/0025.jpg',
                hiddenSrcPrefix + '0012/0026.jpg',
            ],
        },
        5: {
            1: [
                hiddenSrcPrefix + '0013/0001.jpg',
                hiddenSrcPrefix + '0013/0002.jpg',
            ],
            18: [
                hiddenSrcPrefix + '0013/0020.jpg',
                hiddenSrcPrefix + '0013/0021.jpg',
            ],
        },
        6: {
            1: [
                hiddenSrcPrefix + '0014/0001.jpg',
                hiddenSrcPrefix + '0014/0002.jpg',
            ],
            17: [
                hiddenSrcPrefix + '0014/0019.jpg',
                hiddenSrcPrefix + '0014/0020.jpg',
            ],
            18: [
                hiddenSrcPrefix + '0014/0022.jpg',
                hiddenSrcPrefix + '0014/0023.jpg',
                hiddenSrcPrefix + '0014/0024.jpg',
            ],
        },
        7: {
            1: [
                hiddenSrcPrefix + '0015/0001.jpg',
                hiddenSrcPrefix + '0015/0002.jpg',
            ],
            9: hiddenSrcPrefix + '0015/0011.jpg',
            20: [
                hiddenSrcPrefix + '0015/0023.jpg',
                hiddenSrcPrefix + '0015/0024.jpg',
            ],
        },
    }
    p.bgmInfo = [
        [[-1, 43], [0, 1]],
        [[43, 44, 45], [0, 23, 91]],
        45,
        [[46, 49], [0, 60]],
        [[49, 50, 1034], [0, 36, 77]],
        [[56, 52], [0, 91]],
        1183,
        [[54, 57, 55], [0, 47, 86]],
    ]
    p.bgmInfo2 = [
        [[-1, 43], [0, 1.01]],
        [[43, 44, 45], [0, 5, 17]],
        45,
        [[46, 49], [0, 11]],
        [[49, 50, 1034], [0, 9, 19]],
        [[56, 52], [0, 17]],
        1183,
        [[54, 57, 55], [0, 10, 18]],
    ]
    p.addBgmLoopInfo(49, 0, 53, 1, 1)
    p.addBgmLoopInfo(50, 0, 21.2, 0.5, 0.5)
    p.addBgmLoopInfo(54, 0, 33.8, 1, 1)
    p.addBgmLoopInfo(55, 3.5, 1e3, 0.5, 0.5)
    p.addBgmLoopInfo(1034, 1, 1e3, 0.5, 0.5)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
