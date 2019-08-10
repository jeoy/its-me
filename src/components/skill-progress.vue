<template>
    <div class="skill-progress">
        <v-chart class="skill-bar" :options=option />
        <div class=learning>
            <img :src=learning />
        </div>
    </div>
</template>

<style>
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

        img {
            width: 100px;
        }

    }
}
</style>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/pictorialBar';
import imgProgress from '../assets/progress.png';
import learning from '../assets/learning.png';

export default {
    components: {
        'v-chart': ECharts
    },
    props: {
        skills: {
            type: Array
        }
    },
    data() {
        return {
            option: {},
            learning
        };
    },
    created() {
        var imgSrc = `image://${imgProgress}`;
        var catData = this.skills.map(item => item.name);
        var progress = this.skills.map(item => item.progress);
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
                color: '#b6813f',
                symbolMargin: '0%',
                symbol: 'rect',
                symbolSize: [32, 12],
                data: progress
            }, {
                type: 'pictorialBar',
                symbol: imgSrc,
                symbolRepeat: 'fixed',
                symbolMargin: '0%',
                symbolClip: true,
                symbolSize: [32, 12],
                data: progress
            }]
        };
    }
};
</script>
