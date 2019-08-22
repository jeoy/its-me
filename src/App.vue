<template>
<div id="app">
    <tool-panel ></tool-panel>
    <main-page ></main-page>
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
    }
};
</script>
<style lang="scss">
    @import "./App.scss";
</style>
