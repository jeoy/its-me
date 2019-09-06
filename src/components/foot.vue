<template>
    <div class="foot">
        <div
            class="foot-list"
            v-for="item in footList"
            v-show="item.info"
            :style="{ color: isMonochrome ? currentTheme: ''}"
            :key="item.iconName"
        >
            <icon-circle :iconName="item.iconName" :fontSize="22"></icon-circle>
            <span :style="{ 'font-size': `${item.fontSize || 14}px` }">{{
                item.info
            }}</span>
        </div>
    </div>
</template>

<script>
import iconCircle from './common/icon-circle';
import { mapGetters } from 'vuex';

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
            footList: [
                {
                    iconName: 'iconphone',
                    info: this.contact.phone
                },
                {
                    iconName: 'iconmail',
                    info: this.contact.email
                },
                {
                    iconName: 'iconstackoverflow',
                    info: this.contact.stackoverflow,
                    fontSize: 10
                },
                {
                    iconName: 'icongithub',
                    info: this.contact.github,
                    fontSize: 12
                }
            ]
        };
    },
    computed: {
        ...mapGetters({
            currentTheme: 'currentTheme',
            isMonochrome: 'isMonochrome'
        })
    },
    created() {}
};
</script>

<style lang="scss">
@import '~src/assets/css/theme/theme-default.scss';

.foot {
    position: absolute;
    bottom: 20px;
    left: 40px;

    .foot-list {
        align-items: center;
        display: flex;
        color: $left-pannel-text;
        padding-right: 20px;
        margin-bottom: 16px;

        span {
            word-break: break-word;
            display: inline-block;
            margin-left: 10px;
            font-size: 10px;
        }
    }
}
</style>
