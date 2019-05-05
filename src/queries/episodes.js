import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Name, ResultItem, StatusPage, Text } from '../styles/general'

export const GET_ALL_EPISODES = gql`
{
    episodes {
        results {
            id
            name
            air_date
            episode
        }
    }
}
`

export default function GetAllEpisodes() {
    return (
        <Query query={GET_ALL_EPISODES}>
            {({loading, error, data}) => {
                if (loading) return <StatusPage>Loading...</StatusPage>
                if (error) return <StatusPage>Error...</StatusPage>

                return data.episodes.results.map(({id, name, air_date, episode}) => (
                    <ResultItem key={id}>
                        <Name>{episode}: {name}</Name>
                        <Text>{air_date}</Text>
                    </ResultItem>
                ))
            }}
        </Query>
    )
}
