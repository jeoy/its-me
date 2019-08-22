<template>
    <div :ref="'wordCloud'" class="ability-wordcloud" id="echart-wordcloud"></div>
</template>

<script>
import echarts from 'echarts';
import 'echarts-wordcloud';
import {
    getGradientColors
} from 'util/util';
import {
    mapGetters
} from 'vuex';

export default {
    props: {
        ability: {
            type: Array
        }
    },
    data() {
        return {
            chartObj: null
        };
    },
    computed: {
        ...mapGetters({
            currentTheme: 'currentTheme'
        })
    },
    mounted() {
        this.chartObj = echarts.init(this.$refs.wordCloud);
        this.renderChart(this.currentTheme);
    },
    methods: {
        renderChart(primary) {
            var colors = getGradientColors(primary, this.ability.map(item => item.value));
            var seriesData = this.ability.map((item, ind) => {
                return {
                    ...item,
                    textStyle: {
                        normal: {
                            color: colors[ind]
                        }
                    }
                };
            });
            this.chartObj.setOption({
                tooltip: {},
                series: [{
                    type: 'wordCloud',
                    gridSize: 2,
                    sizeRange: [0, 48],
                    rotationRange: [0, 0],
                    rotationStep: 0,
                    shape: 'circle',
                    width: 600,
                    height: 600,
                    drawOutOfBound: true,
                    data: seriesData
                }]
            });
        }
    },
    watch: {
        currentTheme: {
            handler(newVal, oldVal) {
                this.renderChart(newVal);
            }
        }
    }
};
</script>

<style>
.ability-wordcloud {
    width: 90%;
    height: 260px;
    margin: 18px auto;
}
</style>
