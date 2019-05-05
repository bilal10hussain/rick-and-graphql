import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Name, ResultItem, StatusPage, Text } from '../styles/general'

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

export default function GetAllCharacters() {
    return (
        <Query query={GET_ALL_CHARACTERS}>
            {({loading, error, data}) => {
                if (loading) return <StatusPage>Loading...</StatusPage>
                if (error) return <StatusPage>Error...</StatusPage>

                return data.characters.results.map(({id, name, image, status, species, gender}) => (
                    <ResultItem key={id}>
                        <Name>{name}</Name>
                        <Text>{status}</Text>
                        <Text>{species}</Text>
                        <Text>{gender === 'Male' ? '♂' : '♀'}</Text>
                        <img alt={name} src={image}/>
                    </ResultItem>
                ))
            }}
        </Query>
    )
}
