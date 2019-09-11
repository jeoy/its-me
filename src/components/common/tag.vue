<template>
    <div class="tag">
        <span>{{ name }}</span>
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

<style lang="scss">
@import '~src/assets/css/theme/theme-default.scss';

.tag {
    background: var(--tag-bg-color);
    display: inline-block;
    border-radius: 5px;
    padding: 2px 4px;
    color: var(--icon-color);
    margin-right: 5px;
}
</style>
