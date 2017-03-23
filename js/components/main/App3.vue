<template id="app3">
    <div>
        <table style="width: 100%">
            <tr>
                <td>a</td>
                <td>b=a+1</td>
            </tr>
            <tr>
                <td>{{a}}</td>
                <td>{{b}}</td>
            </tr>
        </table>
        <button @click="add">a = a + 1</button>

        <input v-model="firstName"/>
        <input v-model="lastName"/>
        <input v-model="fullName"/>

        <div :class="{'green':firstColor,'red':secondColor}" style="width: 100px;height: 100px;"></div>
        <button @click="changeColor">改变颜色</button>

        <input v-model="input_text"/>
        <ul>
            <li v-for="(item,a_key) in items">
                {{a_key+1}} -- age:{{item.age}},name:{{item.name}}
            </li>
        </ul>
    </div>
</template>
<style>
    .green {
        background-color: green;
    }

    .red {
        background-color: red;
    }
</style>
<script>
    export default{
        data: function () {
            var data = {
                a: 1,
                firstName: "Ed",
                lastName: "Sheeran",
                firstColor: true,
                secondColor: false,
                input_text: "",
                items: [
                    {age: 11, name: "abc"},
                    {age: 22, name: "def"},
                    {age: 33, name: "ghi"}
                ]
            }
            return data;
        },
        methods: {
            add: function () {
                this.a++;
            },
            changeColor: function () {
                this.firstColor = !this.firstColor;
                this.secondColor = !this.secondColor;
            }
        },
        computed: {
            b: function () {
                return this.a + 1;
            },
            fullName: {
                get: function () {
                    return this.firstName + " " + this.lastName
                },
                set: function (newValue) {
                    var fullname = newValue.split(" ");
                    this.firstName = fullname[0];
                    this.lastName = fullname[1];
                }
            }
        },
        watch: {
            b: function (newVal, oldVal) {
                alert(oldVal + "→" + newVal)
            }
        }
    }
</script>