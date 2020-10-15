import React, { useState } from "react"
import ForecastList from '../components/forecast-list'

import Layout from "../components/layout"
import "../components/app.css"
import SEO from "../components/seo"

const IndexPage = () => {
  const [cssActive, setCssActive] = useState(false)
  return <Layout cssActive={cssActive}>
      <SEO title="Home" />
      <h1>Welcome to our wonderful website!</h1>
      <p>Oh wait, this doesn't look like a website... somethings not quite right...</p>
      <p>I wander what happens if you pressed that button?</p>
      <button style={{marginBottom:'20px'}}onClick={() => setCssActive(!cssActive)}>Press me</button>
      <ForecastList
        cssEnabled={cssActive}
        city="Melbourne"
        countryCode="AU"
      />
      <ForecastList
        cssEnabled={cssActive}
        city="Sydney"
        countryCode="AU"
      />
      <ForecastList
        cssEnabled={cssActive}
        city="Auckland"
        countryCode="NZ"
      />
      <ForecastList
        cssEnabled={cssActive}
        city="Nicaragua"
        countryCode="NI"
      />
      <ForecastList
        cssEnabled={cssActive}
        city="Utah"
        countryCode="US"
      />
      <ForecastList
        cssEnabled={cssActive}
        city="Seattle"
        countryCode="US"
      />
    </Layout>
}

export default IndexPage
