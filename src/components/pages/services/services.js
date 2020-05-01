import React from 'react'
import { Helmet } from 'react-helmet'
import './services.scss'

const services = () => {
    return (
        <div>
        <Helmet>
        <title>Helmet Page Title Content</title>
        <meta name="description" content="Helmet application, unique longtail keywords here and pther meta content and seo stuff" />
        </Helmet>
            <h1 className="services">Services</h1>
        </div>
    )
}

export default services
