<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <Form-item label="项目编码" prop="code">
            <Input v-model="formValidate.code" placeholder="请输入项目编码"></Input>
        </Form-item>
        <Form-item label="项目名称" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入项目名称"></Input>
        </Form-item>
        <Form-item label="项目金额" prop="amount">
            <Input v-model="formValidate.amount" placeholder="请输入项目金额"></Input>
        </Form-item>
        <Form-item label="项目预计时间" prop="datePeriod">
            <Date-picker v-model="formValidate.datePeriod" format="yyyy/MM/dd" type="daterange" placement="bottom-start" placeholder="选择日期"
                         style="width: 200px"></Date-picker>
        </Form-item>
        <Form-item label="项目简介" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                   placeholder="请输入..."></Input>
        </Form-item>
        <Form-item label="项目参与人员" prop="persons">
            <Select v-model="formValidate.selectedPersons" multiple style="width:260px">
                <Option v-for="item in personList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
        </Form-item>
        <Form-item label="项目风险系数" prop="rate">
            <Rate allow-half v-model="formValidate.rate" show-text></Rate>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </Form-item>
    </Form>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data () {
            let validateCustom_price = (rule, value, callback) => {
                if (!isNaN(value)) {
                    let va = Number.parseFloat(value)
                    if (!(va >= 1 && va <= 20)) {
                        return callback(new Error("金额必须在1和20之间"));
                    }
                    callback()
                } else {
                    return callback(new Error("请输入数字"));
                }
            }

            return {
                openedTabName: "basic",
                personList: [
                    {
                        value: {code:'zhangsan',name:'张三'},
                        label: '张三'
                    },
                    {
                        value: {code:'lisi', name: '李四'},
                        label: '李四'
                    },
                    {
                        value: {code:'wangwu', name: '王五'},
                        label: '王五'
                    },
                    {
                        value: {code:'zhaoliu', name: '赵六'},
                        label: '赵六'
                    }
                ],
                ruleValidate: {
                    code: [
                        {required: true, message: '项目编码不能为空', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '项目名称不能为空', trigger: 'blur'},
                    ],
                    desc: [
                        {required: true, message: '请输入项目简介', trigger: 'blur'},
                        {type: 'string', min:1,max: 20, message: '介绍不能多于20个字符', trigger: 'blur'}
                    ],
                    amount: [
                        {required: true, message: '请输入项目金额', trigger: 'blur'},
                        {validator: validateCustom_price, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('addNewDataToTable', this.formValidate);
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
        computed:{
            ...mapGetters([
                'formValidate'
            ])
        }
    }
</script>
