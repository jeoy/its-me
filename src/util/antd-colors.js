import {
    generate
} from '@ant-design/colors';

const generateColors = primary => {
    const colorsArr = generate(primary);
    const colors = {
        primary
    };
    colorsArr.forEach((item, index) => {
        colors['light-' + index] = item;
    });
    return colors;
};

const getStyleTemplate = function(data) {
    const colorMap = {
        '#1890ff': 'primary',
        '#096dd9': 'light-1',
        '#40a9ff': 'light-2'
    };
    const colorOverrides = [];
    Object.keys(colorMap).forEach(key => {
        const value = colorMap[key];
        const repl = new RegExp(`(^|})([^{]+{[^{}]+)${key}\\b([^}]*)(?=})`, 'gi');
        const nestRepl = new RegExp(key, 'ig'); // for greed matching before the 'key'
        let v;
        while ((v = repl.exec(data))) {
            colorOverrides.push(v[2].replace(nestRepl, value) + value + v[3] + '}'); // '}' not captured in the regexp repl to reserve it as locator-boundary
        }
    });
    return colorOverrides.join('');
};

const getIndexStyle = function(distUrl) {
    return new Promise((resolve, reject) => {
        getFile(distUrl)
            .then(({
                data
            }) => {
                resolve(getStyleTemplate(data));
            });
    });
};

const getFile = function(url, isBlob = false) {
    return new Promise((resolve, reject) => {
        const client = new XMLHttpRequest();
        client.responseType = isBlob ? 'blob' : '';
        client.onreadystatechange = () => {
            if (client.readyState !== 4) {
                return;
            }
            if (client.status === 200) {
                const urlArr = client.responseURL.split('/');
                resolve({
                    data: client.response,
                    url: urlArr[urlArr.length - 1]
                });
            } else {
                reject(new Error(client.statusText));
            }
        };
        client.open('GET', url);
        client.send();
    });
};

const updateAndtTheme = function(primary, originalStyle) {
    let colors = {};
    colors = Object.assign({}, colors, generateColors(primary));
    writeNewStyle(originalStyle, colors);
};

const writeNewStyle = function(originalStyle, colors) {
    let cssText = originalStyle;
    Object.keys(colors).forEach(key => {
        cssText = cssText.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + colors[key]);
    });

    var lastStyle = document.head.lastChild;
    if (lastStyle.props && lastStyle.props.id === 'theme-runtime') {
        lastStyle.innerText = cssText;
    } else {
        const style = document.createElement('style');
        style.props = {
            id: 'theme-runtime'
        };
        style.innerText = cssText;
        document.head.appendChild(style);
    }
};

export {
    generateColors,
    getIndexStyle,
    updateAndtTheme
};
