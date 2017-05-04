<template>
    <aside id="navigation" class="main-sidebar">
        <section class="sidebar">
            <ul id="navUL" class="sidebar-menu">
                <li class="header">
                    <img width="40" height="40" style="margin-bottom: 10px"
                         src="../../../resource//AdminLTE/dist/img/user-default.png" id="userImage"  class="user-image img-circle" alt="用户头像">
                    <div style="padding-left: 5px;">
                        <div id="userName" style="font-size: 15px"></div>
                        <div id="userDeptName"></div>
                        <div id="mobileNo"></div>
                    </div>
                </li>
                <li>
                    <router-link :to="{ name: 'app1' }">
                        <i class="fa fa-th"></i> <span>主页</span>
                    </router-link>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-th"></i> <span>测试</span> <i class="fa fa-angle-left pull-right"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <router-link :to="{ name: 'app2' }"><i class="fa fa-th"></i>测试动态挂载</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'app3' }"><i class="fa fa-th"></i>计算属性相关</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'app4' }"><i class="fa fa-th"></i>管理页面3</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link :to="{ name: 'pm' }">
                        <i class="fa fa-th"></i> <span>项目管理</span>
                    </router-link>
                </li>
            </ul>
        </section>
    </aside>
</template>
<script>
    export default{
        data:function(){

        },
        methods:{
        }
    }
</script>