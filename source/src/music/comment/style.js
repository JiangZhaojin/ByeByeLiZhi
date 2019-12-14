import styled from 'styled-components';

export const CommentWrapper = styled.div`
    position: absolute;
    right: 10%;
    top 10%;
    width: 25%;
    height: 80%;
    box-sizing: border-box;
`;

export const TipsWrapper = styled.div`
    width: 100%;
    height 90px;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0 -2px 10px #ddd;
    border-radius: 4px;
    background: white;
    margin-bottom: 6px;
    overflow: hidden;
`;

export const MoneyCode = styled.div`
    float: left;
    width: 80px;
    height: 100%;
    position: relative;
    background: url(http://byebyelizhi.top/static/img/alipay2.png);
    background-size: contain;
`;

export const MoneyCode2 = styled.div`
    width: 100%;
    height: 14px;
    position: absolute;
    bottom: 0;
    background: url(http://byebyelizhi.top/static/img/alipay.png) no-repeat 50% 50%;
    background-size: contain;
`;

export const TipsText = styled.div`
    line-height: 3;
    text-align: center;
    padding: 0 10px 0 100px;
    color: #999;
    font-size: 12px;
`;

export const CommentContent = styled.div`
    overflow: auto;
    height: calc(100% - 150px);
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 -2px 10px #ddd;
    border-radius: 4px;
    background: white;
`;

export const DevelopInfo = styled.div`
    font-size: 12px;
    color: #999;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    text-align: center;
    box-shadow: 0 2px 6px #ddd;
    border-radius: 4px;
    background: white;
`;

export const DevelopLink = styled.a`
    text-decoration: none;
    color: #999;
    font-weight: bold;
    &:hover {
        color: #1abc9c;
    }
`;