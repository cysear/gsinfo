<template>
    <section>
      <drawer
        width="200px;"
        :show.sync="drawerVisibility"
        :show-mode="showModeValue"
        :placement="showPlacementValue"
        :drawer-style="{'background-color':'#35495e', width: '200px'}">

        <!-- drawer content -->
        <div slot="drawer">
          <group title="Drawer demo(beta)" style="margin-top:20px;">
            <cell title="Demo" link="/demo" value="演示" @click.native="drawerVisibility = false">
            </cell>
            <cell title="Buy me a coffee" link="project/donate" @click.native="drawerVisibility = false">
            </cell>
            <cell title="Github" link="http://github.com/airyland/vux" value="Star me" @click.native="drawerVisibility = false">
            </cell>
          </group>
          <group title="showMode">
            <radio v-model="showMode" :options="['push', 'overlay']" @on-change="onShowModeChange"></radio>
          </group>
          <group title="placement">
            <radio v-model="showPlacement" :options="['left', 'right']" @on-change="onPlacementChange"></radio>
          </group>
        </div>


        <!-- main content -->
        <view-box ref="viewBox" :body-padding-top="isShowNav ? '46px' : '0'" body-padding-bottom="55px">

          <x-header
            v-if="isShowNav"
            slot="header"
            style="width:100%;position:absolute;left:0;top:0;z-index:100;"
            :left-options="leftOptions"
            :right-options="rightOptions"
            :title="title"
            :transition="headerTransition"
            @on-click-more="onClickMore">
          <span v-if="route.path === '/' || route.path === '/component/drawer'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
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
  import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
  import { mapState, mapActions } from 'vuex'
  export default{
        name: 'mapp',
    directives: {
      TransferDom
    },
    components: {
      Radio,
      Group,
      Cell,
      Badge,
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
    methods: {
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
      onClickMore () {
        this.showMenu = true
      },
      changeLocale (locale) {
        this.$i18n.set(locale)
        this.$locale.set(locale)
      },
      ...mapActions([
        'updateDemoPosition'
      ])
    },
    mounted () {
      this.handler = () => {
        if (this.path === '/demo') {
          this.box = document.querySelector('#demo_list_box')
          this.updateDemoPosition(this.box.scrollTop)
        }
      }
    },
    beforeDestroy () {
      this.box && this.box.removeEventListener('scroll', this.handler, false)
    },
    watch: {
      path (path) {
        if (path === '/component/demo') {
          this.$router.replace('/demo')
          return
        }
        if (path === '/demo') {
          setTimeout(() => {
            this.box = document.querySelector('#demo_list_box')
            if (this.box) {
              this.box.removeEventListener('scroll', this.handler, false)
              this.box.addEventListener('scroll', this.handler, false)
            }
          }, 1000)
        } else {
          this.box && this.box.removeEventListener('scroll', this.handler, false)
        }
      }
    },
    computed: {
      ...mapState({
        route: state => state.route,
        path: state => state.route.path,
        deviceready: state => state.app.deviceready,
        demoTop: state => state.vux.demoScrollTop,
        isLoading: state => state.vux.isLoading,
        direction: state => state.vux.direction
      }),
      isShowBar () {
        if (this.entryUrl.indexOf('hide-tab-bar') > -1) {
          return false
        }
        return true
      },
      isShowNav () {
        if (this.entryUrl.indexOf('hide-nav') > -1) {
          return false
        }
        return true
      },
      leftOptions () {
        return {
          showBack: this.route.path !== '/'
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
      componentName () {
        if (this.route.path) {
          const parts = this.route.path.split('/')
          if (/component/.test(this.route.path) && parts[2]) return parts[2]
        }
      },
      isDemo () {
        return /component|demo/.test(this.route.path)
      },
      isTabbarDemo () {
        return /tabbar/.test(this.route.path)
      },
      title () {
        if (this.route.path === '/') return 'Home'
        if (this.route.path === '/project/donate') return 'Donate'
        if (this.route.path === '/demo') return 'Demo list'
        return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
      },
      viewTransition () {
        if (!this.direction) return ''
        return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
      }
    },
    data () {
      return {
        entryUrl: document.location.href,
        showMenu: false,

        drawerVisibility: false,
        showMode: 'push',
        showModeValue: 'push',
        showPlacement: 'left',
        showPlacementValue: 'left'
      }
    }

    }
</script>
<style  lang = "less" scoped >
</style>
