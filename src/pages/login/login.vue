<template>
    <div class="login">
        <div class="wrapper">
            <div class="hd">
                <div class="log-cloud cloud1"></div>
                <div class="log-cloud cloud2"></div>
                <div class="log-cloud cloud3"></div>
                <div class="log-cloud cloud4"></div>
                <h1>welcome!</h1>
            </div>
            <div class="bd">
                <transition name="slide">
                    <p v-if='isUsernameError||isPasswordError' class="errTip">用户名或密码不能为空</p>
                </transition>
                <p><input type="text" placeholder="Username" :class="{'err' : isUsernameError}" v-model="userName" @input="input1"></p>
                <p><input type="password" placeholder="Password" :class="{'err' : isPasswordError}" v-model="passWord" @input="input2"></p>
                <p>
                    <a href="##" @click="login" class="btn">Login</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            isUsernameError: false,
            isPasswordError: false,
            userName: "",
            passWord: ""
        };
    },
    methods: {
        login() {
            if (this.userName === "" && this.passWord === "") {
                this.isUsernameError = true;
                this.isPasswordError = true;
                return;
            } else if (this.userName === "") {
                this.isUsernameError = true;
                return;
            } else if (this.passWord === "") {
                this.isPasswordError = true;
                return;
            } else {
                console.log('dengl')
            }
        },
        input1() {
            if (this.userName === "") {
                this.isUsernameError = true;
            } else {
                this.isUsernameError = false;
            }
        },
        input2() {
            if (this.passWord === "") {
                this.isPasswordError = true;
            } else {
                this.isPasswordError = false;
            }
        }
    }
};
</script>

<style scoped lang="less">
@import "../../common/less/main.less";
.login {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #eee;
    .wrapper {
        width: 500px;
        height: 600px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -300px;
        margin-left: -250px;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 3px 16px -5px #070707;
        .hd {
            width: 100%;
            height: 320px;
            background: url("../../common/images/login-bg.jpg");
            background-size: 100% 100%;
            overflow: hidden;
            h1 {
                text-align: center;
                font-size: 36px;
                color: #fff;
                line-height: 320px;
            }
            .log-cloud {
                background-image: url(../../common/images/login-cloud.png);
                width: 63px;
                height: 40px;
                position: absolute;
                z-index: 1;
            }
        }
        .bd {
            background-color: #fff;
            height: 252px;
            padding-top: 28px;
            position: relative;
            .errTip {
                font-size: 14px;
                color: red;
                text-align: left;
                padding-left: 40px;
                margin-bottom: 10px;
                position: absolute;
                top: -8px;
            }
            p {
                text-align: center;
                input {
                    margin-bottom: 20px;
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
    .cloud1 {
        top: 21px;
        left: -30px;
        transform: scale(0.6);
        animation: cloud1 20s linear infinite;
    }
    .cloud2 {
        top: 87px;
        right: 20px;
        animation: cloud2 19s linear infinite;
    }
    .cloud3 {
        top: 160px;
        left: 5px;
        transform: scale(0.8);
        animation: cloud3 21s linear infinite;
    }
    .cloud4 {
        top: 150px;
        left: -40px;
        transform: scale(0.4);
        animation: cloud4 19s linear infinite;
    }
}
@-webkit-keyframes cloud1 {
    0% {
        left: 200px;
    }
    100% {
        left: -130px;
    }
}
@keyframes cloud1 {
    0% {
        left: 200px;
    }
    100% {
        left: -130px;
    }
}
@-webkit-keyframes cloud2 {
    0% {
        left: 500px;
    }
    100% {
        left: -90px;
    }
}
@keyframes cloud2 {
    0% {
        left: 500px;
    }
    100% {
        left: -90px;
    }
}
@-webkit-keyframes cloud3 {
    0% {
        left: 620px;
    }
    100% {
        left: -70px;
    }
}
@keyframes cloud3 {
    0% {
        left: 620px;
    }
    100% {
        left: -70px;
    }
}
@-webkit-keyframes cloud4 {
    0% {
        left: 100px;
    }
    100% {
        left: -70px;
    }
}
@keyframes cloud4 {
    0% {
        left: 100px;
    }
    100% {
        left: -70px;
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.2s ease;
}
.slide-enter,
.slide-leave-to {
    transform: translate3d(-100%, 0, 0);
}
</style>
