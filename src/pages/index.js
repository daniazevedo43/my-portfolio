import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Button from '@mui/base/Button';
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import {
  profileImage,
  home,
  homeContainer,
  text,
  text1,
  text2,
  text3,
  btnGithub,
  icon,
} from '../components/layout.module.css'

const IndexPage = () => {
  return (
    <Layout /*pageTitle="Home"*/>
      {/* <p>Hello! My name is Daniel Azevedo, and I'm a web developer</p> */}
      <div className={home}>
        <StaticImage
          className={profileImage}
          src="../images/profile.jpg"
          style={{height: '420px', width: '420px', borderRadius: '50%'}}
        />
        <div className={homeContainer}>
          <div className={text}>
            <div className={text1}>Hello!</div>
            <div className={text2}>I'm Daniel</div>
            <div className={text3}>And I'm a web developer</div>
          </div>
          <div className={btnGithub}>
            <Button onClick={() => window.open('https://github.com/daniazevedo43')}><AiFillGithub className={icon}/>  My Github</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
