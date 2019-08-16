<template>
<div id="app">
    <tool-panel @changeTheme="changeTheme"></tool-panel>
    <main-page :class="theme"></main-page>
</div>
</template>

<script>
import mainPage from './components/main-page';
import toolPanel from './components/tool-panel';

export default {
    name: 'App',
    data() {
        return {
            theme: 'theme-dark-blue'
        };
    },
    components: {
        mainPage,
        toolPanel
    },
    methods: {
        changeTheme() {
            this.theme = 'theme-dark-blue';
        }
    }
};
</script>

<style lang="less">
    @import "./App.less";
</style>
