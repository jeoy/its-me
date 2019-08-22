<template>
    <div class="skill-progress">
        <v-chart class="skill-bar" :options=option />
        <div class=learning>
            <p> Learning... </p>
        </div>
    </div>
</template>

<style lang="scss">
@import '~src/assets/css/theme/theme-default.scss';

.skill-progress {
    width: 80%;
    margin: 0 auto;
    transform: translateX(-6%);

    .skill-bar {
        width: 100%;
        height: 260px;
    }

    .learning {
        margin: 0px auto;
        text-align: center;
        transform: translateX(10%);
        color: var(--light-color);

        p {
            font-weight: 700;
            margin-top: -10px;
        }

    }
}
</style>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/pictorialBar';
import {
    colorAdd
} from 'util/util';
import {
    mapGetters
} from 'vuex';
export default {
    components: {
        'v-chart': ECharts
    },
    props: {
        skills: {
            type: Array
        }
    },
    computed: {
        ...mapGetters({
            currentTheme: 'currentTheme'
        })
    },
    data() {
        return {
            option: {}
        };
    },
    methods: {
        renderChart(primary) {
            var catData = this.skills.map(item => item.name);
            var progress = this.skills.map(item => item.progress);
            var barColor1 = colorAdd(primary, '#252525');
            var barColor2 = colorAdd(primary, '#383838');
            var barBgColor = '#fff';
            this.option = {
                xAxis: {
                    show: false,
                    max: 100
                },
                yAxis: {
                    inverse: true,
                    data: catData,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        }
                    }
                },
                grid: {
                    containLabel: true,
                    top: 'center',
                    height: 240,
                    left: 0,
                    right: 0
                },
                series: [{
                    type: 'pictorialBar',
                    animationDuration: 0,
                    symbolRepeat: 'fixed',
                    color: barBgColor,
                    symbolMargin: '0%',
                    symbol: 'rect',
                    symbolSize: [32, 14],
                    data: progress
                }, {
                    type: 'pictorialBar',
                    symbol: 'rect',
                    symbolRepeat: true,
                    color: barColor1,
                    symbolMargin: '0%',
                    symbolClip: true,
                    symbolSize: [32, 14],
                    data: progress
                }, {
                    type: 'pictorialBar',
                    symbol: 'path://M20,0,40,0,20,50,0,50z',
                    symbolRepeat: 'fixed',
                    color: barColor2,
                    symbolMargin: '0%',
                    symbolClip: true,
                    symbolSize: [30, 14],
                    data: progress
                }]
            };
        }
    },
    created() {

    },
    watch: {
        currentTheme: {
            immediate: true,
            handler(newVal, oldVal) {
                this.renderChart(newVal);
            }
        }
    }
};
</script>
