import React, { useState, Fragment }  from 'react'
import { Helmet } from 'react-helmet'
import './blog.scss'

const blog = (props) => {

    const [name, setName] = useState('Enter Name')

    function handleNameChange(e) {
        setName(e.target.value);
    }
    return (
        <Fragment>
            <Helmet>
            <title>Helmet Page Title Content</title>
            <meta name="description" content="Helmet application, unique longtail keywords here and pther meta content and seo stuff" />
            </Helmet>
                    <h1 className="blog">Blog</h1>
                    <input
                        value={name}
                        onChange={handleNameChange}
                    />
        </Fragment>
    )
}

export default blog
