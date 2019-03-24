<!--<template>
<div>
    <h1>{{ msg }}</h1>
</div>
</template>
 
<script>
export default {
    name: '登录',
    data() {
        return {
            msg: 'welcome login'
 
        }
        
    }
}</script>-->


<template>
<!--背景图-->
<!--login框，表单+tab标签页的组合-->

<div class = "loginFrame">
  <!-- <img src="../assets/logo1.png" style = "width:20%;"><br> -->
  <h1>中山大学校园招聘系统</h1>
  <label>账号:</label>
  <input type="text" name="账号">  <br>
  <label>密码:</label>
  <input type="password" name="密码">  <br>
  <div class="buttongroup">
      <button type="primary" v-model = "username">登录</button>
        
        <button type="submit" v-model = "password">注册</button> 
  </div>
   
</div>
</template>
 
<script>
export default {
    name: '登录',
    data() {
        return {
            logining : false,
            account : {
                username:'',
                password:'',
            },
            rules: {
                username :[
                    {required: true, message: '请输入账号',trigger: 'blur'},
                    //{ validator: validaePass }
                ],
                password: [
                    {required: true,message: '请输入密码', trigger: 'blur'},
                    //{ validator: validaePass2 }
                ]
            },
            checked: false
           
        };
        
    },
    methods(){
        
    }
}</script>
 
<style>
    


</style>


