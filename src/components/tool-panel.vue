<template>
    <div class="tool-panel">
        <a-button primary @click="printResume">打印简历</a-button>
        <a-button primary @click="changeTheme">改变主题, try</a-button>
        <div> 自定义主题，施工中🚧</div>
    </div>
</template>

<script>
import {
    updateAndtTheme,
    getIndexStyle
} from 'src/util/antd-colors';
import {
    generateTheme
} from 'src/util/theme';
import {
    mapActions,
    mapGetters
} from 'vuex';

export default {
    data() {
        return {
            originalStyle: '',
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
        printResume() {
            window.print();
        },
        changeTheme() {
            const index = parseInt(Math.random() * this.themes.length);
            const primary = this.themes[index];
            this.updateNewTheme(primary);
            updateAndtTheme(primary, this.originalStyle);
        },
        updateNewTheme(primary) {
            this.updateCurrentTheme(primary);
            var themeColors = generateTheme(primary);
            Object.keys(themeColors).forEach(key => {
                document.documentElement.style.setProperty(key, themeColors[key]);
            });
        }
    },
    created() {
        this.updateNewTheme(this.currentTheme);
        getIndexStyle('//unpkg.com/antd@3.22.0/dist/antd.min.css').then(res => {
            this.originalStyle = res;
        });
    }
};
</script>

<style>
.tool-panel {
    position: absolute;
}
</style>
