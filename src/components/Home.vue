<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 1px;
    overflow: hidden;
  }

  .head-top{
    color: #555555;
    font-weight: 600;
    line-height: 30px;
    padding: 4px 10px;
    text-align: center;
    background: #262626;
    text-transform:capitalize;
  }
  .layout-logo{
    text-align: center;
    float: left;
    position: relative;
    bottom: 3px;
    left: 20px;
    width: 300px;
    height: 30px;
    background: #546577;
    border-radius: 3px;

  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 10px;
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}"><div style="background-color: #262626;height: 50px"></div>

      <Layout>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"><h2><font color="#e6e6fa">文化创意产业公共服务平台</font></h2></div>
          <div class="layout-nav">
            <menu-item name="1">
              首页
            </menu-item>
            <menu-item name="2">
              咨询频道
            </menu-item>
            <menu-item name="3">
              展会频道
            </menu-item>
            <menu-item name="4">
              供求频道
            </menu-item>
          </div>
        </Menu>
        <Header  style="background-color:#262626;height: 65px">
          <Menu mode="horizontal" theme="dark" active-name="1" >
            <div class="layout-logo"  style="background-color:#262626;margin-top: 0px"><h1><font color="#e6e6fa"  size="6px">文化创意产业公共服务平台</font></h1></div>

          </Menu>
        </Header>
        <Breadcrumb :style="{margin: '0'}" style="background-color:#666666" >
          <!--<BreadcrumbItem><font color="#e6e6fa">Home</font></BreadcrumbItem>
          <BreadcrumbItem><font color="#e6e6fa">Components</font></BreadcrumbItem>
          <BreadcrumbItem><font color="#e6e6fa">Layout</font></BreadcrumbItem>-->
        </Breadcrumb>
        <Tabs :animated="false">
          <TabPane label="咨询频道">咨询频道</TabPane>
          <TabPane label="展会频道">展会频道</TabPane>
          <TabPane label="供求频道">供求频道</TabPane>
        </Tabs>
        <Content :style="{padding: '0 16px 16px'}" >

          <div class="demo-split">
            <Split v-model="split1">
              <div slot="left" class="demo-split-pane">
                <!--<Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                  <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses"  style="background-color: #262626;height: 665px">
                    <menu-item name="1-1">
                      <Icon type="ios-navigate"></Icon>
                      <span>首页</span>
                    </menu-item>
                    <menu-item name="1-2">
                      <Icon type="search"></Icon>
                      <span>咨询频道</span>
                    </menu-item>
                    <menu-item name="1-3">
                      <Icon type="settings"></Icon>
                      <span>展会频道</span>
                    </menu-item>
                    <menu-item name="1-4">
                      <Icon type="settings"></Icon>
                      <span>供求频道</span>
                    </menu-item>
                  </Menu>
                </Sider>-->
              </div>
              <div slot="right" class="demo-split-pane">
                <Card>
                  <div style="height: 680px">

                    <template>
                      <Carousel autoplay v-model="value2" loop>
                        <CarouselItem>
                          <div class="demo-carousel"><img :src="imgUrl"></div>
                        </CarouselItem>
                        <CarouselItem>
                          <div class="demo-carousel">2</div>
                        </CarouselItem>
                        <CarouselItem>
                          <div class="demo-carousel">3</div>
                        </CarouselItem>
                        <CarouselItem>
                          <div class="demo-carousel">4</div>
                        </CarouselItem>
                      </Carousel>
                    </template>
                  </div>
                </Card>
              </div>
            </Split>
          </div>

        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    menuitemClasses: function () {
      return [
        'menu-item',

        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  }
}
</script>
