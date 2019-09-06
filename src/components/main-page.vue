<template>
    <div class="main-page printable">
        <left-base class="left-pannel pannel"></left-base>
        <right-detail class="right-pannel pannel"></right-detail>
    </div>
</template>

<script>
import leftBase from './left-base';
import rightDetail from './right-detail';

export default {
    components: {
        leftBase,
        rightDetail
    }
};
</script>

<style>
.main-page {
    width: 800px;
    height: 1130px;
    overflow: hidden;
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
