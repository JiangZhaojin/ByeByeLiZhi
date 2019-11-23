import styled from 'styled-components';

export const CommentWrapper = styled.div`
    position: absolute;
    right: 10%;
    top 10%;
    width: 25%;
    height: 80%;
    box-sizing: border-box;
`;

export const CommentContent = styled.div`
    overflow: auto;
    height: calc(100% - 40px);
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