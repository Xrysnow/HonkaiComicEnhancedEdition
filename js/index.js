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
            if (data.date.length > 1) {
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
