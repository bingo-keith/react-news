import React from 'react';
import { Row, Col, BackTop } from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_image_block';
import CommonComments from './common_comments';

export default class PCNewsDetails extends React.Component {
  constructor( ) {
    super( );
    this.state = {
      newsItem: ''
    };
  };
  componentDidMount( ) {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch( "http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions )
    .then(response => response.json( ))
    .then(json => {
      this.setState({ newsItem: json });
      document.title = this.state.newsItem.title + ' - React News | React 新闻平台 ;'
    });
  };
  createMarkup( ) {
    return { __html: this.state.newsItem.pagecontent };
  };
  render( ) {
    return (
      <div>
      <PCHeader />
        <Row>
          <Col span={2}></Col>
          <Col span={14} className="container">
            <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup( )}></div>
            <hr />
            <CommonComments uniquekey={this.props.params.uniquekey} />
          </Col>
          <Col span={6}>
            <PCNewsImageBlock type="top" count={40} width="100%" imageWidth="150px" cartTitle="相关新闻"/>
          </Col>
          <Col span={2}></Col>
        </Row>
        <PCFooter />
        <BackTop />
      </div>
    )
  }
}
