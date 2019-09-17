<template>
    <div class="knowledge-graph">
        <v-chart class="graph" :options="option" />
    </div>
</template>

<style lang="scss">
@import '~src/assets/css/theme/theme-default.scss';

.knowledge-graph {
    width: 80%;
    margin: 0 auto;
    transform: translateX(-6%);

    .graph {
        width: 100%;
        height: 1260px;
    }
}
</style>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/graph';
import { colorAdd } from 'util/util';
import { mapGetters } from 'vuex';
import { generateTheme } from 'src/util/theme';
const graph = require('../data/graph-schema.json');

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
            currentTheme: 'currentTheme',
            isMonochrome: 'isMonochrome'
        })
    },
    data() {
        return {
            option: {}
        };
    },
    methods: {
        renderChart(primary) {
            var themeColors = generateTheme(primary);
            const colorList = [];
            Object.keys(themeColors).forEach(key => {
                colorList.push(themeColors[key]); // for display;
            });

            var categories = [];
            for (var i = 0; i < 9; i++) {
                categories[i] = {
                    name: '类目' + i
                };
            }
            var arr = [
                '大前端',
                'javascript',
                'network',
                '测试',
                '性能测试',
                'css',
                '框架',
                'Vue',
                'node',
                'v8',
                '设计模式',
                '',
                '安全',
                '',
                'koa'
            ];
            i = -1;
            var nodes = graph.nodes.map(node => {
                i++;
                return {
                    symbolSize: node.symbolSize / 1.5,
                    id: node.id,
                    x: node.x,
                    y: node.y,
                    name: arr[i],
                    category: node.category,
                    label: {
                        normal: {
                            show: node.symbolSize > 30
                        }
                    }
                };
            });

            this.option = {
                title: {
                    text: 'Les Miserables',
                    subtext: 'Default layout',
                    top: 'bottom',
                    left: 'right'
                },
                color: [
                    colorAdd(primary, '#253025'),
                    colorAdd(primary, '#321125'),
                    colorAdd(primary, '#112315'),
                    colorAdd(primary, '#231115')
                ],
                tooltip: {},
                legend: [
                    {
                        // selectedMode: 'single',
                        data: categories.map(function(a) {
                            return a.name;
                        })
                    }
                ],
                animationDuration: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [
                    {
                        name: 'Les Miserables',
                        type: 'graph',
                        layout: 'none',
                        data: nodes,
                        links: graph.links,
                        categories: categories,
                        roam: false,
                        focusNodeAdjacency: true,
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{b}'
                        },
                        lineStyle: {
                            color: 'source',
                            curveness: 0.2
                        },
                        emphasis: {
                            lineStyle: {
                                width: 10
                            }
                        }
                    }
                ]
            };
        }
    },
    created() {},
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
