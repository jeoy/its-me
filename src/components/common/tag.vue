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

<style>
    .tag {
        background: #c3985d;
        display: inline-block;
        border-radius: 5px;
        padding: 2px 4px;
        color: #f6e2b9;
        margin-bottom: 10px;
        margin-right: 5px;
    }
</style>
