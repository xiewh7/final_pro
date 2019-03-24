<template>
  <div>
    <group>
      <x-input title="帖子主题" placeholder="输入主题" :required="false" ref="input02" v-model="topic" ></x-input>
      <x-textarea title="主要内容"  placeholder="输入内容" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" v-model="content"></x-textarea>
      <x-button @click.native="submitTiezi()">submit</x-button>
    </group>
    <!-- md -->
  </div>
</template>

<i18n>
placeholder:
  zh-CN: 提示
hide counter:
  zh-CN: 不显示计数器
used with input:
  zh-CN: 和input一起使用
title:
  zh-CN: 标题
Type something:
  zh-CN: 随便写点什么
autosize:
  zh-CN: 自动高度
set height=200:
  zh-CN: 设置高度为200像素
</i18n>

<script>
import { XTextarea, Group, XInput ,XButton} from 'vux'

export default {
  components: {
    XTextarea,
    Group,
    XInput,
    XButton
  },
  data(){
    return{
      topic: '',
      content: ''
    }
    
  },
  methods: {
    onEvent (event) {
      console.log('on', event)
    },
    submitTiezi(){
      console.log(this.topic);
      this.$router.push({ name:'MustFind',params:{topic:this.topic,content:this.content}})
    }
  }
}
</script>