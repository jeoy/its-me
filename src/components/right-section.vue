t<template>
    <div class="right-section">
        <i class="iconfont title-icon" :class="title.iconName" />
        <div class="title">
            <p>{{title.name}}</p>
        </div>
        <div class="project-block" v-for="project in projectData" :key="project.dateRange">
            <div class="project-name">
                <span>{{project.name}}</span>
            </div>
            <div class="project-date-range">
                <span>{{project.dateRange}}</span>
            </div>
            <div class="project-tag" >
                <tag v-for="tag in project.tags" :key="tag" :name="tag" ></tag>
            </div>
            <div class="project-context" :class="{'context-indent': project.contextIndent}">
                <span v-html="project.context"></span>
            </div>
        </div>
    </div>
</template>

<script>
import tag from 'components/common/tag';

export default {
    components: {
        tag
    },
    props: {
        title: {
            type: Object
        },
        projectData: {
            type: Array
        }
    },
    data() {
        return {
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

.right-section {
    position: relative;

    .title-icon {
        position: absolute;
        left: -32px;
        top: 3px;
        color: @right-pannel-text;
        font-size: 25px;
    }

    .title {
        font-size: 30px;
        color: @title-color;
    }

    .project-block {
        margin-bottom: 24px;

        .project-tag {
            font-size: 12px;
        }

        .project-name {
            font-size: 20px;
            color: @right-pannel-text;
            margin-bottom: 6px;
        }

        .project-date-range {
            font-size: 14px;
            color: @right-pannel-text;
            margin-bottom: 4px;
        }

        .project-context {
            font-size: 14px;
        }

        .context-indent {
            text-indent: 28px;
        }
    }
}

</style>
