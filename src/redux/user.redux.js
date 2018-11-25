import axios from 'axios';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'; //注册成功
const LOADDATA_SUCCESS = 'LOADDATA_SUCCESS'; //获取用户信息
const ERROR_MSG = 'ERROR_MSG'; //错误信息
const USER_LIST = 'USER_LIST'; //用户信息
const LOGOUT = 'LOGOUT'; //登出


import { getDirectPath } from '../utils/index.js';

const initState = { // 初始信息
    isAuth: false, //是否登录
    redirectTo: '', //用户登录后跳转信息
    user: '',
    type: '', //用户类型
    msg: '' //是否有报错信息
}

//reducer
export function user(state = initState, action) { //es6 给参数附初始值
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { ...state, msg: '', isAuth: true, ...action.payload }
        case LOADDATA_SUCCESS:
            return { ...state, ...action.payload }
        case ERROR_MSG:
            return { ...state, isAuth: false, msg: action.msg }
        case LOGOUT:
            return { ...state, redirectTo: '/login' }
        default:
            return state;
    }
}




function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}

function registerSuccess(data) {
    return {
        type: REGISTER_SUCCESS,
        payload: data
    }
}

export function register({ user, pwd, repeatpwd, type }) {
    if (!user || !pwd || !type) {
        return dispatch(errorMsg("用户名密码必须输入"));
    }
    if (pwd !== repeatpwd) {
        return dispatch(errorMsg("密码不一致"));
    }
    return dispathc => {
        axios.post('/user/register', { user, pwd, type }).then((res) => {
            if (res.status == 200 && res.data.code === 0) {
                dispatch(REGISTER_SUCCESS({ user, pwd, type }))
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        })
    }

}


export const login = ({ user, pwd }) => async (dispatch, getState) => {
    if (!user || !pwd) {
        return dispatch(errorMsg("用户名密码必须输入"));
    }
    try {
        const res = await axios.post('/user/login', { user, pwd })
        if (res.status == 200 && res.data.code === 0) {
            dispatch(REGISTER_SUCCESS(res.data.data))
        } else {
            dispatch(errorMsg(res.data.msg));
        }
    } catch (e) {
        console.log(e);
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

const loadDataSuccess = (data) => {
    return { type: LOADDATA_SUCCESS, payload: data }
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

export const logoutSubmit = () => {
    return { type: LOGOUT }
}