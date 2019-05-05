import React, { Fragment } from 'react'
import GetAllEpisodes from '../queries/episodes'

export default function Episodes() {
    return (
        <Fragment>
            <h1>Episodes</h1>
            <GetAllEpisodes/>
        </Fragment>
    )
}
