let RelationData = {
    comic1: [
        1001,
        1002,
        1003,
        1006,
        1008,
        1009,
        1012,
        1018,
        1019,
        1021,
        1023,
    ],
    comic2: [
        1005,
        101,
        102,
        1004,
        1007,
        1010,
        1013,
        1014,
        1015,
        1016,
        1017,
        1020,
        1022,
        1024,
    ],
    game1: [
        ['主线第1章', [2016, 10]],
        ['主线第5章', [2017, 7]],
        ['主线第7章', [2018, 1]],
        ['主线第10章', [2019, 3]],
        ['主线第13章', [2019, 10]],
        ['主线第15章', [2020, 3]],
        ['主线第20章', [2020, 10]],
        ['主线第25章间章', [2021, 8]],
        ['主线第26章', [2021, 9]],
    ],
    game2: [
        ['樱色轮回', [2017, 4]],
        ['2.4版本活动', [2018, 7]],
        ['逐梦双星', [2019, 4]],
        ['后崩坏书', [2020, 3]],
        ['4.1版本活动', [2020, 7]],
        ['4.6版本活动', [2021, 2]],
        ['后崩坏书第二章', [2021, 12]],
    ],
    novel: [
        ['逆熵', [[2017, 8], [2018, 7]]],
        ['幽兰黛尔', [[2018, 11], [2020, 3]]],
        ['神州折剑录', [[2019, 11], -1]],
    ],
    anime: [
        ['女武神的餐桌', [[2019, 6], [2019, 8]]],
        ['女武神的餐桌第二季', [[2020, 7], [2020, 9]]],
        ['人偶学园', [[2021, 7], [2021, 9]]],
    ],
    edges: [
        [1005, 1002],
        [1005, 1009],
        [1001, 1002],
        [1001, 101],
        [1001, ['game1', 0]],
        [1002, 1003],
        [1002, 1007],
        [1003, 1006],
        [102, ['game1', 0]],
        [1004, ['game1', 3]],
        [1006, 1008],
        [1006, ['game1', 1], { lineStyle: { curveness: 0.3 } }],
        [1007, ['game2', 0]],
        [1008, ['game1', 2], { lineStyle: { curveness: 0.2 } }],
        [1009, ['game1', 8], { lineStyle: { curveness: -0.6 } }],
        [1010, 1009],
        [1010, 1012, { lineStyle: { curveness: 0.2 } }],
        [1010, ['game1', 6]],
        [1012, ['game1', 2]],
        [1013, ['anime', 0]],
        [1014, ['game2', 1]],
        [1015, 1016, { lineStyle: { curveness: -1 } }],
        [1015, ['game2', 2]],
        [1016, ['game2', 4]],
        [1017, ['game1', 4]],
        [1018, ['game1', 4], { lineStyle: { curveness: -0.15 } }],
        [1019, ['game1', 6], { lineStyle: { curveness: -0.3 } }],
        [1020, ['anime', 2]],
        [1021, ['game1', 5]],
        [1022, ['game1', 6]],
        [1023, ['game2', 3]],
        [1023, ['game1', 7], { lineStyle: { curveness: 0.15 } }],
        [1024, ['game2', 5]],
        [['game2', 3], ['game2', 6], { lineStyle: { curveness: 0.3 } }],
        [['novel', 0], 1012],
        [['novel', 1], 1018],
        [['novel', 1], ['game1', 8], { lineStyle: { curveness: -0.1 } }],
        [['novel', 2], ['game1', 6], { lineStyle: { curveness: 0.5 } }],
        [['anime', 0], ['anime', 1]],
    ],
};
let IndexScript = function () {
    function SetupStyle0(comicList) {
        for (let i = 0; i < ComicData.length; i++) {
            const data = ComicData[i]
            let roleLine = document.createElement('div')
            roleLine.className = 'role-line'
            //
            let item = document.createElement('div')
            item.className = 'comic-item'
            let title = document.createElement('div')
            title.className = 'comic-title'
            //
            let title1 = document.createElement('div')
            let title2 = document.createElement('div')
            title2.innerText = data.date
            //
            if (!data.deprecated) {
                title1.innerText = data.title + '/' + data.type
                title.appendChild(title1)
                title.appendChild(roleLine)
                title.appendChild(title2)
                item.appendChild(title)
            } else {
                item.classList.add('comic-item-deprecated')
                let input = document.createElement('input')
                input.type = 'checkbox'
                input.id = 'check-' + data.id
                input.className = 'deprecated-check'
                //
                let label = document.createElement('label')
                label.setAttribute('for', input.id)
                //
                let mark = document.createElement('div')
                mark.className = 'comic-title-check'
                mark.innerText = '▶'
                //
                title1.appendChild(mark)
                title1.innerHTML += ' ' + data.title + '/' + data.type
                title.appendChild(title1)
                title.appendChild(roleLine)
                title.appendChild(title2)
                label.appendChild(title)
                //
                item.append(input)
                item.append(label)
            }
            //
            let a = document.createElement('a')
            a.href = data.page
            let brief = document.createElement('div')
            brief.className = 'comic-brief'
            let cover = document.createElement('div')
            cover.className = 'comic-cover'
            let img = document.createElement('img')
            img.src = data.cover
            let description = document.createElement('div')
            description.className = 'comic-description'
            description.innerText = data.description
            //
            cover.appendChild(img)
            brief.appendChild(cover)
            brief.appendChild(description)
            a.append(brief)
            item.appendChild(a)
            //
            comicList.append(item)
        }
    }
    function SetupStyle1(comicList) {
        comicList.classList.add('style-1')
        for (let i = 0; i < ComicData.length; i++) {
            const data = ComicData[i]
            let item = document.createElement('div')
            item.className = 'comic-item-1'
            let a = document.createElement('a')
            a.href = data.page
            let brief = document.createElement('div')
            brief.className = 'comic-brief-1'
            let cover = document.createElement('div')
            cover.className = 'comic-cover-1'
            cover.style.backgroundImage = 'url(' + data.cover + ')'
            //
            let title = document.createElement('div')
            title.className = 'comic-title-1'
            let progressWrapper = document.createElement('div')
            progressWrapper.className = 'comic-title-progress-wrapper'
            let progress = document.createElement('div')
            progress.className = 'comic-title-progress'
            let bar = document.createElement('div')
            bar.className = 'comic-title-progress-bar'
            let text = document.createElement('div')
            text.className = 'comic-title-progress-text'
            text.innerText = '0%'
            let main = document.createElement('div')
            main.className = 'comic-title-main'
            main.innerText = data.title
            let type = document.createElement('div')
            type.className = 'comic-title-type'
            type.innerText = data.type
            let date = document.createElement('div')
            date.className = 'comic-title-date'
            if (data.date.length > 1 && data.date[0][0] != data.date[1][0]) {
                date.innerText = data.date[0][0] + '-' + data.date[1][0]
            } else {
                date.innerText = data.date[0][0]
            }
            //
            progress.appendChild(bar)
            progress.appendChild(text)
            progressWrapper.appendChild(progress)
            title.appendChild(progressWrapper)
            title.appendChild(main)
            title.appendChild(type)
            title.appendChild(date)
            //
            brief.appendChild(cover)
            brief.appendChild(title)
            a.appendChild(brief)
            item.appendChild(a)
            //
            if (data.deprecated) {
                item.classList.add('comic-item-deprecated-1')
            }
            let p = Settings.getBookProgress(data.id)
            if (p) {
                bar.style.setProperty('--precent', p.toString())
                text.innerText = p + '%'
            } else {
                bar.style.setProperty('--precent', '0')
            }
            //
            comicList.append(item)
        }
        for (let i = 0; i < 20; i++) {
            let obj_i = document.createElement('i')
            comicList.appendChild(obj_i)
        }
    }
    function InitIndex(style) {
        let container = document.getElementsByClassName('index-container')[0]
        let comicList = container.getElementsByClassName('comic-list')[0]
        if (!style) {
            SetupStyle0(comicList)
        } else if (style == 1) {
            SetupStyle1(comicList)
        }
    }
    InitIndex(1)
};

try {
    IndexScriptEx()
} catch (e) {
    IndexScript()
}
