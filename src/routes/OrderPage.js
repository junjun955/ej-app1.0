import React from 'react'
import { List,Tabs,SearchBar, WhiteSpace, WingBlank, Stepper  } from 'antd-mobile';
import { connect } from 'dva';
import styles from './OrderPage.css'
import axios from '../utils/axios'


const tabs = [
  { title: '洗护', key: 't1' },
  { title: '保洁', key: 't2' },
  { title: '看护', key: 't3' },
  { title: '月嫂', key: 't3' },
  { title: '其他', key: 't3' },
];
class OrderPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
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
      <div  className={styles["widow"]}>
     <div>
     <div>
      <WingBlank><div className="sub-title"></div></WingBlank>
      <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} />
      <WhiteSpace />
      </div>
    <WhiteSpace />
    <Tabs tabs={tabs}
      initialPage={'t1'}
      tabBarPosition="left"
      tabDirection="vertical"
    >
      
      <div>
          <ul className={styles["category_list"]}>
            {
              this.state.orders.map((item)=>{
                return (            
       <List>
            <li 
            className={styles["category_list_item"]}>
                   <div> <img width={50} height={50} src={"http://134.175.154.93:8888/group1/"+item.photo}/> 
                    {item.name+' \r '}
                    {"RMB："+item.price}
                   </div> 
            </li>      
      </List>                  
                )
              })
            }
          </ul>
        </div>
    </Tabs>
    <WhiteSpace />
  </div>        
      </div>
    );
  }
}

export default connect()(OrderPage);