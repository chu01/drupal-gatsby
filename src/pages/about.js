import React from "react"
import { graphql, Link } from "gatsby"


import Layout from "../components/layout"
// import Image from "../components/image"
//import SEO from "../components/seo"

const AboutPage = ({ data }) => {
    console.log(data.allNodePage);
    const Aboutpage = data.allNodePage.edges[0].node;
    return (
        <Layout>
            <h3> { Aboutpage.title }</h3>
            <div dangerouslySetInnerHTML={{__html: Aboutpage.body.value }} />

        <Link to="/">Back</Link> <br />
        {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
        </Layout>
    )


}

export default AboutPage

export const query = graphql`
query{
    allNodePage(filter: { drupal_id: {eq: "3edb6591-24c4-410b-8818-c1e9f42645ab"} }) {
		edges{
			node{
				drupal_id
        title
        body {
          value
        }
      }
    }
  }
}
`
