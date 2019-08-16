<template>
    <div class="tool-panel">
        <a-button primary @click="printResume">打印简历</a-button>
        <a-button primary @click="changeTheme">改变主题</a-button>
    </div>
</template>

<script>
export default {
    methods: {
        printResume() {
            window.print();
        },
        changeTheme() {
            this.$emit('changeTheme');
        }
    }
};
</script>

<style>
.tool-panel {
    position: absolute;
}
</style>
