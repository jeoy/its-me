<template>
  <div :ref="'wordCloud'" class="ability-wordcloud" id="echart-wordcloud"></div>
</template>

<script>

import echarts from 'echarts';
import 'echarts-wordcloud';
import {getGradientColors} from '../util';

export default {
    props: {
        ability: {
            type: Array
        }
    },
    mounted() {
        var chart = echarts.init(this.$refs.wordCloud);
        var colors = getGradientColors('#f6e2b9', '#9e7542', this.ability.map(item => item.value));
        console.log(colors);
        var seriesData = this.ability.map((item, ind) => {
            return {
                ...item,
                textStyle: {
                    normal: {
                        color: colors[ind]
                    }
                }
            }
        });
        chart.setOption({
                tooltip: {},
                series: [ {
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
            }
        )
    }
}   
</script>

<style>
.ability-wordcloud {
    width: 90%;
    height: 260px;
    margin: 0 auto;
}

</style>