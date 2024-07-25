import styled from 'styled-components';
import AlipayImg from '../../static/picture/alipay.jpeg';
import WeiboImg from '../../static/picture/weibo.jpeg';
import WechatImg from '../../static/picture/wechatpay.png';
// import BaiduImg from '../../static/picture/baidudisk.png';


export const CommentWrapper = styled.div`
    position: relative
    width: 400px;
    max-width: 100%;
`;

export const CommentContent = styled.div`
    overflow: auto;
    height: calc(100% - 40px);
    padding: 20px;
    box-sizing: border-box;
`;

export const TipsWrapper = styled.div`
    width: 100%;
    display: flex;
    border-top: 1px solid #eee;
    font-size: 14px;
    color: #333;
    font-weight: bold;
    text-align: center;
`;

export const Downloader = styled.a`
    flex: 1;
    padding: 13px 4px;
    border-right: 1px solid #eee;
    background-size: 60%;
    cursor: pointer;
    &:hover {
        color: #1abc9c;
    }
`;

export const MoneyInfo = styled.div`
    flex: 2;
    padding: 4px;
    overflow: hidden;
    line-height: 1.4;
`;

export const MoneyCode = styled.div`
    float: right;
    padding: 44px;
    background: url(${WechatImg}) no-repeat;
    background-size: contain;
`;

export const MoneyCode2 = styled.div`
    float: right;
    padding: 44px;
    background: url(${AlipayImg}) no-repeat 50% 50%;
    background-size: contain;
`;

export const DevelopInfo = styled.a`
    flex: 1;
    padding: 20px 4px;
    border-right: 1px solid #eee;
    box-sizing: border-box;
    background: url(${WeiboImg}) no-repeat 50% 70%;
    background-size: 120%;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 8px #1abc9c;
        z-index: 1;
    }
`;