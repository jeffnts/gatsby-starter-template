import React from "react"

import { DefaultLayout } from "../layouts"

import {SEO} from "../components"

const IndexPage = () => (
  <DefaultLayout>
    <SEO title="Home" keywords={[``, ``, ``]} />
    <h1>Home</h1>
  </DefaultLayout>
)

export default IndexPage
