<template>
    <div class="circle" >
        <div class="container flex-center">
            <i class="iconfont " :class="iconName" :style="{'font-size': `${fontSize}px`}" ></i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        iconName: {
            type: String
        },
        fontSize: {
            type: Number
        }
    }
};
</script>

<style lang="scss">
    @import '~src/assets/css/theme/theme-default.scss';

    .circle {
        display: inline-block;
        width: 30px;
        height: 30px;
        background-color: white;
        border-radius: 50%;

        i {
            color: var(--circle-icon-color);
        }

        .container {
            width: 30px;
            height: 30px;
        }
    }
</style>
