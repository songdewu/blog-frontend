<template>
    <div class="nav-box">
        <img src="../../assets/images/logo.png" alt="首页">
        <nav>
            <router-link to="/">首页</router-link>
            <router-link to="/financial">信易融</router-link>
            <router-link to="/business">信易商</router-link>
            <router-link to="/query">信易查</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {};
    }
};
</script>


