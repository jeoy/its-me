<template>
<div class="markdown-area">
    <textarea class="left" type="text" v-model="text" />
    <div class="right" v-html="html" />
</div>
</template>

<script>
import showdown from 'showdown';

export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            text: '',
            converter: ''
        };
    },
    computed: {
        html() {
            return this.converter.makeHtml(this.text);
        }
    },
    created() {
        this.converter = new showdown.Converter();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.markdown-area {
    display: flex;

}

.left,
.right {
    flex: 1;
    height: 800px;
}
</style>
