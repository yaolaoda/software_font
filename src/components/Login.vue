<template>
  <div id="Login">
    <layout>
      <header>
        <Navigition></Navigition>
      </header>
      <content style="background-color: #666666;padding-left: 330px;padding-top: 30px;padding-bottom: 30px">
        <div class="container">
          <Card :bordered="false">
            <h3 slot="title">用户登录</h3>
            <p></p>
            <div style="margin-top: 6px">
              用户名:
              <Input size="small" placeholder="Enter name" style="width: 150px">
                <Icon type="ios-contact" slot="prefix" />
              </Input><br>
            </div>
            <div style="margin-top: 10px">
              密   码:
              <Input size="small" placeholder="Enter name" style="width: 155px">
                <Icon type="md-lock" slot="prefix" />
              </Input>
            </div>
            <div style="margin-top: 10px;margin-left: 120px">
              <Button size="small" type="info" shape="circle" ghost>登录</Button>
              <a href="http://localhost:8080/#/Register" target="_blank">注册</a>
            </div>
          </Card>
        </div>
      </content>
      <Footer class="layout-footer-center" style="text-align: center;background-color: black">2011-2016 &copy; TalkingData</Footer>
    </layout>
  </div>
</template>
<script>
import Navigition from "./Navigition";
export default {
  components: {Navigition},
    data () {
    return {
      value: ''
    }
  }
}
</script>
<style type="text/css">
  .form-bg{
    background-color: #666666;
    height: 350px;
    width: 1080px;
    padding-left:350px ;
    padding-top: 40px;
    text-align: center;
  }
  .container{
    height: 250px;
    width: 300px;
    padding: 30px;
    background-color: #eee;
  }

</style>
