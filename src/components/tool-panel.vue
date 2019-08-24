<template>
    <div class="tool-panel">
        <div class="print-area area">
            <a-radio-group v-model="printOption">
                <a-radio :value="0">下载pdf</a-radio>
                <a-radio :value="1">打印简历</a-radio>
            </a-radio-group>
            <div>
                <a-button type="primary" @click="printResume">打印简历</a-button>
            </div>
        </div>
        <div class="theme-area area">
            <a-button type="primary" @click="changeTheme">改变主题, try</a-button>
            <div> 自定义主题，施工中🚧</div>
        </div>
    </div>
</template>

<script>
import {
    updateAndtTheme,
    getIndexStyle
} from 'src/util/antd-colors';
import {
    generateTheme
} from 'src/util/theme';
import {
    mapActions,
    mapGetters
} from 'vuex';
import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';

export default {
    data() {
        return {
            originalStyle: '',
            printOption: 0,
            themes: ['#14a762', '#245697', '#a33c3c', '#248f97']
        };
    },
    computed: {
        ...mapGetters({
            currentTheme: 'currentTheme'
        })
    },
    methods: {
        ...mapActions({
            updateCurrentTheme: 'updateCurrentTheme'
        }),
        printResume() {
            if (this.printOption) {
                window.print();
            } else {
                this.generatePdf('ItsMe');
            }
        },
        generatePdf(resumeName) {
            const resumeDom = document.querySelector('.printable');
            html2canvas(resumeDom).then(function(canvas) {
                var contentWidth = canvas.width;
                var contentHeight = canvas.height;
                var pageHeight = contentWidth / 592.28 * 841.89;
                var leftHeight = contentHeight;

                var position = 0;
                var imgWidth = 595.28;
                var imgHeight = 595.28 / contentWidth * contentHeight;

                var pageData = canvas.toDataURL('image/jpeg', 1.0);
                var pdf = new JsPDF('', 'pt', 'a4');

                pdf.internal.scaleFactor = 1.33;
                if (leftHeight < pageHeight) {
                    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                } else {
                    while (leftHeight > 0) {
                        pdf.addImage(pageData, 'JPEG', 0, position + 0, imgWidth, imgHeight);
                        leftHeight -= pageHeight;
                        position -= 841.89;

                        if (leftHeight > 0) {
                            pdf.addPage();
                        }
                    }
                }
                pdf.save(resumeName);
            });
        },
        changeTheme() {
            const index = parseInt(Math.random() * this.themes.length);
            const primary = this.themes[index];
            this.updateNewTheme(primary);
            updateAndtTheme(primary, this.originalStyle);
        },
        updateNewTheme(primary) {
            this.updateCurrentTheme(primary);
            var themeColors = generateTheme(primary);
            Object.keys(themeColors).forEach(key => {
                document.documentElement.style.setProperty(key, themeColors[key]);
            });
        }
    },
    created() {
        this.updateNewTheme(this.currentTheme);
        getIndexStyle('//unpkg.com/antd@3.22.0/dist/antd.min.css').then(res => {
            this.originalStyle = res;
        });
    }
};
</script>

<style lang="scss">

.tool-panel {
    position: absolute;

    .area {
        padding: 12px;
        border: 1px dashed var(--primary-color);
        margin-bottom: 12px;
    }
}
</style>
