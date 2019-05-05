import React from 'react'
import { ApolloProvider } from 'react-apollo'
import styled from 'styled-components'
import client from './client'
import GetAllCharacters from './queries/characters'

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    position: relative;
`;

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Container>
                <GetAllCharacters/>
            </Container>
        </ApolloProvider>
    )
}
