import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { StatusPage } from '../styles/general'

export default function NotFound() {
    return (
        <Fragment>
            <StatusPage>Page not found</StatusPage>
            <p>Try going to the <Link to="/">homepage</Link></p>
        </Fragment>
    )
}
