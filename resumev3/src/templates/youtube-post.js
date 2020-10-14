import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Box, Grid } from "theme-ui"
import Checkout from "../components/checkout"

function YoutubePost({ data }) {
  const youtube = data.allWordpressWpYoutube.edges[0].node
  console.log(youtube)
  return (
    <Layout>
        <h1>{youtube.title}</h1>
      {/* <Grid  gap={2} columns={[2, '1fr 2fr']} style={{marginTop: "10%%"}}>
    <Box style={{textAlign:"center"}}> */}
        {/* <Img key={book.featured_media.localFile.childImageSharp.resolutions.src} fluid={book.featured_media.localFile.childImageSharp.fluid} /> */}
        {/* <br />
        <Checkout />
      </Box>
      <Box>
        <div dangerouslySetInnerHTML={{ __html: youtube.content }} />
        </Box> */}
      {/* </Grid> */}
    </Layout>
  )
}

export default YoutubePost

export const query = graphql`
  query($slug: String!) {
    allWordpressWpYoutube(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`
