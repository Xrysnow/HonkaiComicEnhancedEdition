(function () {
    let p = new ReaderParam()
    let bookNum = 1001
    p.bookIndex = bookNum
    p.bookTitle = '逃离长空篇'
    p.bookMode = 'rl'
    p.editorNote = {
        zh: '- 本篇为主线漫画（原“崩坏3rd”系列漫画）的第一篇。'
            + '</br>- 主线漫画与游戏《崩坏3》的关系详见【指南-剧情关系】和【指南-相关信息】。'
            + '</br>- 设定补充（与漫画同步更新）：<a href="https://mp.weixin.qq.com/s/SAZmeWciMTK0V14LH4_bnQ">【1】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/fdpFTc3s2myyXsLiu73GlQ">【2】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/liFIK1YtL8jTwo6AcwvE7w">【3】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/A3sgdAN1zIvtkM7n_3D6wg">【4】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/irPz2ZXgruq2mFSdXcfJUA">【5】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/1xElr2v1kdKK76ZqX5p_aA">【6】</a>'
            + '　<a href="https://mp.weixin.qq.com/s/PgsCQlGKaO00caNFPj1GOw">【7】</a>'
            + '</br>- <a href="https://www.bilibili.com/video/BV1Bs411U7SU">漫画宣传PV</a>'
            + '　<a href="https://www.bilibili.com/video/av6022195">单行本纪念PV</a>'
            + '　<a href="https://mp.weixin.qq.com/s/CWW1vFfiS199ojq0411yJA">漫画预告1</a>'
            + '　<a href="https://mp.weixin.qq.com/s/dv2LyXSDEU22Lfz0ViwCnQ">漫画预告2</a>'
            + '</br>- 官方曾推出过序章实体版作为非卖品。'
            + '</br>- 官方曾推出过实体版书籍，已绝版。'
            + '</br>- <a href="https://www.bilibili.com/video/BV1Ws411t734">游戏公测PV</a>　<a href="https://www.bilibili.com/video/BV14s411r7Rh">开场CG</a>'
            + '</br>- <a href="https://www.bilibili.com/video/BV1gs411r7QX">布洛妮娅角色PV</a>'
            + '　<a href="https://www.bilibili.com/video/BV1zs411t7ma">芽衣角色PV</a>'
            + '　<a href="https://www.bilibili.com/video/BV1ss411t7tt">琪亚娜角色PV</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1001.jpg',
        'https://uploadstatic.mihoyo.com/contentweb/20191114/2019111410133010929.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/2ca62812953cf9b4ff92685b3fdbce7d_5611216075297416836.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/07f7b5b38fd7b1be216d2bb1e5488286_611592156619703927.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/f98266285fc36b06dd0d39b5cbc6bc64_3928301468262494310.png',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/b92183b0d987cfc9a74e0b68a9fa46c7_7544078517312654810.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/70abe1f518045f37af2d7600bff60dfb_9109836804485455093.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/9e9b576b7ea0398ec6f9eaf9f627e01a_7066770841395571896.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/b891b1b50626819f925a4660f881d74f_6342417273168036510.jpg',
    ]
    p.numChapter = 7
    p.chTitles = [
        '序章 琪亚娜·出击', //https://mp.weixin.qq.com/s/hUyuvEBI71lWttNagV-3_Q
        '第一话 崩坏、爆发', //https://mp.weixin.qq.com/s/NceBGNg-sFEBR86JjaJbqw
        '第二话 雷鸣的魔女', //https://mp.weixin.qq.com/s/epumDVpG3Fri1NNC1ZrMHw
        '第三话 女武神出阵', //https://mp.weixin.qq.com/s/vMOGRX3gDklARUIb3Ga-VQ
        '第四话 女王VS女王', //https://mp.weixin.qq.com/s/A3qn57QlswuiH8IqTMMJeg
        '第五话 隙间', //https://mp.weixin.qq.com/s/ajrOz_-zOcjU9gBeY7sYRQ
        '第六话 新的旅程', //https://mp.weixin.qq.com/s/OBBDFCkgzG2qNnrHHU5a0Q
    ]
    p.chPages = [
        29, 27, 22, 19, 18, 19, 21
    ]
    p.addBookFirstBlank()
    p.bookModeBlank[6] = []
    let prefix2 = Util.getImgLegacySrcPrefix()
    let hiddenSrcPrefix = prefix2 + '1/chapter/'
    p.hiddenPages = {
        1: {
            20: hiddenSrcPrefix + '0002/0021.jpg',
        },
        4: {
            3: [
                hiddenSrcPrefix + '0005/0003.jpg',
                hiddenSrcPrefix + '0005/0004.jpg',
            ]
        },
        5: {
            9: hiddenSrcPrefix + '0006/0010.jpg',
            19: hiddenSrcPrefix + '0006/0021.jpg',
        },
    }
    p.bgmInfo = [
        [[-1, 33, 34], [0, 1, 21]],
        [[35, 36], [0, 66]],
        [[37, 39, 38], [0, 36, 56]],
        [[40, 29], [0, 45]],
        [[29, 6], [0, 73]],
        [[43, 41, 43], [0, 27, 60]],
        [[63, 999], [0, 83]],
    ]
    p.bgmInfo2 = [
        [[-1, 33, 34], [0, 2, 8]],
        [[35, 36], [0, 18]],
        [[37, 39, 38], [0, 9, 13]],
        [[40, 29], [0, 11]],
        [[29, 6], [0, 15]],
        [[43, 41, 43], [0, 6, 12]],
        [[63, 999], [0, 17]],
    ]
    p.addBgmLoopInfo(99, 1, 25.2, 2, 3, false)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
