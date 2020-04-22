<template>
    <section style="height: 100%; background: #ebf0f4;">
      <div v-transfer-dom>
        <loading v-model="isLoading"></loading>
      </div>
      <div v-transfer-dom>
        <alert v-model="showMenu" :title="'你吃饭了吗？'"> {{ '还没啊~' }}</alert>
      </div>

      <drawer
        width="200px;"
        :show.sync="drawerVisibility"
        :show-mode="showModeValue"
        :placement="showPlacementValue"
        :drawer-style="{'background-color':'#fff', width: '200px'}">

        <!-- drawer content -->
        <div slot="drawer">
          <group title="" style="margin-top:20px;">
            <cell title="用户"  value="张三" @click.native="drawerVisibility = false">
            </cell>
            <cell-box is-link @click.native="onClickMore">退出
            </cell-box>

          </group>
        </div>

        <!-- main content -->
        <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="0">

          <x-header
            slot="header"
            style=" width:100%;position:absolute;left:0;top:0;z-index:100; background: #3951D9"
            :left-options="leftOptions"
            :right-options="rightOptions"
            :title="title"
            :transition="headerTransition"
            @on-click-more="onClickMore">
          <span v-if="route.path === '/' || route.path === '/mHome/ComtList'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <!--<x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>-->
            <svg-icon slot="overwrite-left" class="header-user" icon-class="user"></svg-icon>
          </span>

            <span v-else  slot="overwrite-left"  >
                 <svg-icon slot="overwrite-left" class="header-user" icon-class="user"></svg-icon>
            </span>
          </x-header>

          <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
          <transition
            @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
            :name="viewTransition" :css="!!direction">
            <router-view class="router-view"></router-view>
          </transition>


        </view-box>
      </drawer>
    </section>
</template>
<script>
  import { Alert , Radio, Group, Cell, CellBox,Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
  import { mapState, mapActions } from 'vuex'
  export default{
        name: 'mapp',
    directives: {
      TransferDom
    },
    components: {
      Alert,
      Radio,
      Group,
      Cell,
      Badge,CellBox,
      Drawer,
      ButtonTab,
      ButtonTabItem,
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
      Loading,
      Actionsheet
    },
        data(){
                return {
                  showMenu: false,
                  title:'小区列表',
                  drawerVisibility: false,
                  showMode: 'push',
                  showModeValue: 'push',
                  showPlacement: 'left',
                  showPlacementValue: 'left'
                }
        },
    computed:{
      ...mapState({
        route: state => state.route,
        path: state => state.route.path,
        deviceready: state => state.app.deviceready,
        demoTop: state => state.vux.demoScrollTop,
        isLoading: state => state.vux.isLoading,
        direction: state => state.vux.direction
      }),
      viewTransition () {
        if (!this.direction) return ''
        return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
      },
      leftOptions () {
        return {
          showBack: this.$route.path !== '/'
        }
      },
      rightOptions () {
        return {
          showMore: true
        }
      },
      headerTransition () {
        if (!this.direction) return ''
        return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
      },
    },
    methods:{
      onClickMore () {
          const _this = this;
        this.$vux.confirm.show({
          title:'确定退出吗？',
          // 组件除show外的属性
          onCancel () {
          },
          onConfirm () {
            _this.$router.push('/login')
          }
        })
      },
      onShowModeChange (val) {
        /** hide drawer before changing showMode **/
        this.drawerVisibility = false
        setTimeout(one => {
          this.showModeValue = val
        }, 400)
      },
      onPlacementChange (val) {
        /** hide drawer before changing position **/
        this.drawerVisibility = false
        setTimeout(one => {
          this.showPlacementValue = val
        }, 400)
      },
    }
    }
</script>
<style  lang = "less" scoped >
  .header-user{  font-size:20px; color: #fff;}
</style>
