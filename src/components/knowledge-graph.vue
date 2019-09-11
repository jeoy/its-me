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
        height: 660px;
    }
}
</style>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/graph';
import { colorAdd } from 'util/util';
import { mapGetters } from 'vuex';
import { generateTheme } from 'src/util/theme';

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
            const barColor1 = colorAdd(primary, '#252525');
            const barColor2 = colorAdd(primary, '#383838');
            const barBgColor = this.isMonochrome ? '#ccc' : '#fff';
            const axisLabel = this.isMonochrome ? this.currentTheme : '#fff';
            var themeColors = generateTheme(primary);
            const colorList = [];
            Object.keys(themeColors).forEach(key => {
                colorList.push(themeColors[key]); // for display;
            });
            var categories = ['fsadd', 'fdsf', 'ghf', 'ewrr', 'xcvw'];

            var graph = {
                nodes: [
                    {
                        id: '0',
                        name: 'Myriel',
                        itemStyle: null,
                        symbolSize: 19.12381,
                        x: -266.82776,
                        y: 299.6904,
                        attributes: { modularity_class: 0 },
                        value: 28.685715,
                        label: { normal: { show: false } },
                        category: 0
                    },
                    {
                        id: '1',
                        name: 'Napoleon',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: -418.08344,
                        y: 446.8853,
                        attributes: { modularity_class: 0 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 0
                    },
                    {
                        id: '2',
                        name: 'MlleBaptistine',
                        itemStyle: null,
                        symbolSize: 6.323809333333333,
                        x: -212.76357,
                        y: 245.29176,
                        attributes: { modularity_class: 1 },
                        value: 9.485714,
                        label: { normal: { show: false } },
                        category: 1
                    },
                    {
                        id: '3',
                        name: 'MmeMagloire',
                        itemStyle: null,
                        symbolSize: 6.323809333333333,
                        x: -242.82404,
                        y: 235.26283,
                        attributes: { modularity_class: 1 },
                        value: 9.485714,
                        label: { normal: { show: false } },
                        category: 1
                    },
                    {
                        id: '4',
                        name: 'CountessDeLo',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: -379.30386,
                        y: 429.06424,
                        attributes: { modularity_class: 0 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 0
                    },
                    {
                        id: '5',
                        name: 'Geborand',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: -417.26337,
                        y: 406.03506,
                        attributes: { modularity_class: 0 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 0
                    },
                    {
                        id: '6',
                        name: 'Champtercier',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: -332.6012,
                        y: 485.16974,
                        attributes: { modularity_class: 0 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 0
                    },
                    {
                        id: '7',
                        name: 'Cravatte',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: -382.69568,
                        y: 475.09113,
                        attributes: { modularity_class: 0 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 0
                    },
                    {
                        id: '8',
                        name: 'Count',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: -320.384,
                        y: 387.17325,
                        attributes: { modularity_class: 0 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 0
                    },
                    {
                        id: '9',
                        name: 'OldMan',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: -344.39832,
                        y: 451.16772,
                        attributes: { modularity_class: 0 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 0
                    },
                    {
                        id: '10',
                        name: 'Labarre',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: -89.34107,
                        y: 234.56128,
                        attributes: { modularity_class: 1 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 1
                    },
                    {
                        id: '11',
                        name: 'Valjean',
                        itemStyle: null,
                        symbolSize: 66.66666666666667,
                        x: -87.93029,
                        y: -6.8120565,
                        attributes: { modularity_class: 1 },
                        value: 100,
                        label: { normal: { show: true } },
                        category: 1
                    },
                    {
                        id: '12',
                        name: 'Marguerite',
                        itemStyle: null,
                        symbolSize: 4.495239333333333,
                        x: -339.77908,
                        y: -184.69139,
                        attributes: { modularity_class: 1 },
                        value: 6.742859,
                        label: { normal: { show: false } },
                        category: 1
                    },
                    {
                        id: '13',
                        name: 'MmeDeR',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: -194.31313,
                        y: 178.55301,
                        attributes: { modularity_class: 1 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 1
                    },
                    {
                        id: '14',
                        name: 'Isabeau',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: -158.05168,
                        y: 201.99768,
                        attributes: { modularity_class: 1 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 1
                    },
                    {
                        id: '15',
                        name: 'Gervais',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: -127.701546,
                        y: 242.55057,
                        attributes: { modularity_class: 1 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 1
                    },
                    {
                        id: '16',
                        name: 'Tholomyes',
                        itemStyle: null,
                        symbolSize: 17.295237333333333,
                        x: -385.2226,
                        y: -393.5572,
                        attributes: { modularity_class: 2 },
                        value: 25.942856,
                        label: { normal: { show: false } },
                        category: 2
                    },
                    {
                        id: '17',
                        name: 'Listolier',
                        itemStyle: null,
                        symbolSize: 13.638097333333334,
                        x: -516.55884,
                        y: -393.98975,
                        attributes: { modularity_class: 2 },
                        value: 20.457146,
                        label: { normal: { show: false } },
                        category: 2
                    },
                    {
                        id: '18',
                        name: 'Fameuil',
                        itemStyle: null,
                        symbolSize: 13.638097333333334,
                        x: -464.79382,
                        y: -493.57944,
                        attributes: { modularity_class: 2 },
                        value: 20.457146,
                        label: { normal: { show: false } },
                        category: 2
                    },
                    {
                        id: '19',
                        name: 'Blacheville',
                        itemStyle: null,
                        symbolSize: 13.638097333333334,
                        x: -515.1624,
                        y: -456.9891,
                        attributes: { modularity_class: 2 },
                        value: 20.457146,
                        label: { normal: { show: false } },
                        category: 2
                    },
                    {
                        id: '20',
                        name: 'Favourite',
                        itemStyle: null,
                        symbolSize: 13.638097333333334,
                        x: -408.12122,
                        y: -464.5048,
                        attributes: { modularity_class: 2 },
                        value: 20.457146,
                        label: { normal: { show: false } },
                        category: 2
                    },
                    {
                        id: '21',
                        name: 'Dahlia',
                        itemStyle: null,
                        symbolSize: 13.638097333333334,
                        x: -456.44113,
                        y: -425.13303,
                        attributes: { modularity_class: 2 },
                        value: 20.457146,
                        label: { normal: { show: false } },
                        category: 2
                    },
                    {
                        id: '22',
                        name: 'Zephine',
                        itemStyle: null,
                        symbolSize: 13.638097333333334,
                        x: -459.1107,
                        y: -362.5133,
                        attributes: { modularity_class: 2 },
                        value: 20.457146,
                        label: { normal: { show: false } },
                        category: 2
                    },
                    {
                        id: '23',
                        name: 'Fantine',
                        itemStyle: null,
                        symbolSize: 28.266666666666666,
                        x: -313.42786,
                        y: -289.44803,
                        attributes: { modularity_class: 2 },
                        value: 42.4,
                        label: { normal: { show: false } },
                        category: 2
                    },
                    {
                        id: '24',
                        name: 'MmeThenardier',
                        itemStyle: null,
                        symbolSize: 20.95238266666667,
                        x: 4.6313396,
                        y: -273.8517,
                        attributes: { modularity_class: 7 },
                        value: 31.428574,
                        label: { normal: { show: false } },
                        category: 7
                    },
                    {
                        id: '25',
                        name: 'Thenardier',
                        itemStyle: null,
                        symbolSize: 30.095235333333335,
                        x: 82.80825,
                        y: -203.1144,
                        attributes: { modularity_class: 7 },
                        value: 45.142853,
                        label: { normal: { show: true } },
                        category: 7
                    },
                    {
                        id: '26',
                        name: 'Cosette',
                        itemStyle: null,
                        symbolSize: 20.95238266666667,
                        x: 78.64646,
                        y: -31.512747,
                        attributes: { modularity_class: 6 },
                        value: 31.428574,
                        label: { normal: { show: false } },
                        category: 6
                    },
                    {
                        id: '27',
                        name: 'Javert',
                        itemStyle: null,
                        symbolSize: 31.923806666666668,
                        x: -81.46074,
                        y: -204.20204,
                        attributes: { modularity_class: 7 },
                        value: 47.88571,
                        label: { normal: { show: true } },
                        category: 7
                    },
                    {
                        id: '28',
                        name: 'Fauchelevent',
                        itemStyle: null,
                        symbolSize: 8.152382000000001,
                        x: -225.73984,
                        y: 82.41631,
                        attributes: { modularity_class: 4 },
                        value: 12.228573,
                        label: { normal: { show: false } },
                        category: 4
                    },
                    {
                        id: '29',
                        name: 'Bamatabois',
                        itemStyle: null,
                        symbolSize: 15.466666666666667,
                        x: -385.6842,
                        y: -20.206686,
                        attributes: { modularity_class: 3 },
                        value: 23.2,
                        label: { normal: { show: false } },
                        category: 3
                    },
                    {
                        id: '30',
                        name: 'Perpetue',
                        itemStyle: null,
                        symbolSize: 4.495239333333333,
                        x: -403.92447,
                        y: -197.69823,
                        attributes: { modularity_class: 2 },
                        value: 6.742859,
                        label: { normal: { show: false } },
                        category: 2
                    },
                    {
                        id: '31',
                        name: 'Simplice',
                        itemStyle: null,
                        symbolSize: 8.152382000000001,
                        x: -281.4253,
                        y: -158.45137,
                        attributes: { modularity_class: 2 },
                        value: 12.228573,
                        label: { normal: { show: false } },
                        category: 2
                    },
                    {
                        id: '32',
                        name: 'Scaufflaire',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: -122.41348,
                        y: 210.37503,
                        attributes: { modularity_class: 1 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 1
                    },
                    {
                        id: '33',
                        name: 'Woman1',
                        itemStyle: null,
                        symbolSize: 4.495239333333333,
                        x: -234.6001,
                        y: -113.15067,
                        attributes: { modularity_class: 1 },
                        value: 6.742859,
                        label: { normal: { show: false } },
                        category: 1
                    },
                    {
                        id: '34',
                        name: 'Judge',
                        itemStyle: null,
                        symbolSize: 11.809524666666666,
                        x: -387.84915,
                        y: 58.7059,
                        attributes: { modularity_class: 3 },
                        value: 17.714287,
                        label: { normal: { show: false } },
                        category: 3
                    },
                    {
                        id: '35',
                        name: 'Champmathieu',
                        itemStyle: null,
                        symbolSize: 11.809524666666666,
                        x: -338.2307,
                        y: 87.48405,
                        attributes: { modularity_class: 3 },
                        value: 17.714287,
                        label: { normal: { show: false } },
                        category: 3
                    },
                    {
                        id: '36',
                        name: 'Brevet',
                        itemStyle: null,
                        symbolSize: 11.809524666666666,
                        x: -453.26874,
                        y: 58.94648,
                        attributes: { modularity_class: 3 },
                        value: 17.714287,
                        label: { normal: { show: false } },
                        category: 3
                    },
                    {
                        id: '37',
                        name: 'Chenildieu',
                        itemStyle: null,
                        symbolSize: 11.809524666666666,
                        x: -386.44904,
                        y: 140.05937,
                        attributes: { modularity_class: 3 },
                        value: 17.714287,
                        label: { normal: { show: false } },
                        category: 3
                    },
                    {
                        id: '38',
                        name: 'Cochepaille',
                        itemStyle: null,
                        symbolSize: 11.809524666666666,
                        x: -446.7876,
                        y: 123.38005,
                        attributes: { modularity_class: 3 },
                        value: 17.714287,
                        label: { normal: { show: false } },
                        category: 3
                    },
                    {
                        id: '39',
                        name: 'Pontmercy',
                        itemStyle: null,
                        symbolSize: 6.323809333333333,
                        x: 336.49738,
                        y: -269.55914,
                        attributes: { modularity_class: 6 },
                        value: 9.485714,
                        label: { normal: { show: false } },
                        category: 6
                    },
                    {
                        id: '40',
                        name: 'Boulatruelle',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: 29.187843,
                        y: -460.13132,
                        attributes: { modularity_class: 7 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 7
                    },
                    {
                        id: '41',
                        name: 'Eponine',
                        itemStyle: null,
                        symbolSize: 20.95238266666667,
                        x: 238.36697,
                        y: -210.00926,
                        attributes: { modularity_class: 7 },
                        value: 31.428574,
                        label: { normal: { show: false } },
                        category: 7
                    },
                    {
                        id: '42',
                        name: 'Anzelma',
                        itemStyle: null,
                        symbolSize: 6.323809333333333,
                        x: 189.69513,
                        y: -346.50662,
                        attributes: { modularity_class: 7 },
                        value: 9.485714,
                        label: { normal: { show: false } },
                        category: 7
                    },
                    {
                        id: '43',
                        name: 'Woman2',
                        itemStyle: null,
                        symbolSize: 6.323809333333333,
                        x: -187.00418,
                        y: -145.02663,
                        attributes: { modularity_class: 6 },
                        value: 9.485714,
                        label: { normal: { show: false } },
                        category: 6
                    },
                    {
                        id: '44',
                        name: 'MotherInnocent',
                        itemStyle: null,
                        symbolSize: 4.495239333333333,
                        x: -252.99521,
                        y: 129.87549,
                        attributes: { modularity_class: 4 },
                        value: 6.742859,
                        label: { normal: { show: false } },
                        category: 4
                    },
                    {
                        id: '45',
                        name: 'Gribier',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: -296.07935,
                        y: 163.11964,
                        attributes: { modularity_class: 4 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 4
                    },
                    {
                        id: '46',
                        name: 'Jondrette',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: 550.3201,
                        y: 522.4031,
                        attributes: { modularity_class: 5 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 5
                    },
                    {
                        id: '47',
                        name: 'MmeBurgon',
                        itemStyle: null,
                        symbolSize: 4.495239333333333,
                        x: 488.13535,
                        y: 356.8573,
                        attributes: { modularity_class: 5 },
                        value: 6.742859,
                        label: { normal: { show: false } },
                        category: 5
                    },
                    {
                        id: '48',
                        name: 'Gavroche',
                        itemStyle: null,
                        symbolSize: 41.06667066666667,
                        x: 387.89572,
                        y: 110.462326,
                        attributes: { modularity_class: 8 },
                        value: 61.600006,
                        label: { normal: { show: true } },
                        category: 8
                    },
                    {
                        id: '49',
                        name: 'Gillenormand',
                        itemStyle: null,
                        symbolSize: 13.638097333333334,
                        x: 126.4831,
                        y: 68.10622,
                        attributes: { modularity_class: 6 },
                        value: 20.457146,
                        label: { normal: { show: false } },
                        category: 6
                    },
                    {
                        id: '50',
                        name: 'Magnon',
                        itemStyle: null,
                        symbolSize: 4.495239333333333,
                        x: 127.07365,
                        y: -113.05923,
                        attributes: { modularity_class: 6 },
                        value: 6.742859,
                        label: { normal: { show: false } },
                        category: 6
                    },
                    {
                        id: '51',
                        name: 'MlleGillenormand',
                        itemStyle: null,
                        symbolSize: 13.638097333333334,
                        x: 162.63559,
                        y: 117.6565,
                        attributes: { modularity_class: 6 },
                        value: 20.457146,
                        label: { normal: { show: false } },
                        category: 6
                    },
                    {
                        id: '52',
                        name: 'MmePontmercy',
                        itemStyle: null,
                        symbolSize: 4.495239333333333,
                        x: 353.66415,
                        y: -205.89165,
                        attributes: { modularity_class: 6 },
                        value: 6.742859,
                        label: { normal: { show: false } },
                        category: 6
                    },
                    {
                        id: '53',
                        name: 'MlleVaubois',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: 165.43939,
                        y: 339.7736,
                        attributes: { modularity_class: 6 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 6
                    },
                    {
                        id: '54',
                        name: 'LtGillenormand',
                        itemStyle: null,
                        symbolSize: 8.152382000000001,
                        x: 137.69348,
                        y: 196.1069,
                        attributes: { modularity_class: 6 },
                        value: 12.228573,
                        label: { normal: { show: false } },
                        category: 6
                    },
                    {
                        id: '55',
                        name: 'Marius',
                        itemStyle: null,
                        symbolSize: 35.58095333333333,
                        x: 206.44687,
                        y: -13.805411,
                        attributes: { modularity_class: 6 },
                        value: 53.37143,
                        label: { normal: { show: true } },
                        category: 6
                    },
                    {
                        id: '56',
                        name: 'BaronessT',
                        itemStyle: null,
                        symbolSize: 4.495239333333333,
                        x: 194.82993,
                        y: 224.78036,
                        attributes: { modularity_class: 6 },
                        value: 6.742859,
                        label: { normal: { show: false } },
                        category: 6
                    },
                    {
                        id: '57',
                        name: 'Mabeuf',
                        itemStyle: null,
                        symbolSize: 20.95238266666667,
                        x: 597.6618,
                        y: 135.18481,
                        attributes: { modularity_class: 8 },
                        value: 31.428574,
                        label: { normal: { show: false } },
                        category: 8
                    },
                    {
                        id: '58',
                        name: 'Enjolras',
                        itemStyle: null,
                        symbolSize: 28.266666666666666,
                        x: 355.78366,
                        y: -74.882454,
                        attributes: { modularity_class: 8 },
                        value: 42.4,
                        label: { normal: { show: false } },
                        category: 8
                    },
                    {
                        id: '59',
                        name: 'Combeferre',
                        itemStyle: null,
                        symbolSize: 20.95238266666667,
                        x: 515.2961,
                        y: -46.167564,
                        attributes: { modularity_class: 8 },
                        value: 31.428574,
                        label: { normal: { show: false } },
                        category: 8
                    },
                    {
                        id: '60',
                        name: 'Prouvaire',
                        itemStyle: null,
                        symbolSize: 17.295237333333333,
                        x: 614.29285,
                        y: -69.3104,
                        attributes: { modularity_class: 8 },
                        value: 25.942856,
                        label: { normal: { show: false } },
                        category: 8
                    },
                    {
                        id: '61',
                        name: 'Feuilly',
                        itemStyle: null,
                        symbolSize: 20.95238266666667,
                        x: 550.1917,
                        y: -128.17537,
                        attributes: { modularity_class: 8 },
                        value: 31.428574,
                        label: { normal: { show: false } },
                        category: 8
                    },
                    {
                        id: '62',
                        name: 'Courfeyrac',
                        itemStyle: null,
                        symbolSize: 24.609526666666667,
                        x: 436.17184,
                        y: -12.7286825,
                        attributes: { modularity_class: 8 },
                        value: 36.91429,
                        label: { normal: { show: false } },
                        category: 8
                    },
                    {
                        id: '63',
                        name: 'Bahorel',
                        itemStyle: null,
                        symbolSize: 22.780953333333333,
                        x: 602.55225,
                        y: 16.421427,
                        attributes: { modularity_class: 8 },
                        value: 34.17143,
                        label: { normal: { show: false } },
                        category: 8
                    },
                    {
                        id: '64',
                        name: 'Bossuet',
                        itemStyle: null,
                        symbolSize: 24.609526666666667,
                        x: 455.81955,
                        y: -115.45826,
                        attributes: { modularity_class: 8 },
                        value: 36.91429,
                        label: { normal: { show: false } },
                        category: 8
                    },
                    {
                        id: '65',
                        name: 'Joly',
                        itemStyle: null,
                        symbolSize: 22.780953333333333,
                        x: 516.40784,
                        y: 47.242233,
                        attributes: { modularity_class: 8 },
                        value: 34.17143,
                        label: { normal: { show: false } },
                        category: 8
                    },
                    {
                        id: '66',
                        name: 'Grantaire',
                        itemStyle: null,
                        symbolSize: 19.12381,
                        x: 646.4313,
                        y: -151.06331,
                        attributes: { modularity_class: 8 },
                        value: 28.685715,
                        label: { normal: { show: false } },
                        category: 8
                    },
                    {
                        id: '67',
                        name: 'MotherPlutarch',
                        itemStyle: null,
                        symbolSize: 2.6666666666666665,
                        x: 668.9568,
                        y: 204.65488,
                        attributes: { modularity_class: 8 },
                        value: 4,
                        label: { normal: { show: false } },
                        category: 8
                    },
                    {
                        id: '68',
                        name: 'Gueulemer',
                        itemStyle: null,
                        symbolSize: 19.12381,
                        x: 78.4799,
                        y: -347.15146,
                        attributes: { modularity_class: 7 },
                        value: 28.685715,
                        label: { normal: { show: false } },
                        category: 7
                    },
                    {
                        id: '69',
                        name: 'Babet',
                        itemStyle: null,
                        symbolSize: 19.12381,
                        x: 150.35959,
                        y: -298.50797,
                        attributes: { modularity_class: 7 },
                        value: 28.685715,
                        label: { normal: { show: false } },
                        category: 7
                    },
                    {
                        id: '70',
                        name: 'Claquesous',
                        itemStyle: null,
                        symbolSize: 19.12381,
                        x: 137.3717,
                        y: -410.2809,
                        attributes: { modularity_class: 7 },
                        value: 28.685715,
                        label: { normal: { show: false } },
                        category: 7
                    },
                    {
                        id: '71',
                        name: 'Montparnasse',
                        itemStyle: null,
                        symbolSize: 17.295237333333333,
                        x: 234.87747,
                        y: -400.85983,
                        attributes: { modularity_class: 7 },
                        value: 25.942856,
                        label: { normal: { show: false } },
                        category: 7
                    },
                    {
                        id: '72',
                        name: 'Toussaint',
                        itemStyle: null,
                        symbolSize: 6.323809333333333,
                        x: 40.942253,
                        y: 113.78272,
                        attributes: { modularity_class: 1 },
                        value: 9.485714,
                        label: { normal: { show: false } },
                        category: 1
                    },
                    {
                        id: '73',
                        name: 'Child1',
                        itemStyle: null,
                        symbolSize: 4.495239333333333,
                        x: 437.939,
                        y: 291.58234,
                        attributes: { modularity_class: 8 },
                        value: 6.742859,
                        label: { normal: { show: false } },
                        category: 8
                    },
                    {
                        id: '74',
                        name: 'Child2',
                        itemStyle: null,
                        symbolSize: 4.495239333333333,
                        x: 466.04922,
                        y: 283.3606,
                        attributes: { modularity_class: 8 },
                        value: 6.742859,
                        label: { normal: { show: false } },
                        category: 8
                    },
                    {
                        id: '75',
                        name: 'Brujon',
                        itemStyle: null,
                        symbolSize: 13.638097333333334,
                        x: 238.79364,
                        y: -314.06345,
                        attributes: { modularity_class: 7 },
                        value: 20.457146,
                        label: { normal: { show: false } },
                        category: 7
                    },
                    {
                        id: '76',
                        name: 'MmeHucheloup',
                        itemStyle: null,
                        symbolSize: 13.638097333333334,
                        x: 712.18353,
                        y: 4.8131495,
                        attributes: { modularity_class: 8 },
                        value: 20.457146,
                        label: { normal: { show: false } },
                        category: 8
                    }
                ],
                links: [
                    {
                        id: '0',
                        name: null,
                        source: '1',
                        target: '0',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '1',
                        name: null,
                        source: '2',
                        target: '0',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '2',
                        name: null,
                        source: '3',
                        target: '0',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '3',
                        name: null,
                        source: '3',
                        target: '2',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '4',
                        name: null,
                        source: '4',
                        target: '0',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '5',
                        name: null,
                        source: '5',
                        target: '0',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '6',
                        name: null,
                        source: '6',
                        target: '0',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '7',
                        name: null,
                        source: '7',
                        target: '0',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '8',
                        name: null,
                        source: '8',
                        target: '0',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '9',
                        name: null,
                        source: '9',
                        target: '0',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '13',
                        name: null,
                        source: '11',
                        target: '0',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '11',
                        target: '2',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '11',
                        name: null,
                        source: '11',
                        target: '3',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '10',
                        name: null,
                        source: '11',
                        target: '10',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '14',
                        name: null,
                        source: '12',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '15',
                        name: null,
                        source: '13',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '16',
                        name: null,
                        source: '14',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '17',
                        name: null,
                        source: '15',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '18',
                        name: null,
                        source: '17',
                        target: '16',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '19',
                        name: null,
                        source: '18',
                        target: '16',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '20',
                        name: null,
                        source: '18',
                        target: '17',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '21',
                        name: null,
                        source: '19',
                        target: '16',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '22',
                        name: null,
                        source: '19',
                        target: '17',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '23',
                        name: null,
                        source: '19',
                        target: '18',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '24',
                        name: null,
                        source: '20',
                        target: '16',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '25',
                        name: null,
                        source: '20',
                        target: '17',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '26',
                        name: null,
                        source: '20',
                        target: '18',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '27',
                        name: null,
                        source: '20',
                        target: '19',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '28',
                        name: null,
                        source: '21',
                        target: '16',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '29',
                        name: null,
                        source: '21',
                        target: '17',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '30',
                        name: null,
                        source: '21',
                        target: '18',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '31',
                        name: null,
                        source: '21',
                        target: '19',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '32',
                        name: null,
                        source: '21',
                        target: '20',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '33',
                        name: null,
                        source: '22',
                        target: '16',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '34',
                        name: null,
                        source: '22',
                        target: '17',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '35',
                        name: null,
                        source: '22',
                        target: '18',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '36',
                        name: null,
                        source: '22',
                        target: '19',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '37',
                        name: null,
                        source: '22',
                        target: '20',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '38',
                        name: null,
                        source: '22',
                        target: '21',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '47',
                        name: null,
                        source: '23',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '46',
                        name: null,
                        source: '23',
                        target: '12',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '39',
                        name: null,
                        source: '23',
                        target: '16',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '40',
                        name: null,
                        source: '23',
                        target: '17',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '41',
                        name: null,
                        source: '23',
                        target: '18',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '42',
                        name: null,
                        source: '23',
                        target: '19',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '43',
                        name: null,
                        source: '23',
                        target: '20',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '44',
                        name: null,
                        source: '23',
                        target: '21',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '45',
                        name: null,
                        source: '23',
                        target: '22',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '24',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '48',
                        name: null,
                        source: '24',
                        target: '23',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '52',
                        name: null,
                        source: '25',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '51',
                        name: null,
                        source: '25',
                        target: '23',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '50',
                        name: null,
                        source: '25',
                        target: '24',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '26',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '26',
                        target: '16',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '53',
                        name: null,
                        source: '26',
                        target: '24',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '56',
                        name: null,
                        source: '26',
                        target: '25',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '57',
                        name: null,
                        source: '27',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '58',
                        name: null,
                        source: '27',
                        target: '23',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '27',
                        target: '24',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '59',
                        name: null,
                        source: '27',
                        target: '25',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '61',
                        name: null,
                        source: '27',
                        target: '26',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '62',
                        name: null,
                        source: '28',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '63',
                        name: null,
                        source: '28',
                        target: '27',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '66',
                        name: null,
                        source: '29',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '64',
                        name: null,
                        source: '29',
                        target: '23',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '65',
                        name: null,
                        source: '29',
                        target: '27',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '67',
                        name: null,
                        source: '30',
                        target: '23',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '31',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '31',
                        target: '23',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '31',
                        target: '27',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '68',
                        name: null,
                        source: '31',
                        target: '30',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '72',
                        name: null,
                        source: '32',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '73',
                        name: null,
                        source: '33',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '74',
                        name: null,
                        source: '33',
                        target: '27',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '75',
                        name: null,
                        source: '34',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '76',
                        name: null,
                        source: '34',
                        target: '29',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '77',
                        name: null,
                        source: '35',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '35',
                        target: '29',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '78',
                        name: null,
                        source: '35',
                        target: '34',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '82',
                        name: null,
                        source: '36',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '83',
                        name: null,
                        source: '36',
                        target: '29',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '80',
                        name: null,
                        source: '36',
                        target: '34',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '81',
                        name: null,
                        source: '36',
                        target: '35',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '87',
                        name: null,
                        source: '37',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '88',
                        name: null,
                        source: '37',
                        target: '29',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '84',
                        name: null,
                        source: '37',
                        target: '34',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '85',
                        name: null,
                        source: '37',
                        target: '35',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '86',
                        name: null,
                        source: '37',
                        target: '36',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '93',
                        name: null,
                        source: '38',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '94',
                        name: null,
                        source: '38',
                        target: '29',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '89',
                        name: null,
                        source: '38',
                        target: '34',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '90',
                        name: null,
                        source: '38',
                        target: '35',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '91',
                        name: null,
                        source: '38',
                        target: '36',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '92',
                        name: null,
                        source: '38',
                        target: '37',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '95',
                        name: null,
                        source: '39',
                        target: '25',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '96',
                        name: null,
                        source: '40',
                        target: '25',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '97',
                        name: null,
                        source: '41',
                        target: '24',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '98',
                        name: null,
                        source: '41',
                        target: '25',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '101',
                        name: null,
                        source: '42',
                        target: '24',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '100',
                        name: null,
                        source: '42',
                        target: '25',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '99',
                        name: null,
                        source: '42',
                        target: '41',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '102',
                        name: null,
                        source: '43',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '103',
                        name: null,
                        source: '43',
                        target: '26',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '104',
                        name: null,
                        source: '43',
                        target: '27',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '44',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '105',
                        name: null,
                        source: '44',
                        target: '28',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '107',
                        name: null,
                        source: '45',
                        target: '28',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '108',
                        name: null,
                        source: '47',
                        target: '46',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '112',
                        name: null,
                        source: '48',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '110',
                        name: null,
                        source: '48',
                        target: '25',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '111',
                        name: null,
                        source: '48',
                        target: '27',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '109',
                        name: null,
                        source: '48',
                        target: '47',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '49',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '113',
                        name: null,
                        source: '49',
                        target: '26',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '50',
                        target: '24',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '115',
                        name: null,
                        source: '50',
                        target: '49',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '119',
                        name: null,
                        source: '51',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '118',
                        name: null,
                        source: '51',
                        target: '26',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '117',
                        name: null,
                        source: '51',
                        target: '49',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '52',
                        target: '39',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '120',
                        name: null,
                        source: '52',
                        target: '51',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '122',
                        name: null,
                        source: '53',
                        target: '51',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '125',
                        name: null,
                        source: '54',
                        target: '26',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '124',
                        name: null,
                        source: '54',
                        target: '49',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '123',
                        name: null,
                        source: '54',
                        target: '51',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '131',
                        name: null,
                        source: '55',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '132',
                        name: null,
                        source: '55',
                        target: '16',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '133',
                        name: null,
                        source: '55',
                        target: '25',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '55',
                        target: '26',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '128',
                        name: null,
                        source: '55',
                        target: '39',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '134',
                        name: null,
                        source: '55',
                        target: '41',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '135',
                        name: null,
                        source: '55',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '127',
                        name: null,
                        source: '55',
                        target: '49',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '126',
                        name: null,
                        source: '55',
                        target: '51',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '129',
                        name: null,
                        source: '55',
                        target: '54',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '136',
                        name: null,
                        source: '56',
                        target: '49',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '137',
                        name: null,
                        source: '56',
                        target: '55',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '57',
                        target: '41',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '57',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '138',
                        name: null,
                        source: '57',
                        target: '55',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '145',
                        name: null,
                        source: '58',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '58',
                        target: '27',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '142',
                        name: null,
                        source: '58',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '141',
                        name: null,
                        source: '58',
                        target: '55',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '144',
                        name: null,
                        source: '58',
                        target: '57',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '148',
                        name: null,
                        source: '59',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '147',
                        name: null,
                        source: '59',
                        target: '55',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '59',
                        target: '57',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '146',
                        name: null,
                        source: '59',
                        target: '58',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '150',
                        name: null,
                        source: '60',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '151',
                        name: null,
                        source: '60',
                        target: '58',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '152',
                        name: null,
                        source: '60',
                        target: '59',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '153',
                        name: null,
                        source: '61',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '158',
                        name: null,
                        source: '61',
                        target: '55',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '157',
                        name: null,
                        source: '61',
                        target: '57',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '154',
                        name: null,
                        source: '61',
                        target: '58',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '156',
                        name: null,
                        source: '61',
                        target: '59',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '155',
                        name: null,
                        source: '61',
                        target: '60',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '164',
                        name: null,
                        source: '62',
                        target: '41',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '162',
                        name: null,
                        source: '62',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '159',
                        name: null,
                        source: '62',
                        target: '55',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '62',
                        target: '57',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '160',
                        name: null,
                        source: '62',
                        target: '58',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '161',
                        name: null,
                        source: '62',
                        target: '59',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '62',
                        target: '60',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '165',
                        name: null,
                        source: '62',
                        target: '61',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '63',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '174',
                        name: null,
                        source: '63',
                        target: '55',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '63',
                        target: '57',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '63',
                        target: '58',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '167',
                        name: null,
                        source: '63',
                        target: '59',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '63',
                        target: '60',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '172',
                        name: null,
                        source: '63',
                        target: '61',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '169',
                        name: null,
                        source: '63',
                        target: '62',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '184',
                        name: null,
                        source: '64',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '64',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '175',
                        name: null,
                        source: '64',
                        target: '55',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '183',
                        name: null,
                        source: '64',
                        target: '57',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '179',
                        name: null,
                        source: '64',
                        target: '58',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '182',
                        name: null,
                        source: '64',
                        target: '59',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '181',
                        name: null,
                        source: '64',
                        target: '60',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '180',
                        name: null,
                        source: '64',
                        target: '61',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '176',
                        name: null,
                        source: '64',
                        target: '62',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '178',
                        name: null,
                        source: '64',
                        target: '63',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '187',
                        name: null,
                        source: '65',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '194',
                        name: null,
                        source: '65',
                        target: '55',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '193',
                        name: null,
                        source: '65',
                        target: '57',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '65',
                        target: '58',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '192',
                        name: null,
                        source: '65',
                        target: '59',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '65',
                        target: '60',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '190',
                        name: null,
                        source: '65',
                        target: '61',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '188',
                        name: null,
                        source: '65',
                        target: '62',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '185',
                        name: null,
                        source: '65',
                        target: '63',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '186',
                        name: null,
                        source: '65',
                        target: '64',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '200',
                        name: null,
                        source: '66',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '196',
                        name: null,
                        source: '66',
                        target: '58',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '197',
                        name: null,
                        source: '66',
                        target: '59',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '203',
                        name: null,
                        source: '66',
                        target: '60',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '202',
                        name: null,
                        source: '66',
                        target: '61',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '198',
                        name: null,
                        source: '66',
                        target: '62',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '201',
                        name: null,
                        source: '66',
                        target: '63',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '195',
                        name: null,
                        source: '66',
                        target: '64',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '199',
                        name: null,
                        source: '66',
                        target: '65',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '204',
                        name: null,
                        source: '67',
                        target: '57',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '68',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '68',
                        target: '24',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '205',
                        name: null,
                        source: '68',
                        target: '25',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '208',
                        name: null,
                        source: '68',
                        target: '27',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '68',
                        target: '41',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '209',
                        name: null,
                        source: '68',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '213',
                        name: null,
                        source: '69',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '214',
                        name: null,
                        source: '69',
                        target: '24',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '211',
                        name: null,
                        source: '69',
                        target: '25',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '69',
                        target: '27',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '217',
                        name: null,
                        source: '69',
                        target: '41',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '216',
                        name: null,
                        source: '69',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '212',
                        name: null,
                        source: '69',
                        target: '68',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '221',
                        name: null,
                        source: '70',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '222',
                        name: null,
                        source: '70',
                        target: '24',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '218',
                        name: null,
                        source: '70',
                        target: '25',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '223',
                        name: null,
                        source: '70',
                        target: '27',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '224',
                        name: null,
                        source: '70',
                        target: '41',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '225',
                        name: null,
                        source: '70',
                        target: '58',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '220',
                        name: null,
                        source: '70',
                        target: '68',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '219',
                        name: null,
                        source: '70',
                        target: '69',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '230',
                        name: null,
                        source: '71',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '233',
                        name: null,
                        source: '71',
                        target: '25',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '226',
                        name: null,
                        source: '71',
                        target: '27',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '232',
                        name: null,
                        source: '71',
                        target: '41',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '71',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '228',
                        name: null,
                        source: '71',
                        target: '68',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '227',
                        name: null,
                        source: '71',
                        target: '69',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '229',
                        name: null,
                        source: '71',
                        target: '70',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '236',
                        name: null,
                        source: '72',
                        target: '11',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '234',
                        name: null,
                        source: '72',
                        target: '26',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '235',
                        name: null,
                        source: '72',
                        target: '27',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '237',
                        name: null,
                        source: '73',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '238',
                        name: null,
                        source: '74',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '239',
                        name: null,
                        source: '74',
                        target: '73',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '242',
                        name: null,
                        source: '75',
                        target: '25',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '244',
                        name: null,
                        source: '75',
                        target: '41',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: null,
                        name: null,
                        source: '75',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '241',
                        name: null,
                        source: '75',
                        target: '68',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '240',
                        name: null,
                        source: '75',
                        target: '69',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '245',
                        name: null,
                        source: '75',
                        target: '70',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '246',
                        name: null,
                        source: '75',
                        target: '71',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '252',
                        name: null,
                        source: '76',
                        target: '48',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '253',
                        name: null,
                        source: '76',
                        target: '58',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '251',
                        name: null,
                        source: '76',
                        target: '62',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '250',
                        name: null,
                        source: '76',
                        target: '63',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '247',
                        name: null,
                        source: '76',
                        target: '64',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '248',
                        name: null,
                        source: '76',
                        target: '65',
                        lineStyle: { normal: {} }
                    },
                    {
                        id: '249',
                        name: null,
                        source: '76',
                        target: '66',
                        lineStyle: { normal: {} }
                    }
                ]
            };
            this.option = {
                color: colorList.filter(item => item !== primary),
                series: [
                    {
                        name: 'Les Miserables',
                        type: 'graph',
                        layout: 'none',
                        data: graph.nodes,
                        links: graph.links,
                        categories: categories,
                        roam: false,
                        focusNodeAdjacency: true,
                        label: {
                            position: 'right',
                            formatter: '{b}'
                        },
                        lineStyle: {
                            color: 'source',
                            curveness: 0.3
                        },
                        emphasis: {
                            lineStyle: {
                                width: 3
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
