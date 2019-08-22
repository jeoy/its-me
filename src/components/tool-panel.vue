<template>
    <div class="tool-panel">
        <a-button primary @click="printResume">打印简历</a-button>
        <a-button primary @click="changeTheme">改变主题</a-button>
    </div>
</template>

<script>
// import generateColors from 'src/util/colors';
import {
    generateTheme
} from 'src/util/theme';

export default {
    data() {
        return {
            originalStyle: '',
            colors: {}
        };
    },
    methods: {
        printResume() {
            window.print();
        },
        changeTheme() {
            const primary = '#14a762';
            this.updateNewTheme(primary);
            this.$emit('changeTheme', primary);
            // this.colors = Object.assign({}, this.colors, generateColors(primary))
            // this.writeNewStyle();
        },
        updateNewTheme(primary) {
            var themeColors = generateTheme(primary);
            Object.keys(themeColors).forEach(key => {
                document.documentElement.style.setProperty(key, themeColors[key]);
            });
        },
        writeNewStyle() {
            let cssText = this.originalStyle;
            Object.keys(this.colors).forEach(key => {
                cssText = cssText.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + this.colors[key]);
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
        },
        getStyleTemplate(data) {
            const colorMap = {
                '#1890ff': 'primary',
                '#096dd9': 'light-1',
                '#40a9ff': 'light-2'
            };
            Object.keys(colorMap).forEach(key => {
                const value = colorMap[key];
                data = data.replace(new RegExp(key, 'ig'), value);
            });
            return data;
        },
        getFile(url, isBlob = false) {
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
        },
        getIndexStyle() {
            this.getFile('//unpkg.com/antd@3.22.0/dist/antd.min.css')
                .then(({
                    data
                }) => {
                    this.originalStyle = this.getStyleTemplate(data);
                });
        }
    },
    created() {
        this.updateNewTheme('#248f97');
        this.getIndexStyle();
    }
};
</script>

<style>
.tool-panel {
    position: absolute;
}
</style>
