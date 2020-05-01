import React from 'react'
import { Helmet } from 'react-helmet'
import './home.scss'

const home = () => {
    return (
        <div>
        <Helmet>
        <title>Helmet Page Title Content</title>
        <meta name="description" content="Helmet application, unique longtail keywords here and pther meta content and seo stuff" />
        </Helmet>
            <h1 className="home">Home</h1>
        </div>
    )
}

export default home
