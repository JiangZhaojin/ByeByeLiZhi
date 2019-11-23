import React, { Component } from 'react';
import Valine from 'valine';
import leanStor from 'leancloud-storage';
import { CommentWrapper, CommentContent, DevelopInfo, DevelopLink } from './style.js';
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
          建议/吐槽&联系开发者：
          <DevelopLink target="_blank" href="https://weibo.com/u/6894442207">微博</DevelopLink>&nbsp;&nbsp;
          下载：<DevelopLink target="_blank" href="https://pan.baidu.com/s/1ctDoQigFVjmYVYkVs9Fx2w">百度网盘</DevelopLink>(提取码:ob6n)
        </DevelopInfo>
      </CommentWrapper>
    )
  }
}