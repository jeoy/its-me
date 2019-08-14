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

<style>
html,body {
    margin: 0 auto;
    padding: 0;
    height: 1120px;
}

p,span{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

</style>
