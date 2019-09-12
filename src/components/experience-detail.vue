<template>
    <div
        class="experience-wrapper"
        :style="{ background: isMonochrome ? 'white' : '' }"
    >
        <div class="left-area" v-if="pageIndex">
            <knowledge-graph></knowledge-graph>
        </div>
        <div
            class="experience-detail"
            :style="{ background: isMonochrome ? 'white' : '' }"
        >
            <div
                v-for="project in projects"
                :key="project.title && project.title.name"
            >
                <experience-section
                    :projectData="project.content"
                    :title="project.title"
                ></experience-section>
            </div>
        </div>
    </div>
</template>

<script>
import experienceSection from './experience-section';
import { mapGetters } from 'vuex';
import resumeData from 'src/data/demoData.json';
import knowledgeGraph from './knowledge-graph';

export default {
    name: 'experience-detail',
    components: {
        experienceSection,
        knowledgeGraph
    },
    props: {
        projects: Array,
        pageIndex: Number
    },
    data() {
        return {
            resumeData
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

.left-area {
    position: relative;
    float: left;
    width: 320px;
    height: 800px;
}

.experience-wrapper {
    position: relative;
    width: 100%;
    background: var(--primary-color);
    border-bottom: 1px dashed #666;
}

.experience-detail {
    margin-left: 320px;
    min-height: 1130px;
    position: relative;
    background: $right-pannel-background;
    border-left: 1px dashed #666;
    padding-top: 60px;
    padding-left: 50px;
    padding-right: 40px;
    line-height: 1.4;
}
</style>
