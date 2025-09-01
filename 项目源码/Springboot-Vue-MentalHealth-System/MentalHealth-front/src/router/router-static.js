import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import exampaper from '@/views/modules/exampaper/list'
    import examquestion from '@/views/modules/examquestion/list'
    import examrecord from '@/views/modules/examrecord/list'
    import examredetails from '@/views/modules/examredetails/list'
    import examrewrongquestion from '@/views/modules/examrewrongquestion/list'
    import healthge from '@/views/modules/healthge/list'
    import notice from '@/views/modules/notice/list'
    import psychologyerCollection from '@/views/modules/psychologyerCollection/list'
    import psychologyerLiuyan from '@/views/modules/psychologyerLiuyan/list'
    import psychologyerOrder from '@/views/modules/psychologyerOrder/list'
    import yonghu from '@/views/modules/yonghu/list'
    import psychologyer from '@/views/modules/psychologyer/list'
    import config from '@/views/modules/config/list'
    import dictionaryExampaper from '@/views/modules/dictionaryExampaper/list'
    import dictionaryExamquestion from '@/views/modules/dictionaryExamquestion/list'
    import dictionaryHealthge from '@/views/modules/dictionaryHealthge/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShijianduan from '@/views/modules/dictionaryShijianduan/list'
    import dictionaryNotice from '@/views/modules/dictionaryNotice/list'
    import dictionaryPsychologyerCollection from '@/views/modules/dictionaryPsychologyerCollection/list'
    import dictionaryPsychologyerOrderYesno from '@/views/modules/dictionaryPsychologyerOrderYesno/list'

    import adminexam from '@/views/modules/exampaper/exam'




//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
	  ,{
	      path: '/adminexam',
	      name: 'adminexam',
	      component: adminexam,
	      meta: {icon:'', title:'adminexam'}
	    }
    ,{
        path: '/dictionaryExampaper',
        name: '试卷状态',
        component: dictionaryExampaper
    }
    ,{
        path: '/dictionaryExamquestion',
        name: '试题类型',
        component: dictionaryExamquestion
    }
    ,{
        path: '/dictionaryHealthge',
        name: '健康知识类型',
        component: dictionaryHealthge
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShijianduan',
        name: '时间段',
        component: dictionaryShijianduan
    }
    ,{
        path: '/dictionaryNotice',
        name: '通知类型',
        component: dictionaryNotice
    }
    ,{
        path: '/dictionaryPsychologyerCollection',
        name: '收藏表类型',
        component: dictionaryPsychologyerCollection
    }
    ,{
        path: '/dictionaryPsychologyerOrderYesno',
        name: '预约状态',
        component: dictionaryPsychologyerOrderYesno
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/exampaper',
        name: '试卷表',
        component: exampaper
      }
    ,{
        path: '/examquestion',
        name: '试题表',
        component: examquestion
      }
    ,{
        path: '/examrecord',
        name: '考试记录表',
        component: examrecord
      }
    ,{
        path: '/examredetails',
        name: '答题详情表',
        component: examredetails
      }
    ,{
        path: '/examrewrongquestion',
        name: '错题表',
        component: examrewrongquestion
      }
    ,{
        path: '/healthge',
        name: '健康知识',
        component: healthge
      }
    ,{
        path: '/notice',
        name: '通知',
        component: notice
      }
    ,{
        path: '/psychologyerCollection',
        name: '心理老师收藏',
        component: psychologyerCollection
      }
    ,{
        path: '/psychologyerLiuyan',
        name: '心理老师留言',
        component: psychologyerLiuyan
      }
    ,{
        path: '/psychologyerOrder',
        name: '心理咨询预约申请',
        component: psychologyerOrder
      }
    ,{
        path: '/yonghu',
        name: '学生',
        component: yonghu
      }
    ,{
        path: '/psychologyer',
        name: '心理老师',
        component: psychologyer
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
