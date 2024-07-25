import styled from 'styled-components';

export const MenuWrapper = styled.div`
    flex: 1;
    overflow: auto;
    height: 100%;
    border-radius: 4px;
    border-right: 1px solid #eee;
    @media (max-width: 500px) {
        height: auto;
    }
`;

export const Menu = styled.div`
    width: 20%;
    margin-top: 50px;
    margin-left: 10%;
    display: inline-block;
    cursor: pointer;
`;

export const MenuCover = styled.img`
    display: block;
    border-radius: 4px;
    width: 100%;
`;

export const MenuText = styled.div`
    padding: 12px 0;
    text-align: center;
    color: #333;
    font-size: 14px;
`;

export const MusicWrapper = styled.div`
    height: 100%;
    box-sizing: border-box;
`;

export const MusicContent = styled.div`
    padding: 0 50px 50px 50px;
    height: calc(100% - 106px);
    overflow: auto;
    box-sizing: border-box;
`;

export const MusicItem = styled.div`
    padding: 16px 40px;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    border-radius: 27px;
    &:hover {
        background: rgba(0, 0, 0, .1);
    }
    &.active {
        background: url('https://y.gtimg.cn/mediastyle/yqq/img/wave.gif?max_age=2592000&v=78979d47cc7dc55cab5d36b4c96168d5') 90% 20px no-repeat;
        background-color: rgba(0, 0, 0, .2);
        background-size: 12px;
    }
`;

export const ReturnBtn = styled.span`
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    margin: 50px 0 20px 86px;
    color: #333;
    padding: 10px 50px;
    border-radius: 25px;
    background: rgba(0, 0, 0, .1);
    &:hover {
        background: rgba(0, 0, 0, .2);
    }
`;

export const MusicPlayingIcon = styled.img`
    display: block;
    width: 16px;
    height: 16px;
`;