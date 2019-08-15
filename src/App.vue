<template>
<div id="app">
    <tool-panel></tool-panel>
    <main-page></main-page>
</div>
</template>

<script>
import mainPage from './components/main-page';
import toolPanel from './components/tool-panel';

export default {
    name: 'App',
    components: {
        mainPage,
        toolPanel
    }
};
</script>

<style lang="less">
    @import "./App.less";
</style>
