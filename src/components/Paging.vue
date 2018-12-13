<template>
  <div id="Paging">
    <layout>
      <header>
        <navigition></navigition>
      </header>
      <content>
        <div style="width: 900px;height: 400px;margin-left: 50px;margin-top:40px">
          <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
            <img src="./logo.png" height="120px" width="140px">
            <br>项目名称《》
          </div>
          <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
            <img src="./logo.png" height="120px" width="140px">
            <br>项目名称《》
          </div>
          <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
            <img src="./logo.png" height="120px" width="140px">
            <br>项目名称《》
          </div>
          <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
            <img src="./logo.png" height="120px" width="140px">
            <br>项目名称《》
          </div>
          <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
            <img src="./logo.png" height="120px" width="140px">
            <br>项目名称《》
          </div>
          <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
            <img src="./logo.png" height="120px" width="140px">
            <br>项目名称《》
          </div>
          <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
            <img src="./logo.png" height="120px" width="140px">
            <br>项目名称《》
          </div>
          <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
            <img src="./logo.png" height="120px" width="140px">
            <br>项目名称《》
          </div>
        </div>
        <div style="float: bottom">
          <Page :current="2" :total="50" simple :size="small"/>
        </div>
      </content>
      <Footer class="layout-footer-center" style="text-align: center;background-color: black">2011-2016 &copy; TalkingData</Footer>
    </layout>
  </div>
</template>
<script>
  import Navigition from "./Navigition";
  export default {
    components: {Navigition}
  }
</script>
