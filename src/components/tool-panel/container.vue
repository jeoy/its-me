<template>
    <div class="tool-panel">
        <div class="print-area area">
            <a-radio-group v-model="printOption">
                <a-radio :value="0">下载pdf</a-radio>
                <a-radio :value="1">打印简历</a-radio>
            </a-radio-group>
            <div>
                <a-button type="primary" @click="printResume">
                    打印简历
                </a-button>
            </div>
        </div>
        <theme-control></theme-control>
    </div>
</template>

<script>
import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';
import themeControl from './theme-control';

export default {
    components: {
        themeControl
    },
    data() {
        return {
            printOption: 0
        };
    },
    methods: {
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
                var pageHeight = (contentWidth / 592.28) * 841.89;
                var leftHeight = contentHeight;

                var position = 0;
                var imgWidth = 595.28;
                var imgHeight = (595.28 / contentWidth) * contentHeight;

                var pageData = canvas.toDataURL('image/jpeg', 1.0);
                var pdf = new JsPDF('', 'pt', 'a4');

                pdf.internal.scaleFactor = 1.33;
                if (leftHeight < pageHeight) {
                    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                } else {
                    while (leftHeight > 0) {
                        pdf.addImage(
                            pageData,
                            'JPEG',
                            0,
                            position + 0,
                            imgWidth,
                            imgHeight
                        );
                        leftHeight -= pageHeight;
                        position -= 841.89;

                        if (leftHeight > 0) {
                            pdf.addPage();
                        }
                    }
                }
                pdf.save(resumeName);
            });
        }
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
