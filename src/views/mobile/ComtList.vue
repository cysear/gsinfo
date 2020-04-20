<template>
  <section>
    <x-header class="m-header">
      小区列表
      <span  slot="overwrite-left"   @click="drawerVisibility = !drawerVisibility">
           <svg-icon slot="overwrite-left" class="header-user" icon-class="user"></svg-icon>
      </span>

      <a slot="right" class="m-header-right">Feedback</a>
    </x-header>

    <div style="width: 1px; height: 400px;">

      <alert v-model="show" :title="'你吃饭了吗？'"> {{ '还没啊~' }}</alert>

<el-button type="primary" @click="show = true">w3d</el-button>
      <div style="color: green">

      </div>

  1111111111111111111111111111112222222222222222222333333333333333
</div>
    <div id="allmap" style="width: 0;height: 0; display: none;"></div>
  </section>
</template>
<script>
  import { Loading,Alert,XHeader} from 'vux'
  import SxHeader from  '@/components/SxHeader'
  export default{
    name: 'ComtList',
    components:{SxHeader,Alert,XHeader},
    data(){
      return {
          show:false,
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
              alert(addComp.city + "===" + addComp.district)
            });
          } else {
            alert('failed' + this.getStatus());
          }
        }, {enableHighAccuracy: true})

      }
    }

  }
  </script>
<style  lang = "less" scoped >
  @white:#fff;
  @black:#101010;
  .m-header{ background-color:#ffffff; color: #101010;
  .header-user{ display: inline-flex; font-size:20px; color: #101010;}
  .m-header-right{color:@black;}
  }
</style>
<style>
  .vux-header .vux-header-title{ color: #101010 !important;}
</style>
