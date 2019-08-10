t<template>
    <div class="right-detail">
        <div v-for="project in projects" :key="project.title.name">
            <right-section :projectData="project.data" :title="project.title"></right-section>
        </div>
    </div>
</template>

<script>
import rightSection from './right-section';
import resumeData from '../../data/resumeData.json';

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

<style>
    .right-detail {
        background: #f1eee8;
        padding-top: 80px;
        padding-left: 50px;
        padding-right: 40px;
    }
</style>
