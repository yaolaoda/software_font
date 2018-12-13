<style scoped>
  .content{
    margin-top: 30px;
  }
  .Tabs{
  }
  .layout{
    border: 1px solid #d7dde4;
    position: relative;
    border-radius: 1px;
    overflow: hidden;
  }

  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 10px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header  style="background-color: black;">

              <Menu mode="horizontal" theme="dark"  style="background-color: black;">

                <div class="layout-nav">
                  <menu-item name="1">
                    登录
                  </menu-item>
                  <menu-item name="2">
                    注册
                  </menu-item>
                  <menu-item name="3">
                    我的主页
                  </menu-item>
                </div>
              </Menu>

       </Header>
       <div style="background-color:#262626;width: 1900px"><div style="margin:0 auto;margin-top: 30px;"><h1><font color="#e6e6fa"  size="6px">文化创意产业公共服务平台</font></h1></div><div style="width: 300px;margin-left: 1500px;float: left"> <Input search enter-button placeholder="Enter something..." /></div></div>
      <Content style="background-color:#919191;">
        <Card style="margin: 30px;">
      <Tabs :animated="false">
        <TabPane label="首页">
          <div style="width: 200px;float: right"> <Input search enter-button placeholder="Enter something..." /></div>
          <Carousel v-model="value1" loop style="margin-top: 40px">
            <CarouselItem>
              <div class="demo-carousel"> <img src="./img/1.jpg" width="1200px" height="700px">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel"> <img src="./img/2.jpg" width="1200px" height="700px">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel"> <img src="./img/4.jpg" width="1200px" height="700px">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel"> <img src="./img/5.jpg" width="1200px" height="700px"></div>
            </CarouselItem>
          </Carousel>

        </TabPane>
        <TabPane label="资讯频道">
          <div id="Commodity">
            <layout>
              <header>
              </header>
              <content style="margin:0 auto;">
                <div class="content">
                  <div style="background:#eee;margin:0 auto;">
                    <Card style="width: 700px;align-self: center">
                      <p slot="title">项目基本信息</p>
                      <div style="height: 200px">
                        <div style="background:#eee;padding: 20px;width: 180px;height: 180px;margin-left: 50px;float: left">

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
        </TabPane>
        <TabPane label="展会频道">
          <div style="width: 900px;height: 400px;margin: 0 auto">
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
          </div>
          <div style="float: bottom">
            <Page :current="2" :total="50" simple :size="small"/>
          </div>
        </TabPane>
        <TabPane label="供求频道">
          <!--<div class="demo-split">
            <Split v-model="split1">
              <div slot="left" class="demo-split-pane">
                <Input search enter-button placeholder="Enter something..." />
                <Table border :columns="columns5" :data="data5"></Table>
                <Page :total="100" show-elevator />
              </div>
              <div slot="right" class="demo-split-pane">
                <Input search enter-button placeholder="Enter something..." />
                <Table border :columns="columns5" :data="data5"></Table>
                <Page :total="100" show-elevator />
              </div>
            </Split>
          </div>
          <Page :total="100" show-elevator />-->
          <div style="width: 900px;height: 400px;margin: 0 auto">
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
            <div style="width: 180px;height: 150px;float: left;margin-left: 30px;margin-top: 30px">
              <img src="./img/1.jpg" height="120px" width="140px">
              <br>项目名称《》
            </div>
          </div>
          <div style="float: bottom">
            <Page :current="2" :total="50" simple :size="small"/>
          </div>
        </TabPane>
      </Tabs>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
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
      ],
      columns5: [
        {
          title: 'Date',
          key: 'date',
          sortable: true
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age',
          sortable: true
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data5: [
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
