import React from 'react';
import { Row, Col } from 'antd';
import { Tabs, Carousel } from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_products';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
  render( ) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slideToShow: 1,
      autoplay: true
    };
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class="container">
            <div class="leftContainer">
              <div class="carousel">
                <Carousel {...settings}>
                  <div><img src="./src/images/carousel_1.jpg"/></div>
                  <div><img src="./src/images/carousel_2.jpg"/></div>
                  <div><img src="./src/images/carousel_3.jpg"/></div>
                  <div><img src="./src/images/carousel_4.jpg"/></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/> {/* <PCNewsImageBlock count={6} type="yule" width="400px" cartTitle="娱乐头条" imageWidth="112px" />*/}
            </div>
            <Tabs class="tabs_news">
              <TabPane tab="新闻" key="1">
                <PCNewsBlock count={20} type="top" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="社会" key="2">
                <PCNewsBlock count={20} type="shehui" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="国内" key="3">
                <PCNewsBlock count={20} type="guonei" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="国际" key="4">
                <PCNewsBlock count={20} type="guoji" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="娱乐" key="5">
                <PCNewsBlock count={20} type="yule" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="体育" key="6">
                <PCNewsBlock count={20} type="tiyu" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="科技" key="7">
                <PCNewsBlock count={20} type="keji" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="时尚" key="8">
                <PCNewsBlock count={20} type="yule" width="100%" bordered="false"/>
              </TabPane>
            </Tabs>
            <Tabs class="tabs_product">
              <TabPane tab="ReactNews最后一块赋值粘贴过来的组件" key="1">
                <PCProduct/>
              </TabPane>
            </Tabs>
            <div>
              <PCNewsImageBlock count={12} type="shehui" width="100%" cartTitle="社会新闻" imageWidth="112px"/>
              <PCNewsImageBlock count={12} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="112px"/>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
