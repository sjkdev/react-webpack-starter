import React, { useState, useEffect } from 'react'
import { Col, Row} from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import './about.scss'

const CountVal = [1];

const about = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
       <Helmet>
       <title>Helmet Page Title Content</title>
       <meta name="description" content="Helmet application, unique longtail keywords here and pther meta content and seo stuff" />
       </Helmet>
            <h1 className="about">About</h1>
            <Row>
                <Col>
                    <div className="Counter">Count: {count}</div>
                    <div>
                        {CountVal.map(value => {
                            return <button onClick={() => setCount(count + value)}>+{value}</button>
                        })
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default about
