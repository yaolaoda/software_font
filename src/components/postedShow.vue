<template>
  <div id="postedShow">
    <layout>
      <header>
        <navigition></navigition>
      </header>
      <content style="margin-top: 40px;width: 700px;align-self: center">
        <Table stripe :columns="columns1" :data="data1"></Table>
      </content>
      <Button style="width: 400px;margin-top: 30px;align-self: center" type="success" long>添加展会</Button>
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
            title: '展会名称',
            key: 'name'
          },
          {
            title: '主题',
            key: 'age'
          },
          {
            title: '地区',
            key: 'address'
          },
          {
            title: '详细信息',
            key: 'address'
          },
          {
            title: '操作',
            key: 'option'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03',
            option: '<Button type="primary">Primary</Button>'
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
