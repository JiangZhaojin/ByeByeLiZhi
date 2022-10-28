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
        <CommentContent id="vcomments"></CommentContent>
        <DevelopInfo>
          域名不能备案，只能用国外服务器 很慢。
          可下载：<DevelopLink target="_blank" href="https://pan.baidu.com/s/1hQUZtLFxsBtoS0zbLm9qHQ">网盘(r87t)</DevelopLink>
        </DevelopInfo>
      </CommentWrapper>
    )
  }
}
