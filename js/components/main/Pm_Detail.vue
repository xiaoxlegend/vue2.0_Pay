<template>
    <div>
        <Steps :current="currentStep" status="process">
            <Step title="项目准备中" content="项目准备工作"></Step>
            <Step title="项目进行中" content="项目的实施工作"></Step>
            <Step title="项目已完成" content="项目完成，需要进行项目回顾"></Step>
        </Steps>

        <br>
        <Row>
            <Col span="12">
            <Tooltip placement="top">
                <label>项目编码：</label>
                <div slot="content">
                    这里是项目编码
                </div>
            </Tooltip>
            {{pmData["code"]}}
            </Col>
            <Col span="12">
            <Tooltip placement="top">
                <label>项目名称：</label>
                <div slot="content">
                    这里是项目名称
                </div>
            </Tooltip>
            {{pmData["name"]}}
            </Col>
        </Row>
        <br>
        <Row>
            <Col span="12">
            <Tooltip placement="top">
                <label>项目负责人：</label>
                <div slot="content">
                    这里是项目负责人
                </div>
            </Tooltip>
            {{pmData["responsible"]}}
            </Col>
            <Col span="12">
            <Tooltip placement="top">
                <label>项目预期时间：</label>
                <div slot="content">
                    这里是项目预期时间
                </div>
            </Tooltip>
            {{pmData["datePeriod"]}}
            </Col>
        </Row>
        <br>
        <Row>
            <Col span="24">
            <Tooltip placement="top">
                <label>项目评分：</label>
                <div slot="content">
                    这里是项目评分
                </div>
            </Tooltip>
            <Rate allow-half disabled :value="pmData['rate']" show-text><span
                    style="color: #f5a623">{{pmData["rate"]}}</span></Rate>
            </Col>
        </Row>
        <br>

        <Timeline>
            <Timeline-item color="red">
                <p class="time">2016.1.23</p>
                <p class="content_time">张三发起了本项目</p>
            </Timeline-item>
            <Timeline-item>
                <p class="time">2016.2.6</p>
                <p class="content_time">进行了项目调研</p>
            </Timeline-item>
            <Timeline-item>
                <p class="time">2016.3.15</p>
                <p class="content_time">项目需求整理完毕</p>
            </Timeline-item>
            <Timeline-item>
                <p class="time">2016.3.20</p>
                <p class="content_time">项目开始进入实施阶段，人员入场</p>
            </Timeline-item>
            <Timeline-item color="green">
                <Icon type="trophy" slot="dot"></Icon>
                <p class="time">2016.5.20</p>
                <p class="content_time">到达-项目里程碑1</p>
            </Timeline-item>
            <Timeline-item color="green">
                <Icon type="trophy" slot="dot"></Icon>
                <p class="time">2016.8.15</p>
                <p class="content_time">到达-项目里程碑2</p>
            </Timeline-item>
            <Timeline-item>
                <p class="time">2016.8.20</p>
                <p class="content_time">项目初验</p>
            </Timeline-item>
            <Timeline-item color="green">
                <Icon type="trophy" slot="dot"></Icon>
                <p class="time">2016.11.20</p>
                <p class="content_time">到达-项目里程碑3</p>
            </Timeline-item>
            <Timeline-item color="grey">
                <p class="time">2016.12.20</p>
                <p class="content_time">项目终验</p>
            </Timeline-item>
        </Timeline>
    </div>
</template>
<style scoped>
    .time {
        font-size: 14px;
        font-weight: bold;
    }

    .content_time {
        padding-left: 5px;
        height: 20px;
    }
</style>
<script>
    import {mapActions, mapGetters} from 'vuex';

    export default{
        data: function () {
            return {
            }
        },
        computed: {
            ...mapGetters([
                'pmData'
            ]),
            currentStep:function(){
                let pmState = this.pmData.state;
                let currentStep = 0;
                if (pmState == "ready") {
                    currentStep = 0;
                } else if (pmState == "running") {
                    currentStep = 1;
                } else if (pmState == "completed") {
                    currentStep = 2;
                }
                return currentStep;
            }
        }
    }
</script>
