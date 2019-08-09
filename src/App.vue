<template>
<div id="app">
    <!-- <markdown /> -->
    <left-base class="left-pannel pannel"></left-base>
    <right-detail class="right-pannel pannel"></right-detail>
</div>
</template>

<script>
import leftBase from './components/left-base';
import rightDetail from './components/right-detail';

export default {
    name: 'App',
    components: {
        leftBase,
        rightDetail
    }
};
</script>

<style>
html,body {
    margin: 0;
    padding: 0;
    height: 100%;
}

p,span{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

#app {
    display: flex;
    height: 100%;
}
.left-pannel {
    flex: 4;
}

.right-pannel {
    flex: 5;
}

.pannel {
    padding: 20px;
    padding-top: 40px;
}
</style>
