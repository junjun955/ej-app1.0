import React from 'react'
import { SearchBar, WhiteSpace, WingBlank } from 'antd-mobile';
import { connect } from 'dva';
import styles from './OrderPage.css'
import axios from '../utils/axios'

class OrderPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[]
    }
  }

  // 当前组件绑定到根组件上执行【生命周期钩子】
  // 在生命周期钩子函数中调用重载数据
  componentDidMount(){
    this.reloadData();
  }

  // 重载数据
  reloadData(){
    axios.get('/product/findAll')
    .then((result)=>{
      // 将数据设置到局部状态中
      this.setState({
       orders:result.data
      })
    });
  }  
  
  render(){
    return (
      <div>
        <div>
        <WingBlank><div className="sub-title"></div></WingBlank>
      <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} />
      <WhiteSpace />
      </div>
        {/* 栏目 */}
        <div>
          <ul className={styles["category_list"]}>
            {
              this.state.orders.map((item)=>{
                return (
                  <li 
                   className={styles["category_list_item"]}>
                     <div> <img width={60} height={60} src={"http://134.175.154.93:8888/group1/"+item.photo}/> 
                    {item.name+' \n '}{item.price+' \n '}
                    {item.description} 
                    </div> 
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default connect()(OrderPage);