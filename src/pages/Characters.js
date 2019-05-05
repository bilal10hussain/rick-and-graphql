import React, { Fragment } from 'react'
import GetAllCharacters from './../queries/characters'

export default function Characters() {
    return (
        <Fragment>
            <h1>Characters</h1>
            <GetAllCharacters/>
        </Fragment>
    )
}
