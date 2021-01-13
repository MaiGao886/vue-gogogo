<template>
    <div id="app" class="app-box">
        <!-- <router-link to="/home">home</router-link> -->

<!--        <button @click="show">show</button>-->
<!--        <img src="./assets/logo_0.png">-->
        <router-view/>
    </div>
</template>


<script>
    import {baseUrl} from "./util/http";
    import request from "./util/http";

    export default {
        methods: {
            show() {
                console.log(baseUrl);
                request.get('/user/userAll.do')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        // Error
                        if (error.response) {
                            /*
                             * The request was made and the server responded with a
                             * status code that falls out of the range of 2xx
                             */
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        } else if (error.request) {
                            /*
                             * 错误情况二：请求没有收到响应, 再浏览器环境下`error.request`是XMLHttpRequest实例，
                             * is an instance of XMLHttpRequest in the browser and an instance
                             * of http.ClientRequest in Node.js
                             */
                            console.log(error.request);
                        } else {
                            // Something happened in setting up the request and triggered an Error
                            console.log('Error', error.message);
                        }
                        console.log(error.config);
                    });

            },

        },
    };
</script>

<style lang="scss" scoped>
    .app-box{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100%;
        height: auto;
    }
</style>
