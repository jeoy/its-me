<template>
    <div class="main-page printable">
        <base-info class="left-pannel pannel"></base-info>
        <experience-detail
            v-for="(data, index) in projects"
            :key="index"
            :projects="data.pageData"
            :pageIndex="index"
            class="right-pannel pannel"
        ></experience-detail>
    </div>
</template>

<script>
import baseInfo from './base-info';
import experienceDetail from './experience-detail';
import resumeData from 'src/data/demoData.json';

export default {
    components: {
        baseInfo,
        experienceDetail
    },
    data() {
        return {
            projects: resumeData.projects
        };
    }
};
</script>

<style>
.main-page {
    width: 800px;
    min-height: 1100px;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
}

.left-pannel {
    position: absolute;
    z-index: 9999;
    padding: 20px;
    padding-top: 40px;
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
    height: 100%;
    min-height: 1100px;
}
</style>
