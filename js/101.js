(function () {
    let p = new ReaderParam()
    let bookNum = 101
    p.bookIndex = bookNum
    p.bookTitle = '番外篇'
    p.bookDate = '2014-2016'
    p.bookDesc = {
        zh: '崩坏学园漫画短篇集，用漫画的形式将生在崩坏中的点点滴滴记录在画页上。邀请风格不同的画师太太们用不同的风格为您展示崩坏不一样的魅力',
    }
    p.editorNote = null
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
        '万圣节特别篇',
        //https://mp.weixin.qq.com/s/nnasTjorgv4aGctPHETCOA
        '三年樱',
        //https://mp.weixin.qq.com/s/DVAgQj9-KdoU_be9pbcp5Q
        '新春篇',
        '温泉篇（上）',
        '温泉篇（下）',
        //https://mp.weixin.qq.com/s/BY2PsvpGeZYJdzElLsyYhA
        '干物妹小布',
        //https://mp.weixin.qq.com/s/65HG79qC0HX2rp_xr_x7Qg
        '番外篇 崩坏联盟',
        //https://mp.weixin.qq.com/s/bEdrU3xLe5z4pu3d5JKu-w
        '愚人节企划~',
        //https://mp.weixin.qq.com/s/XXvdZWLeo3UEVcmIGx5yZA
        '崩坏猎人上篇',
        //https://mp.weixin.qq.com/s/yiCV02VkWbfJyMGxwdIYFg
        '崩坏猎人下篇',
    ]
    p.chPages = [
        21, 27, 6, 19, 12,
        17, 22, 8, 16, 15
    ]
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
