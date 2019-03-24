import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Home from '@/components/Home'
import MustFind from '@/components/Find/MustFind'
import Find from '@/components/Find/Find'
import My from '@/components/My'
import Post from '@/components/Post'
import FindByPeople from '@/components/Find/FindByPeople'
import FindByComment from '@/components/Find/FindByComment'
// const about = resolve => require(['@/components/about'], resolve)
const Login = resolve => require(['@/components/Login'], resolve)
//const About = resolve => require(['@/components/About'], resolve)
import Tab from '@/components/Tab'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
  	{
  		path:'/',
      	name:'About',
      	component:About

  	},
  	{
  		path:'/Tab',
  		name:'Tab',
  		component:Tab,
  		redirect:'/Home',
  		children:[{
  			path:'/Home',
  			name:'Home',
  			component:Home
  		},{
  			path:'/Find',
  			name:'Find',
  			component:Find,
  			children:[{
		  		path:'/Find/MustFind',
		  		name:'MustFind',
		  		component:MustFind	
  			},{
		  		path:'/Find/FindByPeople',
		  		name:'FindByPeople',
		  		component:FindByPeople	
  			},{
		  		path:'/Find/FindByComment',
		  		name:'FindByComment',
		  		component:FindByComment	
  			}]
  		},{
        path:'/My',
        name:'My',
        component:My
      },{
        path:'/Post',
        name:'Post',
        component:Post
      }]
  	},
  	
    // {
    //   path: '/',
    //   name: 'Tab',
    //   component: Tab,
    //   redirect:'/About',
    //   children:[{
    //   	path:'/About',
    //   	name:'About',
    //   	component:About

    //   }]
    // }
  ]
})
