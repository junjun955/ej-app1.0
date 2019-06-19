import React from 'react';
import { connect } from 'dva';
import t from "../assets/index2.png"
import b from "../assets/baojie2.png"
import k from "../assets/kanhu2.png"
import x from "../assets/xihu3.png"
import y from "../assets/yuesao1.png"
import q from "../assets/Donute.png"

import xiyi from "../assets/xiyi.png"
import youyanji from "../assets/youyanji.png"



import styles from './IndexPage.css'
import axios from '../utils/axios'
import { Grid  } from 'antd-mobile';



const data = [{
  icon: x,  
  text: `洗护`
},{
  icon: b,  
  text: `保洁`
},{
  icon: k,  
  text: `看护`
},{
  icon: y,  
  text: `月嫂`
},{
  icon: q,  
  text: `其他`
}
]


const data1 = [{
  icon: xiyi,  
  text: `洗衣`
},{
  icon: youyanji,  
  text: `清洗油烟机`
},{
  icon: '',  
  text: `更多热门服务`
}
]

class IndexPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      categories:[]
    }
  }
  // 当前组件绑定到根组件上执行【生命周期钩子】
  componentDidMount(){
    this.loadCategory();
  }
  loadCategory(){
    axios.get('/category/findAll')
    .then((result)=>{
      // 将数据设置到局部状态中
      this.setState({
        categories:result.data
      })
    });
  }

  toProduct(){
    this.props.history.push("/product");
  }

  render(){
    return (
          
        <div>
        
        {/* 图片广告 */}
        <div className={styles.photoWall}>
          <img className={styles.photo} src={t} alt="加载失败"/>
        </div>
    {/* 栏目 */}
    <div className="sub-title1"></div>
           <Grid data={data} isCarousel onClick={_el => console.log(_el)} />
        {/* 产品 */}
        <div>
        <div className="sub-title2"></div>
          <Grid data={data1} columnNum={3} itemStyle={{ height: '80px', background: 'rgba(0,0,0,.05)' }} />


        </div>
      </div>
    );
  }
}

// connect函数可以在this.props中注入一些对象和方法增强组件功能
export default connect()(IndexPage);