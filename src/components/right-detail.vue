t<template>
    <div class="right-detail">
        <div v-for="project in projects" :key="project.title.name">
            <right-section :projectData="project.data" :title="project.title"></right-section>
        </div>
    </div>
</template>

<script>
import rightSection from './right-section';
import resumeData from '../../demo/demoData.json';

export default {
    name: 'right-detail',
    components: {
        rightSection
    },
    data() {
        return {
            projects: resumeData.projects
        };
    },
    computed: {

    },
    created() {
    }
};
</script>

<style lang="less">
    @import '~src/assets/css/theme.less';

    .right-detail {
        background: @right-pannel-background;
        padding-top: 60px;
        padding-left: 50px;
        padding-right: 40px;
        line-height: 1.4;
    }
</style>
