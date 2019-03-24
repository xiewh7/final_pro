<template>
  <div>
     <cell title="我的帐号" value="点击修改" :link="{path:''}" ></cell>
     <cell is-link>
        <span slot="title" style="color:green;"><span style="vertical-align:middle;">我的信息</span> <badge text="1"></badge></span>
      </cell>
      <cell title="我的简历" value="查看/修改" :link="{path:''}" ></cell>
      <cell title="我的帖子" value="查看" :link="{path:''}"></cell>
      <!-- <cell title="我的帐号" ></cell> -->
     
   

    
    

    <!-- <group :title="$t('Collapse')">
      <cell
      :title="$t('Title 001')"
      is-link
      :border-intent="false"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent001 = !showContent001"></cell>

      <template v-if="showContent001">
        <cell-box :border-intent="false" class="sub-item" is-link>content 001</cell-box>
        <cell-box class="sub-item" is-link>content 001</cell-box>
        <cell-box class="sub-item" is-link>content 001</cell-box>
      </template>

      <cell
      :title="$t('Title 002')"
      is-link
      :border-intent="false"
      :arrow-direction="showContent002 ? 'up' : 'down'"
      @click.native="showContent002 = !showContent002"></cell>

      <template v-if="showContent002">
        <cell-form-preview :border-intent="false" :list="list"></cell-form-preview>
      </template>

      <cell
      :title="$t('Title 003')"
      is-link
      :border-intent="false"
      :arrow-direction="showContent003 ? 'up' : 'down'"
      @click.native="showContent003 = !showContent003"></cell>

      <template v-if="showContent003">
        <cell-box :border-intent="false" class="sub-item">I'm content 003</cell-box>
      </template>

      <cell
      :title="$t('Animated')"
      is-link
      :border-intent="false"
      :arrow-direction="showContent004 ? 'up' : 'down'"
      @click.native="showContent004 = !showContent004"></cell>

      <p class="slide" :class="showContent004?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>

    </group>

    <group>
      <cell :title="$t('Notifications')" :value="$t('Enabled')"></cell>
    </group>

    <group :title="$t('Use slot for complicated content')">
      <cell :title="$t('Slot content')">
        <div>
          <span style="color: green">{{$t('Hi, I\'m Vux.')}}</span>
        </div>
      </cell>
    </group>

    <group :title="$t('is-link is set to true automatically when link exists')">
      <cell :title="$t('Go to Radio Demo')" link="/component/radio" inline-desc='link="/component/radio"'></cell>
      <cell :title="$t('Go to Demo')" :link="{path:'/demo'}" inline-desc=':link={path:"/demo"}'></cell>
      <cell :title="$t('Http link')" link="https://vux.li" inline-desc='link="https://vux.li"'></cell>
    </group> -->
  </div>
</template>



<script>
import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'

export default {
  mounted () {
    setTimeout(() => {
      this.money = -1024
    }, 2000)
  },
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge
  },
  methods: {
    onClick () {
      console.log('on click')
    }
  },
  data () {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }],
      money: null,
      showContent001: false,
      showContent002: false,
      showContent003: false,
      showContent004: false
    }
  }
}
</script>

<style scoped>
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>