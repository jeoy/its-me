<template>
    <div class="left-base">
        <div class="header">
            <div class="name flex-center">
                <p>{{resumeData.name}}</p>
            </div>
            <div class="age flex-center">
                <!-- <span>{{age}}</span> -->
                <i class="iconfont iconmale"></i>
                <!-- <span>{{gender}}</span> -->
            </div>
            <div class="education flex-center-column">
                <p>{{resumeData.bascialEducation.school}}</p>
                <p>{{resumeData.bascialEducation.major}}</p>
                <p>{{resumeData.bascialEducation.degree}}</p>
            </div>

            <div class="position flex-center-column">
                <p>申请职位</p>
                <p>{{resumeData.applyPosition}}</p>
            </div>
            <skill-progress :skills="resumeData.skillProgress"></skill-progress>
            <foot :contact="resumeData.contact"></foot>
        </div>
    </div>
</template>

<script>
import skillProgress from './skill-progress';
import foot from './foot';
import resumeData from '../../data/resumeData.json';

export default {
    name: 'left-base-info',
    components: {
        skillProgress,
        foot
    },
    data() {
        return {
            resumeData
        };
    },
    computed: {

    },
    created() {}
};
</script>

<style>
.left-base {
    background: #c3985d;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-center-column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.name {
    height: 80px;
    width: 100%;

    p {
        font-size: 60px;
        color: white;
    }
}

.age {
    height: 40px;
    font-size: 20px;

    span {
        margin-left: 10px;
        color: #936d3d;
    }

    i {
        font-size: 20px;
        margin-left: 5px;
        color: #936d3d;

    }
}

.education {
    padding: 8px;
    color: #835f2e;
    border-color: #835f2e55;
    border-style: solid;
    border-width: 2px 0 1px 0;
    margin: 0 30px 0 30px;

    p {
        font-size: 18px;

        +p {
            font-size: 14px;

            +p {
                font-size: 12px;
            }
        }
    }
}

.position {
    margin: 16px;
    color: #f6e2b9;
}

.intro {
    width: 100%;

    img {
        width: 80%;
    }
}
</style>
