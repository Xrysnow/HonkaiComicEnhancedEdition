(function () {
    let pageNum = 1001
    let bookNum = 1001
    let bookDesc = {
        zh: '紧接着《崩坏学园2》的游戏剧情，2014年，在长空市中，发生了强烈的崩坏。琪亚娜，雷电芽衣，布洛妮娅三个少女在逃离长空市的过程中，遇到了天命组织的女武神，无量塔姬子...',
    }
    let bgSrc = 'https://comicstatic.bh3.com/new_static_v2/comic/book_cover/1001.jpg'
    let imgExtSrc = null
    let numChapter = 7
    let chTitles = [
        '序章 琪亚娜·出击',
        '第一话 崩坏、爆发',
        '第二话 雷鸣的魔女',
        '第三话 女武神出阵',
        '第四话 女王VS女王',
        '第五话 隙间',
        '第六话 新的旅程',
    ]
    let chPages = [
        29, 27, 22, 19, 18, 19, 21
    ]
    let hiddenPages = {
        1: {
            // 20: '../img/1001/0021.jpg',
            20: 'http://static-event.benghuai.com/ip_resources_new/comic/1/chapter/0002/0021.jpg',
        },
        4: {
            3: [
                'http://static-event.benghuai.com/ip_resources_new/comic/1/chapter/0005/0003.jpg',
                'http://static-event.benghuai.com/ip_resources_new/comic/1/chapter/0005/0004.jpg',
            ]
        },
        5: {
            9: 'http://static-event.benghuai.com/ip_resources_new/comic/1/chapter/0006/0010.jpg',
            19: 'http://static-event.benghuai.com/ip_resources_new/comic/1/chapter/0006/0021.jpg',
        },
    }
    let bgmVolume = null
    let bgmInfo = null
    let bgmExtId = null
    let i18nString = null
    let i18nHtml = null
    let r = new Reader(pageNum, bookNum, bookDesc, bgSrc, imgExtSrc, numChapter, chTitles, chPages, hiddenPages,
        bgmVolume, bgmInfo, bgmExtId, i18nString, i18nHtml)
    // console.log(r)
})();
