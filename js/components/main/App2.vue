<template id="app2">
    <div>
        <button @click="toshow">点击让子组件显示</button>
        <component :is="which_to_show"></component>
    </div>
</template>
<script>
    export default{
        data:function(){
            var data = {which_to_show: "first"};
            return data;
        },
        methods: {
            toshow() { //切换组件显示
                var arr = ["first", "second", "third"];
                var index = arr.indexOf(this.which_to_show);
                if (index < 2) {
                    this.which_to_show = arr[index+1];
                } else {
                    this.which_to_show = arr[0];
                }
                console.log(this.$children);
            }
        },
        components: {
            first: { //第一个子组件
                template: "<div>这里是子组件1</div>"
            },
            second: { //第二个子组件
                template: "<div>这里是子组件2<span>{{hello}}</span></div>",
                data:function(){
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