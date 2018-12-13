<template>
  <div id="commentC">
    <layout>
      <header>
        <navigition></navigition>
      </header>
      <content style="margin-top: 30px;align-self: center">
        <div style="background:#eee;padding: 20px;width: 180px;height: 180px;margin-left: 50px;float: left">
          <img src="./logo.png" height="150px" width="150px">
        </div>
        <div style="height: 100px;float: left;margin-left: 50px;margin-top: 10px">
          <h3>项目名称：数字红色延安</h3><br>
          <p>行业：地区：陕西省 延安市</p><br>
          <p>投资总额：12900万</p><br>
          <p>涉及行业：动漫,文化旅游,创意设计,文化装备制造</p><br>
        </div>
        <div>
          <Input v-model="value6" style="margin-top: 40px" type="textarea" :rows="4" placeholder="Enter something..." />
          <Button type="primary" style="margin-top: 40px">提交评价</Button>
        </div>
      </content>
      <Footer class="layout-footer-center" style="text-align: center;background-color: black;margin-top: 50px">2011-2016 &copy; TalkingData</Footer>
    </layout>
  </div>
</template>
<script>
  import Navigition from "./Navigition";
  export default {
    components: {Navigition}
  }
</script>
