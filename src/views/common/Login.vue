<template>
    <div
        style="width:960px; background-color:#ffffff;margin:0 auto;text-align:left;padding:50px 50px;"
    >
        <el-form ref="form" :model="formData" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input type="password" v-model="formData.pwd"></el-input>
            </el-form-item>
            <el-form-item label="保存密码">
                <el-switch v-model="formData.isSave"></el-switch>
            </el-form-item>
            <el-form-item label="联系人手机号：" prop="mobile" class="form-bottom">
                <el-input v-model="formData.tel" maxlength="11" placeholder="请输入企业联系人手机号"></el-input>
            </el-form-item>
            <!-- <el-form-item label="验证码：" prop="captcha" class="form-bottom">
                <el-input v-model="formData.code" placeholder="请输入验证码" class="form-left"></el-input>
                <div class="form-right">
                    <picture-verifier/>
                </div>
            </el-form-item> -->

            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button>注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
    


<script>
// import PictureVerifier from "../../components/common/PictureVerifier";
export default {
    // components: {
    //     //PictureVerifier
    // },
    data() {
        return {
            formData: {
                name: "",
                pwd: "",
                tel: "",
                code: "",
                isSave: false
            }
        };
    },
    methods: {
        async onSubmit() {
            console.log("submit!");
            let data = await this.$http.post('/login',{username:this.formData.name,password:this.formData.pwd});
            console.log('data：',data)
        }
    }
};
</script>