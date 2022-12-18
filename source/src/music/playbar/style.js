import styled from 'styled-components';

export const PlayBarWrapper = styled.div`
    position: fixed;
    bottom: 0;
    height: 110px;
    box-sizing: border-box;
    padding: 34px 120px;
    width: 100%;
    background: white;
    box-shadow: 0 -2px 4px #dfdfdf;
    display: flex;
    @media (max-width: 500px) {
        padding: 10px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const ControlBtn = styled.div`
    display: inline-block;
    width: 220px;
`;

export const Btn = styled.span`
    display: inline-block;
    width: 40px;
    margin-left: 30px;
    cursor: pointer;
    &.iconfont {
        font-size: 35px!important;
        color: #333;
    }
`;

export const Progress = styled.div`
    display: inline-block;
    flex: 1;
    height: 100%;
    position: relative;
    padding: 0 2%;
    box-sizing: border-box;
    font-size: 14px;
    @media (max-width: 500px) {
        display: none;
    }
`;

export const ProgressTitle = styled.div`
    float: left;
`;

export const ProgressBar = styled.div`
    background: #ddd;
    height: 4px;
    width: 100%;
    background: #eee;
    border-radius: 2px;
    margin-top: 28px;
    cursor: pointer;
`;

export const ProgressContent = styled.div`
    background: #999;
    border-radius: 2px;
    height: 100%;
    position: relative;
    &::after {
        content: '';
        height: 8px;
        width: 8px;
        border-radius: 4px;
        background: white;
        box-shadow: 0 0 4px #999;
        position: absolute;
        right: -4px;
        top: -2px;
    }
`;

export const ProgressTime = styled.div`
    float: right;
`;

export const Voice = styled.div`
    display: flex;
    align-items: center;
    width: 220px;
    @media (max-width: 500px) {
        display: none;
    }
`;

export const VoiceIcon = styled.span`
    padding: 12px 20px;
    &.iconfont {
        font-size: 22px;
        color: #333;
    }

`;

export const VoiceBar = styled.div`
    flex: 1;
    background: #ddd;
    height: 4px;
    width: calc(100% - 160px);
    background: #eee;
    border-radius: 2px;
    cursor: pointer;
`;

export const VoiceContent = styled.div`
    background: #999;
    border-radius: 2px;
    height: 100%;
    position: relative;
    &::after {
        content: '';
        height: 8px;
        width: 8px;
        border-radius: 4px;
        background: white;
        box-shadow: 0 0 4px #999;
        position: absolute;
        right: -4px;
        top: -2px;
    }
`;