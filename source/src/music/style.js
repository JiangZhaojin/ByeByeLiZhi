import styled from 'styled-components';

export const MusicWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    min-width; 600px;
    max-width: 1600px;
    display: flex;
    margin-top: 80px;
    height: calc(100% - 270px);
    background: white;
    border-radius: 10px;
    overflow: hidden;
    @media (max-width: 500px) {
        display: block;
        width: 100%;
        height: calc(100% - 120px);
        border-radius: 0;
        margin: 0;
        overflow: auto;
    }
`;