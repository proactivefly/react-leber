import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { getUserInfo } from '@/reudx/user.redux.js'
import { connect } from 'react-redux'
@withRouter //把不是路由组件的组件变成路由组件
@connect(
	null,
	{getUserInfo}
)
class AuthRoute extends React.Component{
	componentDidMount() {
		const publicList = ['/login','/register'] //白名单，不需要登录
		const pathname = this.props.location.pathname
		if (publicList.indexOf(pathname)>-1) {
			return null
		}
		// 获取用户信息
		axios.get('/user/info')
			.then(res=>{
				if (res.status==200) {
					if (res.data.code===0) { // 登录了
						this.props.getUserInfo(res.data.data)
					}else{
						this.props.history.push('/login')
					}
				}
			})
		// 是否登录
		// 现在的url地址  login是不需要跳转的

		// 用户的type 身份是boss还是牛人
		// 用户是否完善信息（选择头像 个人简介）
	}
	render(){
		return null
	}

}
export default AuthRoute