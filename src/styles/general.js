import styled from 'styled-components';

export const StatusPage = styled.div`
    color: blue;
    font-size: 32px;
`

export const ResultItem = styled.div`
    border: 1px solid blue;
    padding: 10px;
    margin: 40px auto;
    text-align: center;
    transition: all 0.15s;
    
    :hover {
        border: 1px solid red;
    }
    
    img {
        display: block;
        max-width: 100%;
        margin: 5px auto;
    }
`

export const Name = styled.div`
    color: blue;
    font-size: 20px;
`

export const Text = styled(Name)`
    color: black;
`
