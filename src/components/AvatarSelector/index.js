import React from 'react'
import { List,Grid } from 'antd-mobile';
import PropTypes from 'prop-types'; //属性验证

class AvatarSelector extends React.Component{
    static propTypes={ //相当于 vue props
        selectAvatar:PropTypes.func.isRequired
    }
    state = {
        icon:'',
        text:''
    }
    render(){
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippo,koala,lemur,pig,tiger,whale,zebra'
            .split(',')
            .map(v=> ({ //map 将数组加工后返回新数组
                icon: require(`./icon/${v}.png`),
                text: v,
            }));
            
        const gridHeader = this.state.icon ? (<div><span>已选择头像</span><img src={this.state.icon} /></div>) : '请选择头像' ;
                           
		return (
			<div>
				<List renderHeader={() => gridHeader} >
                     <Grid 
                        data={avatarList}
                        columnNum={5}
                        onClick={el=>{
                            this.setState(el)
                            this.props.selectAvatar(el.text)
                        }}
                         />
                </List>
			</div>
		)
	}
}
/*AvatarSelector.propTypes = { 
    selectAvatar:PropTypes.func.isRequired //类型为函数并且必须传入
}*/
export default AvatarSelector
