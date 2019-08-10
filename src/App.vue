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
    margin: 0 auto;
    padding: 0;
    height: 1120px;
}

p,span{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

#app {
    width: 800px;
    height: 1140px;
    margin: 0 auto;
}

.left-pannel {
    position: relative;
    width: 320px;
    box-sizing: border-box;
}

.right-pannel {
    width: 480px;
    box-sizing: border-box;
    display: inline-block;
}

.pannel {
    float: left;
    padding: 20px;
    height: 1140px;
    padding-top: 40px;
}
</style>
