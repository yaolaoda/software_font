<style scoped>
  .header{
    width: auto;
    height: 80px;
    background-color: #767271;
    margin: 0px;
    padding: 0px;
  }

  .header-top{
    width: auto;
    height: 50px;
  }

  .header-logo{
    width: 300px;
    height: 50px;
    background-color: brown;
    text-align: center;
    font-size: large;
    padding-top: 10px;
    color: azure;
  }

  .header-bottom{
    width: auto;
    height: 50px;
    background-color: #767271;
    padding-top: 10px;
  }
</style>
<template>
<div class="header">
  <layout>
    <header style="background-color: #767271">
      <div class="header-top">
        <layout style="background-color: black">
          <sider>
            <div class="header-logo">
              文化创意产业公共服务平台
            </div>
          </sider>
          <content style="padding-left: 100px">
            <Menu mode="horizontal" :theme="theme1" active-name="1" style="height: 50px;width: 750px;background-color: black">
              <MenuItem name="1" style="width: 180px;color: ghostwhite">
                <Icon type="ios-paper" />
                内容管理
              </MenuItem>
              <MenuItem name="2" style="width: 180px;color: ghostwhite">
                <Icon type="ios-people" />
                用户管理
              </MenuItem>
              <MenuItem name="4" style="width: 180px;color: ghostwhite">
                <Icon type="ios-construct" />
                综合设置
              </MenuItem>
              <MenuItem name="4" style="width: 180px;color: ghostwhite">
                <Icon type="ios-construct" />
                综合设置
              </MenuItem>
            </Menu>
          </content>
        </layout>
      </div>
      <div class="header-bottom">
        <layout  style="background-color: #767271">
          <sider style="padding-left: 600px;background-color: #767271">
            <Input style="width: 250px" size="small" search enter-button placeholder="Enter something..." />
          </sider>
          <content style="padding-left: 260px;padding-top: 2px">
            <Button type="error" size="small">登录</Button>
            <Button type="error" size="small">注册</Button>
          </content>
        </layout>
      </div>
    </header>
  </layout>
</div>
</template>
<script>
  import Navigition from './Navigition'
  export default {
    components: {
      Navigition
    }
  }
</script>
