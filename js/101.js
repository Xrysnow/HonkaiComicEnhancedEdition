(function () {
    let p = new ReaderParam()
    let bookNum = 101
    p.bookIndex = bookNum
    p.bookTitle = '番外篇'
    p.bookMode = 'rl'
    p.editorNote = {
        zh: '- 本篇收录于<a href="http://event.mihoyo.com/ip_product/list.php?type=comic&bookid=3">【旧版IP站】</a>，其中「新春篇」为“崩坏学园EX”系列，从「温泉篇（上）」开始为“《崩坏3rd》番外篇”系列，与主线漫画穿插更新。'
            + '</br>- 由于前2话不属于系列漫画，故未纳入更新时间中（最早为2014年11月）。'
            + '</br>- 微信发布页：'
            + '<a href="https://mp.weixin.qq.com/s/mYfBTRGtbldde7q4Q2kFbA">【1】</a>'
            + ' <a href="https://mp.weixin.qq.com/s/nnasTjorgv4aGctPHETCOA">【2】</a>'
            + ' <a href="https://mp.weixin.qq.com/s/DVAgQj9-KdoU_be9pbcp5Q">【3】</a>'
            + ' <a href="https://mp.weixin.qq.com/s/3dzu1Lxu4FPcaf-dvGAWtA">【4】</a>'
            + ' <a href="https://mp.weixin.qq.com/s/-Vyep3vhLzWZod9bVmW96A">【5】</a>'
            + ' <a href="https://mp.weixin.qq.com/s/BY2PsvpGeZYJdzElLsyYhA">【6】</a>'
            + ' <a href="https://mp.weixin.qq.com/s/65HG79qC0HX2rp_xr_x7Qg">【7】</a>'
            + ' <a href="https://mp.weixin.qq.com/s/bEdrU3xLe5z4pu3d5JKu-w">【8】</a>'
            + ' <a href="https://mp.weixin.qq.com/s/XXvdZWLeo3UEVcmIGx5yZA">【9】</a>'
            + ' <a href="https://mp.weixin.qq.com/s/yicv02VkWbfJyMGxwdIYFg">【10】</a>'
    }
    let prefix = Util.getImgSrcPrefix()
    let prefix2 = Util.getImgLegacySrcPrefix()
    p.bookCoverSrc = prefix2 + '3/cover/avatar.jpg'
    p.imgSrcPrefix = prefix2 + '3/chapter/'
    p.chCoverSrcPrefix = ''
    p.bgSrc = p.bookCoverSrc
    p.bookCoverSrc
    p.numChapter = 10
    p.chTitles = [
        //https://mp.weixin.qq.com/s/mYfBTRGtbldde7q4Q2kFbA
        //2014-11-10
        '万圣节特别篇',
        //https://mp.weixin.qq.com/s/nnasTjorgv4aGctPHETCOA
        //2014-12-19
        '三年樱',
        //https://mp.weixin.qq.com/s/DVAgQj9-KdoU_be9pbcp5Q
        //2015-02-18
        '新春篇',
        //https://mp.weixin.qq.com/s/3dzu1Lxu4FPcaf-dvGAWtA
        //2015-09-25
        '温泉篇（上）',
        //https://mp.weixin.qq.com/s/-Vyep3vhLzWZod9bVmW96A
        //2015-10-03
        '温泉篇（下）',
        //https://mp.weixin.qq.com/s/BY2PsvpGeZYJdzElLsyYhA
        //2015-11-27
        '干物妹小布',
        //https://mp.weixin.qq.com/s/65HG79qC0HX2rp_xr_x7Qg
        //2016-02-12
        '番外篇 崩坏联盟',
        //https://mp.weixin.qq.com/s/bEdrU3xLe5z4pu3d5JKu-w
        //2016-04-01
        '愚人节企划~',
        //https://mp.weixin.qq.com/s/XXvdZWLeo3UEVcmIGx5yZA
        //2016-07-01
        '崩坏猎人上篇',
        //https://mp.weixin.qq.com/s/yicv02VkWbfJyMGxwdIYFg
        //2016-07-08
        '崩坏猎人下篇',
    ]
    p.chPages = [
        21, 27, 6, 19, 12,
        17, 22, 8, 16, 14
    ]
    p.bookModeBlank = {
        5: [0],
        6: [0],
        9: [2],
    }
    p.fnGetImgSrc = function (i, n) {
        let x1 = '0'.repeat(4 - i.toString().length) + i.toString()
        let x2 = '0'.repeat(4 - n.toString().length) + n.toString()
        return p.imgSrcPrefix + x1 + '/' + x2 + '.jpg'
    }
    p.fnGetChapterCoverSrc = function (i) {
        return prefix + 'chapter_cover/1003/3.jpg'
    }
    p.hiddenPages = null
    p.bgmVolume = null
    p.bgmInfo = null
    p.bgmExtId = null
    p.i18nString = null
    p.i18nHtml = null
    let r = new Reader(p)
})();
