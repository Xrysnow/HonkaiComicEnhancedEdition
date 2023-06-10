(function () {
    let p = new ReaderParam()
    let bookNum = 1013
    p.bookIndex = bookNum
    p.bookTitle = '女武神的餐桌'
    p.editorNote = {
        zh: '- <a href="https://www.bilibili.com/bangumi/play/ep275898">同名动画 第一季</a>'
            + '</br>- <a href="https://www.bilibili.com/bangumi/play/ss33688">同名动画 第二季</a>'
            + '</br>- 对应的「崩坏美食特辑」：<a href="https://mp.weixin.qq.com/s/42P8pkbyMPbnM5_x2GvQYQ">【3】</a>'
            +'　<a href="https://mp.weixin.qq.com/s/zb-TySbAvgknbnSZPuamYQ">【4】</a>'
            +'　<a href="https://mp.weixin.qq.com/s/frkOAwyfehKvcASm5C8Q2A">【5】</a>'
            +'　<a href="https://mp.weixin.qq.com/s/YZsS0MhzSR--qFXM49na7w">【6】</a>'
            +'　<a href="https://mp.weixin.qq.com/s/Bed4baNkIYs0Uxp_RfQmwg">【7】</a>'
            +'　<a href="https://mp.weixin.qq.com/s/vehO4G6UplXQ-6GtKGO34Q">【新春番外篇】</a>'
            +'　<a href="https://mp.weixin.qq.com/s/Qiraqvbl96kkfTzLhG8rLw">【8】</a>'
            +'　<a href="https://mp.weixin.qq.com/s/a7v7kllxhTq0GMEcipg8Lg">【9】</a>'
            +'　<a href="https://mp.weixin.qq.com/s/IrpZU0pwfYtdu_eNqTBkDQ">【10】</a>'
            +'　<a href="https://mp.weixin.qq.com/s/C3EO6AuRG00GWvVVI0y3XA">【11】</a>'
            +'　<a href="https://mp.weixin.qq.com/s/KBT-7m_w0Bqh72OjA7WTtQ">【12】</a>'
            +'　<a href="https://mp.weixin.qq.com/s/6IbS2cBrjIn_Vuu4-rC5nA">【13】</a>'
            +'　<a href="https://mp.weixin.qq.com/s/MSdySmgvtarV9a9tB2Ax9Q">【14】</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    p.bookCoverSrc = prefix + 'book_cover/' + bookNum + '.jpg'
    p.imgSrcPrefix = prefix + 'book/' + bookNum + '/'
    p.chCoverSrcPrefix = prefix + 'chapter_cover/' + bookNum + '/'
    p.bgSrc = [
        prefix + 'book_cover/1013.jpg',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/03/24/50494840/013ee2c371a78dbc289a74572dde12f7_4519334787570761299.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/731a3203a67e95375ba51c3fcc425592_3040426686874320482.png',
        // 新春贺图
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/03/24/50494840/f9658226740874a9c6e4020d9fdc8a24_6975264297955951018.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/76361817/aa119050b142df881e84221ea4a750f8_229820602736518874.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/76361817/5adde343dacdce876f542adc58b5ed5e_4048398920103209138.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/10/76361817/edb8c7505d81c5ccd0b0a5d4d28cbb50_981299749155818277.jpg',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/03/23/50494840/4857a32d3120308810c083991e4e4162_8671346900036034360.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/03/23/50494840/330fa09d745f56a6c9cb29e7ff6624d4_7065024987457631116.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/03/23/50494840/df2a626c8105c5a670bd2ce2616b065a_3006252665454885770.png',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2021/11/17/50494840/1cb394e1a43587a6719eb1980c47545c_1875295609434467151.jpg',
        // 女武神的餐厅
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/03/23/75216984/474d0907b9e1b2d7c5af60abc8ddd99e_1409416198354537071.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/03/23/75216984/30cd055b027eec99cd2e5e10cb222070_1156673507810228893.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/03/23/75216984/47ef3f77f92c00531173ed93d1807883_6549464055160767071.png',
        'https://uploadstatic.mihoyo.com/bh3-wiki/2022/03/23/75216984/51025a3575b5ceefc7c56492904af947_2105027172881010891.png',
        //
        'https://uploadstatic.mihoyo.com/bh3-wiki/2023/01/23/75216984/052df7de1266fee203687d7af5054a24_3129754573725950929.png',
    ]
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
    p.bgmInfo = [
        16, 16, 92, 16, 90,
        91, 16, 16, 1183, 81,
        77, [[16, 77], [0, 26]], 16, 77, 81,
        81,
    ]
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
