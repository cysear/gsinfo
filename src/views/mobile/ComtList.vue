<template>
  <section style="height: 100%;">

 <!--   <sx-header title="小区列表">
      <svg-icon slot="left" class="header-user" icon-class="user"></svg-icon>
      <svg-icon slot="right" icon-class="plane"></svg-icon>
    </sx-header>-->

    <!--<x-header class="m-header">
      小区列表
      <span  slot="overwrite-left" >
           <svg-icon slot="overwrite-left" class="header-user" icon-class="user"></svg-icon>
      </span>

      <span slot="right"class="m-header-right">
        <svg-icon slot="overwrite-left" icon-class="plane"></svg-icon>
      </span>
    </x-header>-->

    <div class="list-container">
      <span class="bth-add"><svg-icon iconClass="building"></svg-icon><small>添加小区</small></span>

      <ul class="vill-list">
        <li v-for="(item , index) in villList" class="vill-item">
          <div class="vill-title"><span>{{item.name}}</span> <small>{{item.state}}</small></div>
          <div class="vill-content">
            <div><span><b>2</b>个</span><small>泵房</small></div>
            <div><span><b>1</b>个</span><small>楼宇</small></div>
            <div><span><b>4</b>个</span><small>水箱</small></div>
            <span class="btn-info"  @click="toDetail(item)">查看详情</span>
          </div>
        </li>
      </ul>



      <alert v-model="show" :title="'你吃饭了吗？'"> {{ '还没啊~' }}</alert>
      <el-button type="primary" @click="show = true">吃饭了吗</el-button>
      <el-button type="primary" @click="toDetail">小区详情</el-button>
      <div style="color: green">

      </div>

</div>
    <div id="allmap" style="width: 0;height: 0; display: none;"></div>
  </section>
</template>
<script>
  import { Loading,Alert,XHeader,XButton, Divider} from 'vux'
  import SxHeader from  '@/components/SxHeader'
  export default{
    name: 'ComtList',
    components:{SxHeader,Alert,XHeader,XButton,Divider},
    data(){
      return {
          show:false,
        villList:[
          {idx:1,name:'瞿溪路800弄、802、804、806号',state:'已接管'},
          {idx:2,name:'瞿溪路800弄、802、804、806号',state:'已接管'},
     /*     {idx:3,name:'瞿溪路800弄、802、804、806号',state:'已接管'},
          {idx:4,name:'瞿溪路800弄、802、804、806号',state:'已接管'},
          {idx:5,name:'瞿溪路800弄、802、804、806号',state:'已接管'},
          {idx:6,name:'瞿溪路800弄、802、804、806号',state:'已接管'},
          {idx:7,name:'瞿溪路800弄、802、804、806号',state:'已接管'},*/

        ]
      }
    },
    created(){
      console.log(2);
    },
    mounted(){
        this.$nextTick(()=>{
//            this.getLocation();
        })
    },
    methods: {
        toDetail(){
            this.$router.push({name:'DetailInfo'})
        },
      getLocation(){
        // 百度地图API功能
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(121.492611,31.217264);
        map.centerAndZoom(point, 12);
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
          console.log(r.point)
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            var point = new BMap.Point(r.point.lng, r.point.lat);
            var gc = new BMap.Geocoder();
            gc.getLocation(point, function (rs) {
              var addComp = rs.addressComponents;
              console.log(rs);
//              alert(addComp.city + "===" + addComp.district)
            });
          } else {
//            alert('failed' + this.getStatus());
          }
        }, {enableHighAccuracy: true})

      }
    }

  }
  </script>
<style  lang = "less" scoped >
  @white:#fff;
  @dark:#3951D9;
  .shadow{
    border-radius: 10px;
   box-shadow: 0 0 8px 0 #e6e6e6;
    box-sizing: border-box;
  }
  .m-header{ background-color:@dark; color: @white;
    /*position: fixed;*/
    /*width: 100%;*/
    /*height: 50px; top: 0;*/
  .header-user{ display: inline-flex; font-size:20px; color: @white;}
  .m-header-right{color:@white;}
  }
  .list-container{
    box-sizing: border-box;
    height: 100%; padding: 10px;
    .bth-add{ display: block; line-height: 1.5rem; padding: 0.5rem;
      width: 100%; background: @white; color: @dark;
      text-align: center; font-size:1.5rem;
      small { font-size: 1rem;
        padding-left: 10px;}
      &:extend(.shadow);
    }
    .vill-list{
      .vill-item{
        &:extend(.shadow);
        background: @white;  margin-top: 10px;

        .vill-title{ display: flex; flex-direction: row; border-bottom: 1px solid #ddd; padding: 0.5rem;

          span{ flex: 1;  font-size: 16px;
            overflow:hidden; //超出的文本隐藏
            text-overflow:ellipsis; //溢出用省略号显示
            white-space:nowrap; //溢出不换行
          }
          small{
            border-radius: 3px;
             width: 3rem;  text-align: center; background: #f7c4c1; color: #fd3b32;
            &.active{
              background: #c9f6ef; color: #00a98f;
            }
          }

        }
        .vill-content{ padding: 0.5rem; box-sizing: border-box;
          width: 100%;
          display: inline-flex; flex-direction: row;
          div{
             display: flex; flex-direction: column; flex: 1;
          }
          .btn-info{
             border: 1px solid @dark; color: @dark; border-radius: 15px;
            display: inline-block;
            height: 1.7rem;
            font-size: 1rem;
            padding: 0 0.4rem;
            line-height: 1.8rem;
          }

        }
      }
    }
  }
</style>
