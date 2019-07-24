<template>
    <div class="ver-pic-box">
        <div
            :class="className"
            v-html="svg"
            :style="{ height: `${this.height}px` }"
            @click="loadPicVer"
        ></div>
    </div>
</template>

<script>
export default {
    props: {
        value: [Number, String],
        className: [String],
        refresh: [Number, String],
        /**
         * 图片宽度
         */
        width: {
            type: Number,
            default: 120
        },
        /**
         * 图片高度
         */
        height: {
            type: Number,
            default: 50
        }
    },
    data() {
        return {
            svg: ""
        };
    },
    watch: {
        refresh() {
            this.loadPicVer();
        }
    },
    methods: {
        /**
         * [loadPicVer 加载验证图片]
         * @return
         */
        loadPicVer() {
            this.$http
                .post("http://127.0.0.1:3000/jnbapi/service/captcha", {
                    width: this.width,
                    height: this.height - 10
                })
                .then(res => {
                    this.svg = res.data;
                })
                .catch(() => {});
            // getCaptcha({
            //     width: this.width,
            //     height: this.height - 10
            // })
            //     .then(res => {
            //         this.svg = res.data;
            //     })
            //     .catch(() => {});
        }
    },
    async mounted() {
        this.loadPicVer();
    }
};
</script>

<style scoped>
.ver-pic-box {
    cursor: pointer;
}
</style>
