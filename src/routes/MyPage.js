import React from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import styles from './MyPage.css'

const tabs = [
  { title: <Badge dot>全部订单</Badge> },
  { title: <Badge dot>待付款</Badge> },
  { title: <Badge dot>待服务</Badge> },
  { title: <Badge dot>待评价</Badge> },
];


class MyPage extends React.Component {

  render(){
    return (
      <div>
        <div>
        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div className={styles.tab} style={{  alignItems: 'center',  justifyContent: 'center' }}>
              <br></br>
              <br></br>
              <br></br>
          <font face="verdana" size="6" > 全部订单</font>
          </div>
          <div className={styles.tab} style={{  alignItems: 'center', justifyContent: 'center' }}>
          <br></br>
              <br></br>
              <br></br>
          <font face="verdana" size="6" > 待付款订单</font>
          </div>
          <div className={styles.tab} style={{  alignItems: 'center', justifyContent: 'center' }}>
          <br></br>
              <br></br>
              <br></br>
          <font face="verdana" size="6" > 待服务订单</font>
          </div>
          <div className={styles.tab} style={{  alignItems: 'center', justifyContent: 'center'}}>
          <br></br>
              <br></br>
              <br></br>
          <font face="verdana" size="6" > 待评价订单</font>
          </div>
        </Tabs>
        <WhiteSpace />
        
      </div>

      </div>
    )
  }
}

export default MyPage;
