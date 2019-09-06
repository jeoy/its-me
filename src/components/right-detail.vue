<template>
    <div class="right-detail"  :style="{ background: isMonochrome ? 'white' : ''}">
        <div v-for="project in projects" :key="project.title.name">
            <right-section
                :projectData="project.data"
                :title="project.title"
            ></right-section>
        </div>
    </div>
</template>

<script>
import rightSection from './right-section';
import resumeData from '../../demo/demoData.json';
import { mapGetters } from 'vuex';

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
        ...mapGetters({
            isMonochrome: 'isMonochrome'
        })
    },
    created() {}
};
</script>

<style lang="scss">
@import '~src/assets/css/theme/theme-default.scss';

.right-detail {
    background: $right-pannel-background;
    border-left: 1px dashed #666;
    padding-top: 60px;
    padding-left: 50px;
    padding-right: 40px;
    line-height: 1.4;
}
</style>
