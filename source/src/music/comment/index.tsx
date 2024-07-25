import React, { Component } from 'react';
import Valine from 'valine';
import leanStor from 'leancloud-storage';
import {
  CommentWrapper,
  CommentContent,
  // DevelopInfo,
  Downloader,
  TipsWrapper,
  // MoneyInfo,
  // MoneyCode,
  // MoneyCode2,
} from './style.js';

import './polyfill.css';

export default class Comment extends Component<any> {
  componentDidMount() {
    window.AV = leanStor;
    new Valine({
      el: '#vcomments' ,
      appId: 'i1youaNIFoYRKQnwxjUybheo-gzGzoHsz',
      appKey: 'GKvFx4a9VWmkqKfkkYGKudF4',
      notify: false, 
      verify: false, 
      avatar: 'monsterid', 
      placeholder: '说点什么吧～',
      pageSize: 10
    });
  }
  render() {
    return (
      <CommentWrapper>
        <CommentContent id="vcomments"></CommentContent>
        <TipsWrapper>
          <Downloader target="_blank" href="https://github.com/JiangZhaojin/ByeByeLiZhi/tree/master/music">去GitHub下载</Downloader>
          {/* <DevelopInfo target="_blank" href="https://weibo.com/u/6894442207">联系开发者</DevelopInfo> */}
          {/* <MoneyInfo>
            <div>请开发者喝奶茶</div>
            <MoneyCode></MoneyCode>
            <MoneyCode2></MoneyCode2>
          </MoneyInfo> */}
        </TipsWrapper>
      </CommentWrapper>
    )
  }
}
