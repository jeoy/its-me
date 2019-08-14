<template>
    <div class="tool-panel">
        <button @click="print">打印页面 </button>
    </div>
</template>

<script>
export default {
    methods: {
        print() {
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
