import axios from 'axios';
import { getRedirectTo } from '../util/index.js'

// const action type常量-----------------------------------------------------------------------------------------------
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'; //注册成功
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'; //登陆成功
const ERROR_MSG = 'ERROR_MSG'; //错误信息
const USER_INFO = 'USER_INFO'; //获取 用户信息
const LOGOUT = 'LOGOUT'; //登出
//state----------------------------------------------------------------------------------------------------------------
const initState = { // 初始信息
    isAuth: false, //是否登录
    redirectTo: '', //用户登录后跳转信息
    user: '',
    type: '', //用户类型
    msg: '' //是否有报错信息
}
//reducer（reducer 是返回新的state）-----------------------------------------------------------------------------------
export function user(state = initState, action) { //es6 给参数附初始值,action 型如{type:xxx,data:xxx}
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { ...state, msg: '',redirectTo:getRedirectTo(action.payload), isAuth: true, ...action.payload}
        case LOGIN_SUCCESS:
            return { ...state, msg: '',redirectTo:getRedirectTo(action.payload), isAuth: true, ...action.payload}
        case USER_INFO:
            return {...state,...action.payload}    
        case ERROR_MSG:
            return { ...state, isAuth: false, msg: action.msg }
        case LOGOUT:
            return { ...state, redirectTo: '/login' }
        default:
            return state;
    }
}

//action --------------------------------------------------------------------------------------------------------
    //***同步不用dispatch react-redux帮我们做了***
    // 异步需要手动的dispatch  不管同步异步 都要通过dispatch修改action 只有action能告诉reducer 如何改变state

    //Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量
    //
    //dispatch(action)
function errorMsg(msg) {
    // return { type: ERROR_MSG,msg:msg } 
    return { msg, type: ERROR_MSG } //如果使用这种简写形式，msg要放前边
}

function registerSuccess(data) { //注册成功
    return {
        type: REGISTER_SUCCESS,
        payload: data //不是固定的值修改项修改state，比如说用户信息这些值都不是固定的，不像isAuth这类只有 true或者false
    }
}

function loginSuccess(data){ //登陆成功
    return {
        type:LOGIN_SUCCESS，
        payload:data
    }
}


export function register({ user, pwd, repeatpwd, type }) { //注册async action
    if (!user || !pwd || !type) {
        return dispatch(errorMsg("用户名密码必须输入"));
    }
    if (pwd !== repeatpwd) {
        return dispatch(errorMsg("密码不一致"));
    }
    return dispathc => {
        axios.post('/user/register', { user, pwd, type }).then((res) => {
            if (res.status == 200 && res.data.code === 0) {
                dispatch(registerSuccess({ user, pwd, type })) // { user, pwd, type }此参数相当于payload
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        })
    }
}


export const login = ({ user, pwd }) => async (dispatch, getState) => { //登录async action
    if (!user || !pwd) {
        return dispatch(errorMsg("用户名密码必须输入"));
    }
    try {
        const res = await axios.post('/user/login', { user, pwd })
        if (res.status == 200 && res.data.code === 0) {
            dispatch(loginSuccess(res.data.data))
        } else {
            dispatch(errorMsg(res.data.msg));
        }
    } catch (e) {
        console.log(e);
    }
}

export function userInfo(){
    return dispatch =>{
        // 获取用户信息
        axios.get('/user/info')
            .then(res=>{
                if (res.status==200) {
                    if (res.data.code===0) { // 登录了
                        this.props.loadData(res.data.data)
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
}

export const loadData = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('/user/info')
        if (res.status === 200 && res.data.code == 0) {
            dispatch(loadDataSuccess(res.data.data))
        } else {
            dispatch(errorMsg(res.data.msg));
        }
    } catch (ex) {
        console.log(ex)
    }
}


export const update = (data) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/user/update', data)
        if (res.status === 200 && res.data.code == 0) {
            dispatch(REGISTER_SUCCESS(res.data.data))
        } else {
            dispatch(errorMsg(res.data.msg));
        }
    } catch (ex) {
        console.log(ex)
    }
}

export function logoutSubmit(){
    return { type: LOGOUT }
}