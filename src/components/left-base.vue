<template>
    <div class="left-base">
        <div class="header">
            <div class="name flex-center">
                <p>{{ resumeData.name }}</p>
            </div>
            <div class="age flex-center">
                <!-- <span>{{age}}</span> -->
                <i class="iconfont iconmale"></i>
                <!-- <span>{{gender}}</span> -->
            </div>
            <div class="education flex-center-column">
                <p>{{ resumeData.bascialEducation.school }}</p>
                <p>{{ resumeData.bascialEducation.major }}</p>
                <p>{{ resumeData.bascialEducation.degree }}</p>
            </div>

            <div class="position flex-center-column">
                <p>申请职位</p>
                <p>{{ resumeData.applyPosition }}</p>
            </div>
            <skill-progress :skills="resumeData.skillProgress"></skill-progress>
            <ability-wordcloud
                :ability="resumeData.abilityWordCloud"
            ></ability-wordcloud>
            <foot :contact="resumeData.contact"></foot>
        </div>
    </div>
</template>

<script>
import skillProgress from './skill-progress';
import foot from './foot';
import resumeData from '../../demo/demoData.json';
import abilityWordcloud from './ability-wordcloud';

export default {
    name: 'left-base-info',
    components: {
        skillProgress,
        abilityWordcloud,
        foot
    },
    data() {
        return {
            resumeData
        };
    },
    computed: {},
    created() {}
};
</script>
