<template>
    <div class="login" :style="bgImg">
        <div class="content">
            <button @click="goHome">主页</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",

        data() {
            return {
                bgImg: {}
            }
        },
        methods:{
            goHome() {
                this.$router.push({path: "/home",id:0 });
            },
        },
        created() {
            const randomBgIndex = parseInt(2 * Math.random());
            this.bgImg.backgroundImage = 'url(' + require('@images/logo_1.png') + ')';

        }

    }

</script>

<style scoped lang="css">
 .login{
     display: flex;
     justify-content: center;
     align-items: center;
     color: aliceblue;
     margin: 0 auto;
     padding-bottom: 50%;
 }
    .content{
    }
</style>
