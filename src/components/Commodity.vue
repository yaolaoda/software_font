<style scoped>
  .content{
    margin-top: 30px;
  }
</style>
<template>
  <div id="Commodity">
    <layout>
      <header>
       <Navigition></Navigition>
      </header>
      <content>
        <div class="content">
          <div style="background:#eee;padding-top: 20px;padding-left: 150px">
            <Card style="width: 700px;align-self: center">
              <p slot="title">项目基本信息</p>
              <div style="height: 200px">
                <div style="background:#eee;padding: 20px;width: 180px;height: 180px;margin-left: 50px;float: left">

                  <img src="./logo.png" height="150px" width="150px">
                </div>
                <div style="height: 100px;float: left;margin-left: 50px;margin-top: 10px">
                  <h3>项目名称：数字红色延安</h3><br>
                  <p>行业：地区：陕西省 延安市</p><br>
                  <p>投资总额：12900万</p><br>
                  <p>涉及行业：动漫,文化旅游,创意设计,文化装备制造</p><br>
                  <Button type="error" size="small">购买</Button>
                  <Button type="error" size="small">收藏</Button>
                </div>
              </div>
              <Divider orientation="left">
                项目信息
              </Divider>
              <div style="margin-top: 30px;width: 600px;left: 500px;margin-left: 40px">
                <Table :columns="columns1" :data="data1" ></Table>
              </div>
            </Card>
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
        columns1: [
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    }
  }
</script>
