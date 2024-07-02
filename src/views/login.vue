<template>
    <div class="login-container">
        <el-container>
            <el-header class="login-header">
                <div>
                    <img src="../assets/etoak.png" width="200" height="50">
                </div>
                <div>
                    <span>首页</span>
                </div>
            </el-header>
            
            <el-main class="login-main">
                <el-card>
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="账号密码登录" name="first">

                            <el-form :model="loginForm" ref="loginForm" :rules="loginRules">

                                <el-form-item prop="username">
                                    <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
                                </el-form-item>

                                <el-form-item prop="password">
                                    <el-input v-model="loginForm.password" placeholder="请输入密码" show-password></el-input>
                                </el-form-item>

                                <el-form-item>
                                    <el-button type="warning" style="width: 100%;" @click="login">登录</el-button>
                                </el-form-item>

                            </el-form>

                        </el-tab-pane>

                        <el-tab-pane label="邮箱登录" name="second">
                            <el-form :model="emailForm" ref="emailForm">

                                <el-form-item>
                                    <el-input v-model="emailForm.email" placeholder="请输入邮箱"></el-input>
                                </el-form-item>

                                <el-form-item>
                                    <el-input v-model="emailForm.code" placeholder="请输入验证码"></el-input>
                                </el-form-item>

                                <el-form-item>
                                    <el-button type="warning" style="width: 100%;" @click="emailLogin">登录</el-button>
                                </el-form-item>

                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {},
        data() {
            return {
                activeName:'first',
                loginForm: {
                    username: null,
                    password: null,
                },
                emailForm: {
                    email: null,
                    code: null,
                },
                loginRules: {
                    username: [
                        {required: true,message:'请输入账号',trigger:'blur'}
                    ],
                    password: [
                        {required: true,message:'请输入密码',trigger:'blur'}
                    ],
                }
            };
        },
        watch: {},
        computed: {},
        methods: {
            login() {
                this.$message({
                    message: '恭喜您,登录成功',
                    type: 'success'
                });
                // 与上面等价
                // this.$message.success(恭喜您,登录成功)
            },
            emailLogin() {
                this.$message.success("恭喜您,登录成功")
            },
            

        },
        created() {},
        mounted() {}
    };
</script>
<style  scoped>
    .login-container{
        height: 100vh;
    }
    .login-header{
        height: 10vh;
        display:flex;      
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
    }
    .login-main{
        height: 90vh;
        background: url('../assets/background.jpg') no-repeat;
        background-position: center;
        background-size: cover;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-main .el-card {
        width: 400px;
        padding: 20px;
    }
</style>