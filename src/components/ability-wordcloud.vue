<template>
    <div :ref="'wordCloud'" class="ability-wordcloud" id="echart-wordcloud"></div>
</template>

<script>
import echarts from 'echarts';
import 'echarts-wordcloud';
import {
    getGradientColors,
    primary
} from 'util/util';

export default {
    props: {
        ability: {
            type: Array
        }
    },
    data() {
        return {
            primary
        };
    },
    mounted() {
        var chart = echarts.init(this.$refs.wordCloud);
        var colors = getGradientColors(this.primary, this.ability.map(item => item.value));
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
        chart.setOption({
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
};

</script>

<style>
.ability-wordcloud {
    width: 90%;
    height: 260px;
    margin: 18px auto;
}
</style>
