<template id="pm">
    <div>
        <Form ref="form" :model="form" :rules="rule" inline>
            <Form-item>
                <Button type="info" shape="circle" @click="addNewPm">新建一个项目</Button>
            </Form-item>
            <Radio-group v-model="radioGroupValue" type="button" @on-change="filterState">
                <Radio label="all">全部</Radio>
                <Radio label="ready">准备中的项目</Radio>
                <Radio label="running">进行中的项目</Radio>
                <Radio label="completed">已完成的项目</Radio>
            </Radio-group>
            <Form-item prop="search">
                <Input type="text" v-model="form.search" placeholder="请输入搜索内容~" @on-enter="handleSubmit('form')">
                </Input>
            </Form-item>
        </Form>

        <Table :columns="columnsTable" :data="dataTable" ref="table"></Table>
        <br/>
        <Page :total="11" show-total :page-size="paginationPageSize" @on-change="pageChange" @on-page-size-change="pageSizeChange"></Page>

        <Modal v-model="modal_add" :title="modal_add_title" width="800"  @on-ok="ok_add" @on-cancel="cancel_add">
            <Pm_Add></Pm_Add>
            <div slot="footer"></div>
        </Modal>

        <Modal v-model="modal_detail" :title="modal_title" width="800" @on-ok="ok_detail" @on-cancel="cancel_detail">
            <Pm_Detail></Pm_Detail>
        </Modal>
        <ul>
            <li>
                <Pm_Test @increment="incrementTotal"></Pm_Test>
            </li>
            <li>
                <Pm_Test @increment="incrementTotal"></Pm_Test>
            </li>
        </ul>
    </div>
</template>
<style>
    .badge-ready{
        background: #f58220 !important;
    }

    .badge-running{
        background: green !important;
    }

    .badge-completed {
        background: grey !important;
    }
</style>
<script>
    import {mapActions, mapGetters} from 'vuex';

    import Pm_Detail from './Pm_Detail.vue';
    import Pm_Add from './Pm_Add.vue';
    import Pm_Test from './Pm_emit.vue';

    export default{
        data: function () {
            return {
                total: 0,
                paginationPageSize:"5",
                radioGroupValue:"all",
                modal_detail: false,
                modal_title: "Pm_Detail",
                modal_add_title: "Pm_Add",
                columnsTable: [
                    {
                        "title": "项目编号",
                        "key": "code",
                        "fixed": "left",
                        "width": 150
                    },
                    {
                        "title": "项目名称",
                        "key": "name",
                        "fixed": "left",
                        "width": 150
                    },
                    {
                        "title": "项目负责人",
                        "key": "responsible",
                        "width": 147
                    },
                    {
                        "title": "项目预期时间段",
                        "key": "datePeriod",
                        "width": 200
                    },
                    {
                        "title": "项目评分",
                        "width": 230,
                        "key": "rate",
                        render (row, column, index) {
                            return `<Rate allow-half disabled value="${row.rate}" show-text><span style="color: #f5a623">${row.rate}</span></Rate>`;
                        }
                    },
                    {
                        "title": "项目状态",
                        "width": 150,
                        "key": "state",
                        render (row, column, index) {
                            if(row["state"]=="ready"){
                                return '<Badge count="项目准备中" class-name="badge-ready"></Badge>'
                            }else if(row["state"] == "running"){
                                return '<Badge count="项目进行中" class-name="badge-running"></Badge>'
                            }else if(row["state"] == "completed"){
                                return '<Badge count="项目已完成" class-name="badge-completed"></Badge>'
                            }
                        }
                    },
                    {
                        "title": "操作",
                        "width": 150,
                        render (row, column, index) {
                            var rowStr = JSON.stringify(row);
                            rowStr = encodeURI(rowStr);
                            return `<i-button type="primary" size="small" @click="detail('${rowStr}')">查看</i-button>`;
                        }
                    }
                ],
                copy_dataTable: [
                    {
                        "code": "PROJECT_T_1",
                        "name": "项目T_1",
                        "responsible": "张三",
                        "datePeriod": "2012/02/11-2013/09/08",
                        "rate": '3.8',
                        "state": "ready"
                    },
                    {
                        "code": "PROJECT_T_2",
                        "name": "项目T_2",
                        "responsible": "李四",
                        "datePeriod": "2012/03/23-2013/11/01",
                        "rate": '4.5',
                        "state": "running"
                    },
                    {
                        "code": "PROJECT_T_3",
                        "name": "项目T_3",
                        "responsible": "王五",
                        "datePeriod": "2014/01/12-2016/10/09",
                        "rate": '1.2',
                        "state": "running"
                    },
                    {
                        "code": "PROJECT_T_4",
                        "name": "项目T_4",
                        "responsible": "赵六",
                        "datePeriod": "2015/07/08-2017/01/05",
                        "rate": '3.6',
                        "state": "running"
                    },
                    {
                        "code": "PROJECT_T_5",
                        "name": "项目T_5",
                        "responsible": "孙七",
                        "datePeriod": "2013/05/22-2014/02/02",
                        "rate": '4.2',
                        "state": "completed"
                    },
                    {
                        "code": "PROJECT_T_6",
                        "name": "项目T_6",
                        "responsible": "王大",
                        "datePeriod": "2010/04/21-2012/01/22",
                        "rate": '2.7',
                        "state": "completed"
                    },
                    {
                        "code": "PROJECT_T_7",
                        "name": "项目T_7",
                        "responsible": "王大",
                        "datePeriod": "2010/04/21-2012/01/22",
                        "rate": '2.7',
                        "state": "completed"
                    },
                    {
                        "code": "PROJECT_T_8",
                        "name": "项目T_8",
                        "responsible": "王大",
                        "datePeriod": "2010/04/21-2012/01/22",
                        "rate": '2.7',
                        "state": "completed"
                    },
                    {
                        "code": "PROJECT_T_9",
                        "name": "项目T_9",
                        "responsible": "王大",
                        "datePeriod": "2010/04/21-2012/01/22",
                        "rate": '2.7',
                        "state": "completed"
                    },
                    {
                        "code": "PROJECT_T_10",
                        "name": "项目T_10",
                        "responsible": "王大",
                        "datePeriod": "2010/04/21-2012/01/22",
                        "rate": '2.7',
                        "state": "completed"
                    },
                    {
                        "code": "PROJECT_T_11",
                        "name": "项目T_11",
                        "responsible": "王大",
                        "datePeriod": "2010/04/21-2012/01/22",
                        "rate": '2.7',
                        "state": "completed"
                    }
                ],
                form: {
                    search: ""
                },
                rule: {
                    search: [
                        {required: false, min: 2, message: "最少2个字符", trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            incrementTotal: function () {
                this.total += 1
            },
            ok_add () {
                this.$store.dispatch('pm_add_showToggle');
                this.$Message.info('点击了确定_新增');
            },
            cancel_add () {
                this.$store.dispatch('pm_add_showToggle');
                this.$Message.info('点击了取消_新增');
            },
            ok_detail () {
                this.$Message.info('点击了确定_详细');
            },
            cancel_detail () {
                this.$Message.info('点击了取消_详细');
            },
            handleSubmit: function (form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功');
                    } else {
                        this.$Message.error('表单验证失败');
                    }
                })
            },
            addNewPm:function(){
                this.$store.dispatch('pm_add_showToggle');
                this.modal_add_title = "新增项目";
            },
            detail: function (row) {
                row = JSON.parse(decodeURI(row));
                this.modal_detail = true;
                this.modal_title = row["code"] + "  @@@  " + row["name"] + "（" + row["responsible"] + "）";
                this.$store.dispatch('pm_detail', row);
            },
            filterState:function(){
                this.$store.state.dataTable = this.copy_dataTable;
                if(this.radioGroupValue=="ready"){
                    var arr = this.$store.state.dataTable.filter((data, index) => {
                        return data.state == "ready";
                    });
                    this.$store.state.dataTable = arr;
                }else if(this.radioGroupValue == "running"){
                    var arr = this.$store.state.dataTable.filter((data, index) => {
                        return data.state == "running";
                    });
                    this.$store.state.dataTable = arr;
                }else if(this.radioGroupValue == "completed"){
                    var arr = this.$store.state.dataTable.filter((data, index) => {
                        return data.state == "completed";
                    });
                    this.$store.state.dataTable = arr;
                }else if(this.radioGroupValue == "all"){
                }
            }
            ,
            pageChange:function(pageNum){
                var arr = this.copy_dataTable.filter((data, index) => {
                    return index >= ((pageNum - 1) * parseInt(this.paginationPageSize))&&index < (pageNum * parseInt(this.paginationPageSize));
                });
                this.$store.state.dataTable = arr;
            },
            pageSizeChange:function(pageSize){

            }
            , ...mapActions([
                'loadTableData'
            ])
        },
        created:function(){
//          this.loadTableData({currentPage:1, pageSize:5});
            var arr = this.copy_dataTable.filter((data, index) => {
                return index < 5;
            });
            this.$store.state.dataTable = arr;
        },
        computed: {
            ...mapGetters([
                "modal_add","dataTable"
            ])
        },
        components: {
            Pm_Detail,Pm_Add,Pm_Test
        }
    }
</script>
