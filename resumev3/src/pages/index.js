import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Grid, Box, Flex, Button } from 'theme-ui'

function IndexPage({data}) {
  // request the Home page from wp
  const home = data.allWordpressPage.edges[0].node
  return(
  <Layout>
    <SEO title="Home" />

    <Grid  gap={4} columns={[2, '1fr 2fr']}>
    <Box >
      <Img style={{  position: "-webkit-sticky",
  position: "sticky",
  top: "0"}} fluid={home.featured_media.localFile.childImageSharp.fluid} />
    </Box>
    <Box style={{border: "dashed 1px black", padding: "2%"}} dangerouslySetInnerHTML={{ __html: home.content }}>
    </Box>
    </Grid>
  </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          title
          content
          featured_media {
            localFile {
              childImageSharp{
                fluid(maxWidth: 200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`