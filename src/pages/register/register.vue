<template>
    <transition name="slide">
        <div class="register">
            <div class="wrapper">
                <h1>Register</h1>
                <p>
                    <input type="text" placeholder="输入用户名" :class="{'err' : isUsernameError}" v-model="userName" @change="input1">
                    <span v-if='userNameSafe'>✔</span>
                    <transition name="slide">
                        <span v-if='isUsernameError' class="errTip">{{userNameMsg}}</span>
                    </transition>
                </p>

                <p>
                    <input type="password" placeholder="输入密码" :class="{'err' : isPasswordError}" v-model="passWord" @change="input2">
                    <span v-if='passWordSafe'>✔</span>
                    <transition name="slide">
                        <span v-if='isPasswordError' class="errTip">{{passWordMsg}}</span>
                    </transition>
                </p>
                <p>
                    <input type="password" placeholder="再次输入密码" :class="{'err' : isRePasswordError}" v-model="rePassWord" @change="input3">
                    <span v-if='rePassWordSafe'>✔</span>
                    <transition name="slide">
                        <span v-if='isRePasswordError' class="errTip">{{rePassWordMsg}}</span>
                    </transition>
                </p>
                <p>
                    <input type="text" placeholder="输入邮箱" :class="{'err' : isEmailError}" v-model="email" @change="input4">
                    <span v-if='emailSafe'>✔</span>
                    <transition name="slide">
                        <span v-if='isEmailError' class="errTip">{{emailMsg}}</span>
                    </transition>
                </p>
                <p>
                    <input type="text" placeholder="输入手机号" :class="{'err' : isPhoneError}" v-model="phone" @change="input5">
                    <span v-if='phoneSafe'>✔</span>
                    <transition name="slide">
                        <span v-if='isPhoneError' class="errTip">{{phoneMsg}}</span>
                    </transition>
                </p>
                <p>
                    <a href="##" class="btn" @click="Register">Register</a>
                </p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "register",
    data() {
        return {
            isUsernameError: false,
            userNameMsg: "",
            userNameSafe: false,
            userName: "",
            isPasswordError: false,
            passWordMsg: "",
            passWord: "",
            passWordSafe: false,
            rePassWord: "",
            rePassWordMsg: "",
            rePassWordSafe: false,
            isRePasswordError: false,
            email: "",
            isEmailError: false,
            emailSafe: false,
            emailMsg: "",
            phone: "",
            phoneMsg: "",
            isPhoneError: false,
            phoneSafe: false
        };
    },
    computed: {
        reg(){
            return this.userNameSafe && this.passWordSafe && this.rePassWordSafe && this.emailSafe && this.phoneSafe;
        }
    },
    methods: {
        input1() {
            this.checkUserName();
        },
        input2() {
            this.checkPassWord();
        },
        input3() {
            this.checkRePassWord();
        },
        input4() {
            this.checkEmail();
        },
        input5() {
            this.checkTel();
        },
        Register(){
            this.checkUserName();
            this.checkPassWord();
            this.checkRePassWord();
            this.checkEmail();
            this.checkTel();
            if(this.reg){
                console.log('222')
            }
        },
        checkUserName() {
            if (this.userName === "") {
                this.userNameMsg = "用户名不能为空";
                this.isUsernameError = true;
                this.userNameSafe = false;
                return false;
            }
            var pattern = /^[A-Za-z][A-Za-z0-9]{5,15}$/;
            if (!pattern.test(this.userName)) {
                this.userNameMsg =
                    "用户名格式错误，请输入6-15位用户名（首位为字母）";
                this.isUsernameError = true;
                this.userNameSafe = false;
                return false;
            }
            this.isUsernameError = false;
            this.userNameSafe = true;
            return true;
        },
        checkPassWord() {
            if (this.passWord === "") {
                this.passWordMsg = "密码不能为空";
                this.isPasswordError = true;
                this.passWordSafe = false;
                return false;
            }
            var pattern = /^[A-Za-z0-9]{6,16}$/;
            if (!pattern.test(this.passWord)) {
                this.passWordMsg = "密码不符合格式，请输入6-16位密码";
                this.isPasswordError = true;
                this.passWordSafe = false;
                return false;
            }
            this.isPasswordError = false;
            this.passWordSafe = true;
            return true;
        },
        checkRePassWord() {
            if (this.rePassWord === "") {
                this.rePassWordMsg = "重复密码不能为空";
                this.isRePasswordError = true;
                this.rePassWordSafe = false;
                return false;
            }
            if (this.rePassWord != this.passWord) {
                this.rePassWordMsg = "两次输入的密码不一致，请重新输入";
                this.isRePasswordError = true;
                this.rePassWordSafe = false;
                return false;
            }
            this.isRePasswordError = false;
            this.rePassWordSafe = true;
            return true;
        },
        checkEmail() {
            if (this.email === "") {
                this.emailMsg = "邮箱不能为空";
                this.isEmailError = true;
                this.emailSafe = false;
                return false;
            }
            var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if (!pattern.test(this.email)) {
                this.emailMsg = "邮箱格式错误，请重新输入";
                this.isEmailError = true;
                this.emailSafe = false;
                return false;
            }
            this.emailSafe = true;
            this.isEmailError = false;
            return true;
        },
        checkTel() {
            if (this.phone == 0) {
                this.phoneMsg = "手机号不能为空";
                this.isPhoneError = true;
                this.phoneSafe = false;
                return false;
            }
            var pattern = /^1[345789]\d{9}$/;
            if (!pattern.test(this.phone)) {
                this.phoneMsg = "手机号码格式错误，请重新输入";
                this.isPhoneError = true;
                this.phoneSafe = false;
                return false;
            }
            this.phoneSafe = true;
            this.isPhoneError = false;
            return true;
        }
    }
};
</script>

<style scoped lang="less">
@import "../../common/less/main.less";
.register {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #eee;
    .wrapper {
        width: 500px;
        height: 570px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -300px;
        margin-left: -250px;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 3px 16px -5px #070707;
        background: url("../../common/images/login-bg.jpg") no-repeat #fff;
        background-size: contain;
        padding-top: 30px;

        h1 {
            text-align: center;
            font-size: 36px;
            color: #fff;
            margin-bottom: 20px;
        }
        p {
            text-align: center;
            position: relative;
            margin-bottom: 36px;
            .errTip {
                font-size: 14px;
                color: red;
                text-align: left;
                display: block;
                position: absolute;
                padding-left: 40px;
                top: 50px;
            }
            input {
                width: 80%;
                line-height: 25px;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-size: 12px;
                &.err {
                    border-color: red;
                }
            }
            .btn {
                width: 80%;
                line-height: 25px;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-size: 12px;
                text-align: center;
                display: block;
                margin: 0 auto;
                background-color: #76e9d8;
                color: #fff;
                text-decoration: none;
            }
        }
    }
}
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translate3d(100%, 0, 0);
}
</style>

