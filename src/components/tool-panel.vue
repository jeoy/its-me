<template>
    <div class="tool-panel">
        <a-button @click="printResume">Hello world!</a-button>
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
