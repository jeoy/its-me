<template>
    <div class="foot">
        <div class="foot-list" v-for="item in footList" :key="item.iconName">
            <icon-circle :iconName="item.iconName" :fontSize="22" ></icon-circle>
            <span :style="{'font-size': `${item.fontSize || 14}px`}">{{item.info}}</span>
        </div>
    </div>
</template>

<script>
import iconCircle from './common/icon-circle';

export default {
    name: 'foot',
    components: {
        iconCircle
    },
    props: {
        contact: {
            type: Object
        }
    },
    data() {
        return {
            footList: [{
                iconName: 'iconphone',
                info: this.contact.phone
            }, {
                iconName: 'iconmail',
                info: this.contact.email
            }, {
                iconName: 'iconstackoverflow',
                info: this.contact.stackoverflow,
                fontSize: 10
            }]
        };
    },
    computed: {

    },
    created() {
    }
};
</script>

<style>
    .foot {
        position: absolute;
        bottom: 20px;
        left: 40px;

        .foot-list {
            align-items: center;
            display: flex;
            color: white;
            padding-right: 20px;
            margin-bottom: 16px;

            span {
                display: inline-block;
                margin-left: 10px;
                font-size: 10px;
            }
        }
    }

</style>
