<template>
    <div class="tool-panel">
        <a-button primary @click="printResume">打印简历</a-button>
    </div>
</template>

<script>
export default {
    methods: {
        printResume() {
            window.print();
        }
    }
};
</script>

<style>
.tool-panel {
    position: absolute;
}
</style>
