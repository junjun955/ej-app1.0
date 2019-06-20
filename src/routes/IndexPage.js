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
import { Grid, Carousel, WingBlank } from 'antd-mobile';

const data1 = [{
  icon: x,
  text: `洗护`
}, {
  icon: b,
  text: `保洁`
}, {
  icon: k,
  text: `看护`
}, {
  icon: y,
  text: `月嫂`
}, {
  icon: q,
  text: `其他`
}
]

const data2 = [{
  icon: xiyi,
  text: `洗衣`
}, {
  icon: youyanji,
  text: `清洗油烟机`
}, {
  icon: '',
  text: `更多热门服务`
}
]

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
      categories: []
    }
  }
  // 当前组件绑定到根组件上执行【生命周期钩子】
  componentDidMount() {
    this.loadCategory();

// simulate img loading
setTimeout(() => {
  this.setState({
    data: ['M00/00/05/rBAACV0LAhuADeCdAAdjf5JGOGs255', 'M00/00/05/rBAACV0K47GAPhtTAASkPRP1KkQ709', 'M00/00/05/rBAACV0K482AYg4DAAgB1zLG6xY278'],
  });
}, 100);

  }
  loadCategory() {
    axios.get('/category/findAll')
      .then((result) => {
        // 将数据设置到局部状态中
        this.setState({
          categories: result.data
        })
      });
  }
  toProduct() {
    this.props.history.push("/product");
  }
  render() {
    return (
      <div>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://localhost:8000/#/order"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`http://134.175.154.93:8888/group1/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>

        {/* 图片广告 */}
        {/* <div className={styles.photoWall}>
          <img className={styles.photo} src={t} alt="加载失败"/>
        </div> */}
        {/* 栏目 */}
        <div className="sub-title1"></div>
        <Grid data={data1} isCarousel onClick={this.toProduct.bind(this)}

        />
        {/* 产品 */}
        <div>
          <div className="sub-title2"></div>
          <Grid data={data2} columnNum={3} itemStyle={{
            height: '80px',
            background: 'rgba(0,0,0,.05)'
          }} />
        </div>
      </div>
    );
  }
}

// connect函数可以在this.props中注入一些对象和方法增强组件功能
export default connect()(IndexPage);