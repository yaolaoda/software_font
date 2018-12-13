<template>
  <div id="Paging">
    <layout>
      <header>
        <navigition></navigition>
      </header>
      <content style="margin-top: 60px">
        <div style="background-color: lightgrey;width: 800px;height: 500px;margin-left: 100px;margin-bottom: 30px;float: left">
          <div style="background-color: brown;height: 40px;text-align: left;padding-top: 10px;padding-left: 15px">
            <h3>企业用户中心</h3>
          </div>
          <div style="margin-top: 30px;height: 400px">
            <div style="float: left">
              <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" style="width: 200px">
                <FormItem label="用户类型" prop="gender">
                  企业
                </FormItem>
                <FormItem label="姓名" prop="name">
                  ***
                </FormItem>
                <FormItem label="E-mail" prop="mail">
                  ***
                </FormItem>
                <FormItem label="QQ" prop="name">
                  ***
                </FormItem>
                <FormItem label="地址" prop="city">
                  ***
                </FormItem>
                <FormItem label="Desc" prop="desc">
                  ***
                </FormItem>
                <Button size="small" type="primary" @click="handleSubmit('formValidate')">修改</Button>
              </Form>
            </div>
            <div style="float: left;width: 588px;height: 30px">
              <Avatar icon="ios-person" size="large" /><br><br><br>
              <Button :size="buttonSize" icon="md-heart" type="primary" style="background-color: brown" shape="circle"></Button>
              <Button :size="buttonSize" icon="md-cart" type="primary" style="background-color: brown" shape="circle"></Button>
              <div style="padding-top: 40px">
                <Button long style="margin-top: 10px;width: 500px;margin-left: 20px">资讯信息</Button>
                <Button long style="margin-top: 10px;width: 500px;margin-left: 20px">展会信息</Button>
                <Button long style="margin-top: 10px;width: 500px;margin-left: 20px">供求信息</Button>
                <Button long style="margin-top: 10px;width: 500px;margin-left: 20px">查看留言</Button>
              </div>
            </div>
          </div>
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
        value2: '1',
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: ''
        }
      }
    }
  }
</script>

