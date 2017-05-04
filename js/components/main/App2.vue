<template id="app2">
    <div>
        <button @click="toshow">点击让子组件显示</button>
        <component :is="which_to_show"></component>
        <button @click="toApp5">点击进入App5</button>
        <button @click="toApp6">点击进入App6</button>
        <button @click="toApp7">点击进入App7</button>
        {{content}}
    </div>
</template>
<script>
    import axios from 'axios';
//    import {router} from '../../router/router';

    function loadAjax(self) {
        axios.post('http://119.253.164.1:8010/web/backendMemberRest/getInstitutionMemberDetail', {
            "channelCode": "guohuai",
            "memberId": "8a0be98c586c57f001586c66569c14f7"
        }).then(function (response) {
            var result = response.data;
            self.content = result.content;
        }).catch(function (error) {
            console.log(error);
        });
    }

    export default{
        data: function () {
            var data = {
                which_to_show: "first",
                content: "初始化"
            };
            return data;
        },
        mounted: function () {
            var self = this;
            loadAjax(self);
        },
        methods: {
            toshow() { //切换组件显示
                var arr = ["first", "second", "third"];
                var index = arr.indexOf(this.which_to_show);
                if (index < 2) {
                    this.which_to_show = arr[index + 1];
                } else {
                    this.which_to_show = arr[0];
                }
                console.log(this.$children);
            },
            toApp5(){
                this.$router.push({"name": "app5", params: {}});
            },
            toApp6(){
                this.$router.push({"name": "app6", params: {}});
            },
            toApp7(){
                this.$router.push({"name": "app7", params: {}});
            }
        },
        components: {
            first: { //第一个子组件
                template: "<div>这里是子组件1</div>"
            },
            second: { //第二个子组件
                template: "<div>这里是子组件2<span>{{hello}}</span></div>",
                data: function () {
                    var data = {hello: "Hello World"};
                    return data;
                }
            },
            third: { //第三个子组件
                template: "<div>这里是子组件3</div>"
            }
        }
    }
</script>