let FeatureTest = function () {
    let features = [
        'audio',
        'canvas',
        'json',
        'flexbox',
        'csstransforms',
        'csstransitions',
        'es5',
        'es6object',
        'promises',
    ]
    let optionalFeatures = [
        'cssscrollbar',
        'localstorage',
    ]
    if (!Modernizr) {
        return false
    }
    for (let i = 0; i < features.length; i++) {
        const s = features[i]
        if (!Modernizr[s]) {
            console.log('feature [' + s + '] is not supported')
            return false
        }
    }
    if (!Modernizr.mq('only all')) {
        console.log('feature [media query] is not supported')
        return false
    }
    for (let i = 0; i < optionalFeatures.length; i++) {
        const s = optionalFeatures[i]
        if (!Modernizr[s]) {
            console.log('feature [' + s + '] is not supported')
        }
    }
    return true
};

let Preload = function () {
    if (!FeatureTest()) {
        window.stop ? window.stop() : document.execCommand("Stop")
        let clear = function () {
            document.body.innerHTML = ''
            document.body.innerText = '您的浏览器不支持本网站，请尝试更换浏览器'
        }
        clear()
        document.body.onload = function (ev) {
            clear()
        }
        console.log('feature test failed')
        return
    }
};

try {
    PreloadEx()
} catch (e) {
    Preload()
}
