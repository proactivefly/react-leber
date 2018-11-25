export const getDirectPath  = ({type,avatar})=>{
    // 根据用户信息，返回跳转地址
    // user.type  boss/genius
    // user.avatar /bossinfo /geniusinfo
    let url = (type==='boss')?'/boss':'/genius';
    if (!avatar) { //如果没头像去完善信息
        url +='info'
    }
    return url;
}

export const getChatId = (userId, targetId) =>{
	return [userId, targetId].sort().join('_')
}