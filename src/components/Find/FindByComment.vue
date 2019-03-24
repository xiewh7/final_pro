<template>
  <div>

    <!-- <group :title="$t('Switch the type')">
      <radio title="type" v-model="type" :options="['1', '2', '3', '4', '5']"></radio>
    </group> -->
    <panel :footer="footer" :list="lists" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>

<!-- <i18n>
Switch the type:
  zh-CN: 切换样式
List of content with image:
  zh-CN: 图文组合列表
More:
  zh-CN: 查看更多
</i18n> -->

<script>
import { Panel, Group, Radio } from 'vux'

export default {
  components: {
    Panel,
    Group,
    Radio
  },
  mounted(){
    this.lists.push({src:'',title:this.$route.params.topic,fallbackSrc:'',desc:this.$route.params.content,url:'',
    meta:{
      source: '来源信息',
      date: '1998',
      other: '0'
    }})
  },
  methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  data () {
    return {
      type: '5',
      lists: [{
        src: '',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '招聘会计',
        desc: '需要一年经验',
        url: '/Home',
        meta: {
          source: '来源信息',
          date: '1998',
          other: '人气：0'
          
        }
      }, {
        src: '',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        //url: {
        //   path: '/component/radio',
        //   replace: false
        // },
        meta: {
          source: '来源信息',
          date: '1997',
          other: '人气：0',
        }
      }],
      footer: {
        title:"查看更多",
        url: 'http://vux.li'
      }
    }
  }
}
</script>