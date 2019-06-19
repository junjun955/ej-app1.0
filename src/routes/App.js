import React from 'react'
import {connect} from 'dva'
import {withRouter,routerRedux} from 'dva/router'
import {TabBar} from 'antd-mobile'
import styles from './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    }
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
         <div className={styles.content}>
          {/* 动态路由 */}
          {
            this.props.children
          }
        </div>        
      </div>
    );
  }

  handlerTabChange = (tab)=>{
    console.log(this.props);
    this.setState({selectedTab: tab});
    switch(tab){
      case "index":
        this.props.dispatch(routerRedux.push({
          pathname: '/',
          query: {id: 1}
        }))
        break;
      case "order":
          this.props.dispatch(routerRedux.push({
            pathname: '/order',
            query: {id: 1}
          }))
          break;
      case "help":
        this.props.dispatch(routerRedux.push({
          pathname: '/help',
          query: {id: 1}
        }))
        break;
      case "my":
        this.props.dispatch(routerRedux.push({
          pathname: '/my',
          query: {id: 1}
        }))
        break;
      default:
        break;
    }
  }

  render(){
    return (
      <div className={styles.app}>
       
          {/* 导航 */}
        <TabBar
              className={styles.tabBar}
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="首页"
                key="index"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://i.loli.net/2019/06/19/5d0a36f8066a370277.png) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://i.loli.net/2019/06/19/5d0a37444814580678.png) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === 'index'}
                badge={1}
                onPress={this.handlerTabChange.bind(this,'index')}
                data-seed="logId"
              >
                {this.renderContent()}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://i.loli.net/2019/06/19/5d0a349f972d427995.png) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://i.loli.net/2019/06/19/5d0a35689c0a727869.png) center center /  21px 21px no-repeat' }}
                  />
                }
                title="订单"
                key="order"
                badge={'new'}
                selected={this.state.selectedTab === 'order'}
                onPress={this.handlerTabChange.bind(this,'order')}
                data-seed="logId1"
              >
                 {this.renderContent()}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://i.loli.net/2019/06/19/5d0a36a11f72488525.png) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://i.loli.net/2019/06/19/5d0a36c25907939911.png) center center /  21px 21px no-repeat' }}
                  />
                }
                title="帮助"
                key="help"
                dot
                selected={this.state.selectedTab === 'help'}
                onPress={this.handlerTabChange.bind(this,'help')}
              >
                 {this.renderContent()}
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'https://i.loli.net/2019/06/19/5d0a38f0386f420335.png' }}
                selectedIcon={{ uri: 'https://i.loli.net/2019/06/19/5d0a3908a278976459.png' }}
                title="我的"
                key="my"
                selected={this.state.selectedTab === 'my'}
                onPress={this.handlerTabChange.bind(this,'my')}
              >
                 {this.renderContent()}
              </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
export default withRouter(connect()(App));