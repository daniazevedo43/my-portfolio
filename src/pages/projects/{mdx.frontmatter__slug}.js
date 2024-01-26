import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { title, projectImage, description, link } from '../../components/project.module.css'

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout /*pageTitle={data.mdx.frontmatter.title}*/>
      {/* <p>Posted: {data.mdx.frontmatter.date}</p> */}
      <div className={title}>
        <h2>{data.mdx.frontmatter.title}</h2>
      </div>
      <div className={projectImage}>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
      </div>
      <p className={description}>{data.mdx.frontmatter.description}</p>
      <p className={link}>{children}</p>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        hero_image_alt
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost