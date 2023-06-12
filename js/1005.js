(function () {
    let p = new ReaderParam()
    let bookNum = 1005
    p.bookIndex = bookNum
    p.bookTitle = '绯樱篇'
    p.bookMode = 'rl'
    p.editorNote = {
        zh: '- 本篇原名为《崩坏学园EX 绯樱篇》，为崩坏系列的第一篇连载漫画。'
            + '</br>- 本篇第一话于2月14日发布。'
            + '</br>- <a href="https://www.bilibili.com/video/BV1ds41127Kp">漫画纪念PV</a>'
            + '　<a href="https://mp.weixin.qq.com/s/mrebiT2kay127bBzklN3pQ">漫画预告</a>'
            + '　<a href="https://mp.weixin.qq.com/s/Y9PCqw7TOxnk3Gr1ax6cFA">设定补充</a>'
            + '</br>- <a href="https://mp.weixin.qq.com/s/opMlrjpjqZ9CINpKPd8sGg">官方魔改漫画</a>'
            + '　<a href="https://mp.weixin.qq.com/s/PCoFVe-fkapjTlJSeGduQQ">相关四格1</a>'
            + '　<a href="https://mp.weixin.qq.com/s/R5FekUy3ByVMrlEgTIULUw">相关四格2</a>'
            + '　<a href="https://mp.weixin.qq.com/s/KjIoJwA8xf63uZHX5Cl4Bw">相关贺图</a>'
            + '</br>- <a href="https://mp.weixin.qq.com/s/IHGU3RDjM-fT8B5LEeJzjQ">相关周边1</a>（已绝版）'
            + '　<a href="https://mp.weixin.qq.com/s/QmqPsCfG3OoEFHYa-BGpKQ">相关周边2</a>（已绝版）'
            + '</br>- 官方曾推出过<a href="https://mp.weixin.qq.com/s/ZLjfY3hjZEMvnDxw8ibqKw">实体版书籍</a>（非正式出版），已绝版。'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = prefix + 'book_cover/1005.jpg'
    p.numChapter = 8
    p.chTitles = [
        '第一话 邂逅', //https://mp.weixin.qq.com/s/hi7DQDOBIK5CoWtDGMuMgw
        '第二话 异变', //https://mp.weixin.qq.com/s/NT-QFSBMWWdEckPXGTvqNg
        '第三话 神祭', //https://mp.weixin.qq.com/s/9-dMAiN8jwIHoceCxORlZw
        '第四话 厄神', //https://mp.weixin.qq.com/s/8tA0D4ZfyeyHTs2bCq_5qg
        '第五话 凛', //https://mp.weixin.qq.com/s/7F3VmuMcu_VJvJLjqDmJJA
        '第六话 弑神', //https://mp.weixin.qq.com/s/Sp5yUKzRXevJqlG2_sjYZQ
        '第七话 樱', //https://mp.weixin.qq.com/s/GYQELLC0JCJQ-QgcBexL4g
        '第八话 卡莲',
    ]
    p.chPages = [
        16, 17, 14, 15, 20, 12, 12, 25
    ]
    p.bookModeBlank = {
        1: [0],
        2: [0],
        3: [0],
        6: [0],
        7: [0],
    }
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
        [[65, 1095], [0, 54]],
    ]
    p.bgmInfo2 = [
        1183,
        64,
        1291,
        1352,
        1183,
        [[1183, 65], [0, 5]],
        65,
        [[65, 1095], [0, 14]],
    ]
    p.addBgmLoopInfo(65, 51.5, 100, 1, 2, false)
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
