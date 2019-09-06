<template>
    <div class="theme-area area">
        <a-button type="primary" @click="randomTheme">试试手气</a-button>
        <a-popover trigger="click" v-model="visible">
            <template slot="content">
                <chrome-picker v-model="customColors"></chrome-picker>
                <a-button type="primary" @click="changeTheme(customColors.hex)">
                    确定
                </a-button>
            </template>
            <a-button type="primary">放着我自己来</a-button>
        </a-popover>
        <li
            class="color-bar"
            :style="`background-color: ${color}`"
            v-for="color in colorList"
            :key="color"
        >
            {{ color }}
        </li>
    </div>
</template>

<script>
import { updateAndtTheme, getIndexStyle } from 'src/util/antd-colors';
import { HexToHSL } from 'src/util/util';
import { generateTheme } from 'src/util/theme';
import { mapActions, mapGetters } from 'vuex';
import { Chrome } from 'vue-color';

export default {
    components: {
        'chrome-picker': Chrome
    },
    data() {
        return {
            visible: false,
            originalStyle: '',
            lastTheme: '',
            colorList: [],
            themeColors: [],
            customColors: '',
            themes: ['#14a762', '#245697', '#a33c3c', '#248f97']
        };
    },
    computed: {
        ...mapGetters({
            currentTheme: 'currentTheme'
        })
    },
    methods: {
        ...mapActions({
            updateCurrentTheme: 'updateCurrentTheme'
        }),
        HexToHSL,
        updateValue(val) {
            this.changeTheme(val);
        },
        randomTheme() {
            const genRandomwThem = () => {
                const index = parseInt(Math.random() * this.themes.length);
                return this.themes[index];
            };
            let primary = genRandomwThem();
            while (primary === this.lastTheme) {
                primary = genRandomwThem();
            }
            this.lastTheme = primary;
            this.customColors = primary;
            this.changeTheme(primary);
        },
        changeTheme(primary) {
            this.updateNewTheme(primary);
            updateAndtTheme(primary, this.originalStyle);
        },
        updateNewTheme(primary) {
            this.updateCurrentTheme(primary);
            this.themeColors = generateTheme(primary);
            const colorList = [];
            Object.keys(this.themeColors).forEach(key => {
                colorList.push(this.themeColors[key]); // for display;
                document.documentElement.style.setProperty(
                    key,
                    this.themeColors[key]
                );
            });
            this.colorList = new Set(colorList.sort().reverse());
        }
    },
    created() {
        this.updateNewTheme(this.currentTheme);
        this.customColors = this.currentTheme;
        getIndexStyle('//unpkg.com/antd@3.22.0/dist/antd.min.css').then(res => {
            this.originalStyle = res;
            updateAndtTheme(this.currentTheme, res);
        });
    }
};
</script>

<style lang="scss">
.theme-area {
    .color-bar {
        display: block;
        height: 40px;
        width: 200px;
        line-height: 40px;
        padding-left: 10px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        color: white;
        margin-top: 5px;
    }
}

.ant-popover-inner-content {
    padding: 0;

    .vc-chrome {
        box-shadow: none;
    }
}
</style>
