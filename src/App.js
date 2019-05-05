import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Routes from './routes'
import client from './client'
import { ApolloProvider } from 'react-apollo'

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    position: relative;
`

const Nav = styled.ul`
    list-style-type: none;
    margin: 20px 0;
    padding: 0;
    display: flex;
`

const Item = styled.li`
    margin: 0 10px 0 0;
`

const Link = styled(NavLink)`
    color: blue;
    text-decoration: none;
    font-size: 20px;
    
    &.active {
        color: red;
        text-decoration: underline;
    }
`

export default function App() {
    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Container>
                    <Nav>
                        <Item>
                            <Link exact to='/'>Home</Link>
                        </Item>
                        <Item>
                            <Link exact to='/characters'>Characters</Link>
                        </Item>
                        <Item>
                            <Link last exact to='/episodes'>Episodes</Link>
                        </Item>
                    </Nav>

                    <Routes/>
                </Container>
            </ApolloProvider>
        </BrowserRouter>
    )
}
