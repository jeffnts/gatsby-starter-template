import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { Wrapper } from "./DefaultLayoutStye"
import { Navbar, Footer } from "../../components"

const DefaultLayout = ({children}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>

        <Wrapper>
          <Navbar/>
          <main>{children}</main>
          <Footer/>
        </Wrapper>
      </>
    )}
  />
)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default DefaultLayout
