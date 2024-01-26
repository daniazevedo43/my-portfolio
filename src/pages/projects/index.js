import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Grid from '@mui/material/Grid';
import { 
  title, projects, project, projectContainer, projectImage, readMore
} from '../../components/projects.module.css'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <div className={title}>
        <h2>My Projects</h2>
      </div>
      <Grid className={projects}>
        <Grid className={project}>
          {
            data.allMdx.nodes.map((node) => {
              const image = getImage(node.frontmatter.hero_image)
              return (
                <div>
                  <article key={node.id} className={projectContainer}>
                    <GatsbyImage
                      className={projectImage}
                      image={image}
                      alt={node.frontmatter.hero_image_alt}
                    />
                    <h2> {node.frontmatter.title} </h2>
                    <p>Posted: {node.frontmatter.date}</p>
                    <Link to={`/projects/${node.frontmatter.slug}`} className={readMore}>
                        <p className={readMore}>Read more</p>
                    </Link>
                  </article>
                </div>
              )
            })
          }
        </Grid>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="My Projects" />

export default BlogPage