<template>
    <div id="app">
        <header-bar></header-bar>
        <div class="content">
            <nav-bar></nav-bar>
            <div class="big-title">
                <h1>金融普惠 信用未来</h1>
                <i>为企业提供融资、查询审批等多项综合服务</i>
            </div>
            <router-view/>
        </div>
    </div>
</template>

<script>
import HeaderBar from "components/layout/HeaderBar.vue";
import NavBar from "components/layout/NavBar.vue";
export default {
    name: "app",
    components: {
        HeaderBar,
        NavBar
        // HelloWorld
    }
};
</script>

<style lang="scss">
.wd1200 {
    width: 1200px;
    margin: 0 auto;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #ffffff;
    font-size: 14px;
    background-color: black;
    header {
        width: 100%;
        // height: 640px;
        // border: 1px solid red;
        .tooltip {
            width: $wd1200;
            line-height: 40px;
            margin: 0 auto;
            height: 40px;
            font-size: 14px;
            color: white;
            text-align: left;

            ul {
                width: 888px;
                display: inline-block;
                text-align: right;
                li {
                    height: 40px;
                    display: inline-block;
                    margin-left: 45px;
                }
            }
        }
    }
    .content {
        width: 100%;
        background: url("./assets/images/index/banner.png") 50px 50px no-repeat;

        .big-title {
            width: $wd1200;
            color: #ffffff;
            margin: 0 auto;
            text-align: center;
            margin-top: 200px;
            h1 {
                font-size: 70px;
            }
            i {
                font-size: 16px;
                line-height: 80px;
            }
        }
        .nav-box {
            width: $wd1200;
            text-align: left;
            height: 50px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            margin: 0 auto;
            img {
                margin: 0;
                padding: 0;
                display: inline-block;
            }
            nav {
                margin: 0;
                padding: 0;
                width: 928px;

                display: inline-block;
                line-height: 50px;
                text-align: right;
                border: 0px solid red;
                a {
                    color: white;
                    text-decoration: none;
                    display: inline-block;
                    margin-left: 90px;
                    font-size: 16px;
                }
            }
        }
    }

    /* background: url('') */
}
</style>
