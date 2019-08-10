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
            <div class="project-context">
                <span v-html="project.context"></span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
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

<style>

.right-section {
    position: relative;

    .title-icon {
        position: absolute;
        left: -32px;
        top: 6px;
        color: #c3985d;
        font-size: 25px;
    }

    .title {
        font-size: 30px;
        color: #6b6a7b;
    }

    .project-block {
        margin-bottom: 24px;

        .project-name {
            font-size: 20px;
            color: #c3985d;
            margin-bottom: 6px;
        }

        .project-date-range {
            font-size: 14px;
            color: #c3985d;
            margin-bottom: 4px;
        }

        .project-context {
            font-size: 14px;
        }
    }
}

</style>
