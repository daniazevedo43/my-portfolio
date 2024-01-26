// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import html from '../images/HTML5.png'
import css from '../images/CSS3.png'
import javascript from '../images/JavaScript.png'
import react from '../images/React.png'
import java from '../images/Java.png'
import csharp from '../images/Csharp.png'
import sql from '../images/SQL.png'
import python from '../images/Python.png'
import {
    profileImage, about, aboutContainer, text, 
    text1, text2, text3, skills, skills2, skill, 
    skill2, skill3, skill4, skill5, skill6, skill7, 
    skill8,
} from '../components/layout.module.css'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
      <div className={about}>
        <StaticImage
          className={profileImage}
          src="../images/aboutmepic.jpg"
          style={{height: '560px', width: '420px'}}
        />
        <div className={aboutContainer}>
          <div className={text}>
            <div className={text1}>About me</div>
                <div className={text2}>I'm 25 years old and I've always 
                    been interested in computers since I was young and 
                    I've always wanted to learn more and work in this 
                    area. In high school I took a professional course in a 
                    Management Informatics. Then I went to college where I 
                    took a course in Networks and Computer Systems. 
                    Initially, I wanted to work more on Networks, but 
                    after having completed my internship, I decided to 
                    move on and get a degree in Computer Science to study
                    programming.
                </div>
                <div className={text3}>Skills: </div>
                
                <div className={skills}>
                    <div className={skill}>
                        <img src={html} alt="Logo" />
                    </div>
                    <div className={skill2}>
                        <img src={css} alt="Logo" />
                    </div>
                    <div className={skill3}>
                        <img src={javascript} alt="Logo" />
                    </div>
                    <div className={skill4}>
                        <img src={react} alt="Logo" />
                    </div>
                </div>  
                <div className={skills2}>
                    <div className={skill5}>
                        <img src={java} alt="Logo" />
                    </div>
                    <div className={skill6}>
                        <img src={csharp} alt="Logo" />
                    </div>
                    <div className={skill7}>
                        <img src={sql} alt="Logo" />
                    </div>
                    <div className={skill8}>
                        <img src={python} alt="Logo" />
                    </div>
                </div>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage