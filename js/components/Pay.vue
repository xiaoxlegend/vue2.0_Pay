<template>
    <div class="wrapper">
        <Header></Header>
        <Navigation></Navigation>
        <Main></Main>
    </div>
</template>
<script>
    import Header from './header/Header';
    import Navigation from './navigation/Navigation'
    import Main from './main/Main';
    import $ from 'jquery';
    import jQuery from 'jquery';
    import initBootStrap from '../../resource/bootstrap/js/bootstrap.min.js'
    import initHomeApp from '../../resource/adminLTE/dist/js/app.min.js';

    export default {
        created() {
        },
        mounted:function(){
            initHomeApp($,jQuery);
            initBootStrap($,jQuery);
        },
        components:{
            Header,Navigation,Main
        }
    }
</script>
<style>
</style>