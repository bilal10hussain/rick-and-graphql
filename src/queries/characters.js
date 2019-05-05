import React from 'react'
import gql from "graphql-tag"
import { Query } from 'react-apollo'
import styled from 'styled-components'
// import { format } from 'date-fns'

export const GET_ALL_CHARACTERS = gql`
{
    characters {
        results {
            id
            name
            image
            status
            species
            gender
        }
    }
}
`

const Item = styled.div`
    border: 1px solid blue;
    padding: 10px;
    margin: 20px auto;
    text-align: center;
    
    img {
        display: block;
        max-width: 100%;
        margin: 5px auto;
    }
`

const Name = styled.div`
    color: blue;
    font-size: 20px;
`

const Text = styled(Name)`
    color: black;
`

function GetAllCharacters() {
    return (
        <Query query={GET_ALL_CHARACTERS}>
            {({loading, error, data}) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error...</p>

                return data.characters.results.map(({id, name, image, status, species, gender}) => (
                    <Item key={id}>
                        <Name>{name}</Name>
                        <Text>{status}</Text>
                        <Text>{species}</Text>
                        <Text>{gender === "Male" ? "♂" : "♀"}</Text>
                        <img alt={name} src={image}/>
                    </Item>
                ))
            }}
        </Query>
    )
}

export default GetAllCharacters
