<template>
    <div class="tag" >
        <span>{{name}}</span>
    </div>
</template>

<script>

export default {
    props: {
        name: {
            type: String
        }
    }
};
</script>

<style lang="less">
    @import '~src/assets/css/theme.less';

    .tag {
        background: @tag-bg-color;
        display: inline-block;
        border-radius: 5px;
        padding: 2px 4px;
        color: @icon-color;
        margin-bottom: 10px;
        margin-right: 5px;
    }
</style>
