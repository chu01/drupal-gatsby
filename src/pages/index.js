import React from "react"
import { graphql, Link } from "gatsby"
// import { StaticQuery } from "gatsby"
import Img from "gatsby-image"


import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allNodeArticle.edges.map((edge) => (
      <>
        <h3><Link to={ edge.node.id }>{ edge.node.title }</Link></h3>
        <small><em>{ Date(edge.node.created) }</em></small>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, width: `100%` }}>
          <Img fluid={ edge.node.relationships.field_image.localFile.childImageSharp.fluid } />
        </div>
        <div dangerouslySetInnerHTML={{ __html: edge.node.body.value.split(' ').splice(0, 50).join(' ') + '...' }}></div>
      </>
    ))}



    <Link to="/about/">Go to about page</Link> <br />
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage

export const query = graphql`
query{
  allNodeArticle{
    edges{
      node{
        id
        title
        body{
          value
        }
        created
        relationships{
					field_image{
						localFile{
							childImageSharp{
								fluid(maxWidth: 400, quality: 100){
									...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
}
`

// const IndexPage = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         allNodeArticle {
//           edges {
//             node {
//               title
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <Layout>
//         <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//         <p>{ data.allNodeArticle.edges[0].node.title }</p>
//         <h1>Hi people</h1>
//         <p>Welcome to your new Gatsby site.</p>
//         <p>Now go build something great.</p>
//         <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//           <Image />
//         </div>
//         <Link to="/page-2/">Go to page 2</Link>
//       </Layout>
//     )}
//   />
// )
// export default IndexPage