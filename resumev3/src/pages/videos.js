import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import {Link, graphql } from "gatsby"
import { Styled } from 'theme-ui'

function Youtube({ data }) {
  return (
    <Layout>
    <SEO title="Youtube" />
    <h1>Youtube</h1>
    {data.allWordpressWpYoutube.edges.map(({ node }) => (
      <div key={'/youtube/' + node.slug}>
        <Styled.a as={Link} to={'/youtube/' + node.slug}>
          <h2>{node.title}</h2>
        </Styled.a>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
  </Layout>
  )
}

export default Youtube

export const query = graphql`
  query {
    allWordpressWpYoutube(sort: { fields: [date] }) {
        edges {
          node {
            title
            date
            slug
            link
          }
        }
      }
  }
`