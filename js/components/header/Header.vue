<template>
    <header class="main-header">
        <a href="#" class="logo">
            <span class="logo-mini">iTPay</span>
        </a>
        <nav class="navbar navbar-static-top" role="navigation">
            <a href="#" id="sidebar-toggle-id" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>

            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li class="user user-menu" style="height: 50px">
                        <span style="color: #ffffff;line-height: 50px;padding-left: 10px;padding-right: 10px">It's Pay {{welcomeWordShow}}</span>
                    </li>
                    <li class="user user-menu">
                        <a @click="switchStaffOnlineState">
                            <i class="fa fa-sign-out"></i>
                            <span class="hidden-xs">注销{{staffOnlineState}}</span>
                        </a>
                    </li>
                    <li>
                        <a id="gearImg" href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';

    export default{
        data(){
            return {
            }
        },
        methods:{
            ...mapActions([
                'switchStaffOnlineState'
            ]),
            logOut(){
                alert(1);
            }
        },
        computed: {
            ...mapGetters([
                'staffOnlineState','welcomeWordShow'
            ])
        }
    }
</script>