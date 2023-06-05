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
        ['3.7版本活动', [2020, 1]],
        ['卡莲幻想VII', [2017, 11]],
        ['轩辕篇', [2016, 11]],
        ['蚩尤篇', [2017, 1]],
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
        [1005, 1007, { lineStyle: { curveness: 0.25 } }],
        [1005, 1009, { lineStyle: { curveness: -0.05 } }],
        [1001, 1002],
        [1001, 101],
        [1001, ['game1', 0]],
        [1002, 1003],
        [1002, 1007],
        [1003, 1006],
        [1003, ['game2', 9], { lineStyle: { curveness: 0.2 } }],
        [102, ['game1', 0]],
        [1004, ['game1', 3], { lineStyle: { curveness: 0.15 } }],
        [1006, 1008],
        [1006, ['game1', 1], { lineStyle: { curveness: 0.3 } }],
        [1007, ['game2', 0]],
        [1008, ['game1', 2], { lineStyle: { curveness: 0.2 } }],
        [1009, ['game2', 8]],
        [1009, ['game1', 8], { lineStyle: { curveness: -0.6 } }],
        [1010, 1009],
        [1010, 1012, { lineStyle: { curveness: 0.2 } }],
        [1010, ['game1', 6]],
        [1012, ['game1', 2]],
        [1013, ['anime', 0]],
        [1014, ['game2', 1]],
        [1015, 1016, { lineStyle: { curveness: -1 } }],
        [1015, ['game2', 2], { lineStyle: { curveness: -0.05 } }],
        [1016, ['game2', 4], { lineStyle: { curveness: 0.1 } }],
        [1017, ['game1', 4]],
        [1018, 1021],
        [1018, ['game1', 4], { lineStyle: { curveness: 0.2 } }],
        [1019, ['game1', 6], { lineStyle: { curveness: -0.3 } }],
        [1019, ['game2', 7], { lineStyle: { curveness: 0.1 } }],
        [1020, ['anime', 2]],
        [1021, ['game1', 5]],
        [1022, ['game1', 6]],
        [1023, ['game1', 7], { lineStyle: { curveness: 0.1 } }],
        [1024, ['game2', 5]],
        [['game2', 3], 1023, { lineStyle: { curveness: 0.05 } }],
        [['game2', 3], ['game2', 6], { lineStyle: { curveness: 0.3 } }],
        [['game2', 9], ['game2', 10], { lineStyle: { curveness: 1 } }],
        [['novel', 0], 1012, { lineStyle: { curveness: -0.05 } }],
        [['novel', 0], ['game1', 2], { lineStyle: { curveness: 0.35 } }],
        [['novel', 1], 1018, { lineStyle: { curveness: -0.35 } }],
        [['novel', 1], ['game1', 8], { lineStyle: { curveness: -0.03 } }],
        [['novel', 2], ['game1', 6], { lineStyle: { curveness: 0.5 } }],
        [['anime', 0], ['anime', 1]],
    ],
};
let SetMenuConfig = function () {
    // gallery width
    const width_setter = document.getElementById('menu-config-width')
    width_setter.onchange = function () {
        const value = width_setter.value
        Settings.setGalleryWidth(value)
    }
    let lastWidth = Settings.getGalleryWidth()
    if (!isNaN(lastWidth)) {
        width_setter.value = lastWidth
        width_setter.onchange()
    }
    // background color
    const bg_select = document.getElementById('menu-config-bg')
    bg_select.onchange = function () {
        Settings.setBgColor(bg_select.selectedIndex)
    }
    let lastBgColor = Settings.getBgColor()
    if (!isNaN(lastBgColor)) {
        bg_select.selectedIndex = Number(lastBgColor)
        bg_select.onchange()
    }
    // bgm switch
    const bgm_switch = document.getElementById('menu-config-bgm-switch')
    bgm_switch.onchange = function () {
        Settings.setBgmEnabled(Number(bgm_switch.checked))
    }
    let lastBGMEnabled = Settings.getBgmEnabled()
    if (lastBGMEnabled == 0) {
        bgm_switch.checked = false
        bgm_switch.onchange()
    }
    // bgm volume
    const volume_setter = document.getElementById('menu-config-bgm-volume')
    volume_setter.onchange = function () {
        Settings.setBgmVolume(volume_setter.value)
    }
    let lastVolume = Settings.getBgmVolume()
    if (!isNaN(lastVolume) && 0 <= lastVolume && lastVolume <= 100) {
        volume_setter.value = lastVolume
        volume_setter.onchange()
    }
    // voice volume
    const voice_setter = document.getElementById('menu-config-voice-volume')
    voice_setter.onchange = function () {
        Settings.setVoiceVolume(voice_setter.value)
    }
    let lastVoiceVolume = Settings.getVoiceVolume()
    if (!isNaN(lastVoiceVolume) && 0 <= lastVoiceVolume && lastVoiceVolume <= 100) {
        voice_setter.value = lastVoiceVolume
        voice_setter.onchange()
    }
    // clear data
    const clear_button = document.getElementById('config-clear-button')
    clear_button.onclick = function () {
        Settings.clearStorage()
        window.location.reload()
    }
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
            let coverWrapper = document.createElement('div')
            coverWrapper.className = 'comic-cover-wrapper-1'
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
                let end = data.date[1][0]
                if (end == -1) {
                    end = '现在'
                }
                date.innerText = data.date[0][0] + '-' + end
            } else {
                date.innerText = data.date[0][0]
            }
            //
            if (200 < data.id && data.id < 300) {
                a.target = '_blank'
            } else {
                progress.appendChild(bar)
                progress.appendChild(text)
                progressWrapper.appendChild(progress)
                title.appendChild(progressWrapper)
            }
            title.appendChild(main)
            title.appendChild(type)
            title.appendChild(date)
            //
            coverWrapper.appendChild(cover)
            brief.appendChild(coverWrapper)
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
    //
    function SetupChart1() {
        let target = document.getElementById('chart-relation')
        let chart = echarts.init(target)
        let symbol = 'circle'
        let symbolSize = 40
        let hscale = 500
        let colors = {
            comic: '#5470c6',
            game: '#c55a11',
            novel: '#548235',
            anime: '#f4558f',
        }
        let data = []
        let getComic = function (list) {
            let result = []
            for (let i = 0; i < list.length; i++) {
                for (let j = 0; j < ComicData.length; j++) {
                    const e = ComicData[j]
                    if (e.id == list[i]) {
                        result.push(e)
                        break
                    }
                }
            }
            return result
        }
        let pushComic = function (list, x) {
            const left = [1010, 1004, 1016, 1019, 1008, 101]
            const right = [1007, 102, 1015, 1021, 1009, 1005]
            for (let i = 0; i < list.length; i++) {
                const e = list[i]
                let year = e.date[0][0]
                let month = e.date[0][1]
                let factor = year - 2015 + (month - 1) / 12
                let y = factor * hscale
                let xx = x
                if (left.includes(e.id)) {
                    xx -= 60
                } else if (right.includes(e.id)) {
                    xx += 60
                }
                let title = e.title + '\n' + year + '.' + month
                if (e.date[1]) {
                    title += '-\n' + e.date[1][0] + '.' + e.date[1][1]
                }
                data.push({
                    name: 'NodeComic' + e.id,
                    x: xx, y: y,
                    symbol: symbol,
                    symbolKeepAspect: true,
                    value: title,
                    itemStyle: { color: colors.comic, },
                })
            }
        }
        let comic1 = getComic(RelationData.comic1)
        let comic2 = getComic(RelationData.comic2)
        pushComic(comic1, 0)
        pushComic(comic2, 300)
        //
        let moveLeft = ['主线第26章', '3.7版本活动', '轩辕篇']
        let moveRight = ['主线第25章间章', '后崩坏书', '蚩尤篇']
        let pushGame = function (list, x) {
            for (let i = 0; i < list.length; i++) {
                const e = list[i]
                let year = e[1][0]
                let month = e[1][1]
                let factor = year - 2015 + (month - 1) / 12
                let y = factor * hscale
                let title = e[0] + '\n' + year + '.' + month
                let xx = x
                if (moveRight.includes(e[0])) {
                    xx += 60
                } else if (moveLeft.includes(e[0])) {
                    xx -= 60
                }
                data.push({
                    name: 'NodeOthers' + (x + i),
                    x: xx, y: y,
                    symbol: symbol,
                    symbolKeepAspect: true,
                    value: title,
                    itemStyle: { color: colors.game, },
                })
            }
        }
        pushGame(RelationData.game1, 800)
        pushGame(RelationData.game2, 1100)
        //
        let pushOthers = function (list, x, color) {
            for (let i = 0; i < list.length; i++) {
                const e = list[i]
                const date = e[1]
                let year = date[0][0]
                let month = date[0][1]
                let factor = year - 2015 + (month - 1) / 12
                let y = factor * hscale
                let title = e[0] + '\n' + year + '.' + month
                if (date[1]) {
                    if (date[1] == -1) {
                        title += '-\n现在'
                    } else {
                        title += '-\n' + date[1][0] + '.' + date[1][1]
                    }
                }
                data.push({
                    name: 'NodeOthers' + (x + i),
                    x: x, y: y,
                    symbol: symbol,
                    symbolKeepAspect: true,
                    value: title,
                    itemStyle: { color: color, },
                })
            }
        }
        pushOthers(RelationData.novel, 1400, colors.novel)
        pushOthers(RelationData.anime, 1700, colors.anime)
        //
        let getIndex = function (x) {
            if (typeof (x) == 'number') {
                for (let i = 0; i < RelationData.comic1.length; i++) {
                    const e = RelationData.comic1[i]
                    if (x == e) {
                        return i
                    }
                }
                for (let i = 0; i < RelationData.comic2.length; i++) {
                    const e = RelationData.comic2[i]
                    if (x == e) {
                        return i + RelationData.comic1.length
                    }
                }
            }
            let base = RelationData.comic1.length + RelationData.comic2.length
            let keys = ['game1', 'game2', 'novel', 'anime']
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i]
                if (x[0] == key) {
                    return x[1] + base
                }
                base += RelationData[key].length
            }
            return -1
        }
        let links = []
        for (let i = 0; i < RelationData.edges.length; i++) {
            const e = RelationData.edges[i]
            let link = e[2] || {}
            link.lineStyle = link.lineStyle || {}
            link.source = getIndex(e[0])
            link.target = getIndex(e[1])
            let c1 = typeof (e[0]) == 'number'
            let c2 = typeof (e[1]) == 'number'
            if (c1 && c2) {
                link.lineStyle.color = '#aaaaff'
            } else if (!c1) {
                link.lineStyle.color = '#999'
            } else if (!c2 && e[1][0] == 'anime') {
                link.lineStyle.color = '#ff88aa'
            } else if (!c2 && e[1][0] == 'game2') {
                link.lineStyle.color = '#ffaa77'
            }
            links.push(link)
        }
        let option = {
            title: {},
            tooltip: {},
            scaleLimit: { min: 0.2, max: 10 },
            nodeScaleRatio: 1,
            label: {
                fontSize: 8,
                color: '#fff',
                textBorderColor: 'inherit',
                textBorderWidth: 1.5,
            },
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: symbolSize,
                    roam: true,
                    label: {
                        show: true,
                        formatter: '{c}',
                    },
                    tooltip: {
                        show: false,
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [6, 16],
                    edgeLabel: {
                        fontSize: 5
                    },
                    data: data,
                    links: links,
                    lineStyle: {
                        opacity: 1,
                        color: '#fff',
                        width: 2,
                        curveness: 0,
                    },
                }
            ],
        };
        chart.setOption(option)
        chart.on('graphroam', function (ev) {
            if (!ev.zoom) {
                return
            }
            let zoom = chart.getOption().series[0].zoom
            let factor = zoom
            let fontSize = 8 * factor
            fontSize = Math.max(5, Math.min(fontSize, 14))
            chart.setOption({ label: { fontSize: fontSize } })
        })
        window.addEventListener('resize', function () {
            chart.resize()
        })
    }
    // SetupChart1()
    document.getElementById('chart-relation-wrapper').style.display = 'none'
    //
    if (!Util.isMobile()) {
        let imgWrapper1 = document.getElementById('ins-img-wrapper-1')
        const ViewerConfig = {
            zoomRatio: 0.2,
            navbar: false,
            title: false,
            minZoomRatio: 0.1,
            maxZoomRatio: 10,
            className: 'ins-img-viewer',
            toolbar: {
                zoomIn: 1,
                zoomOut: 1,
                oneToOne: 1,
                reset: 1,
            },
        }
        let viewer = new Viewer(imgWrapper1, ViewerConfig)
    }
    //
    SetMenuConfig()
};

try {
    IndexScriptEx()
} catch (e) {
    IndexScript()
}
