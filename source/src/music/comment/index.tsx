import React, { Component } from 'react';
import Valine from 'valine';
import leanStor from 'leancloud-storage';
import {
  CommentWrapper,
  CommentContent,
  DevelopInfo,
  DevelopLink,
  TipsWrapper,
  MoneyCode,
  MoneyCode2,
  TipsText
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
<!--         <TipsWrapper>
          <MoneyCode><MoneyCode2></MoneyCode2></MoneyCode>
          <TipsText>
            
          </TipsText>
        </TipsWrapper> -->
        <CommentContent id="vcomments"></CommentContent>
        <DevelopInfo>
          由于域名不能备案，只能用国外服务器。
<!--           <DevelopLink target="_blank" href="https://weibo.com/u/6894442207">微博</DevelopLink>&nbsp;&nbsp; -->
          下载：<DevelopLink target="_blank" href="https://pan.baidu.com/s/1hQUZtLFxsBtoS0zbLm9qHQ">网盘(r87t)</DevelopLink>
        </DevelopInfo>
      </CommentWrapper>
    )
  }
}
