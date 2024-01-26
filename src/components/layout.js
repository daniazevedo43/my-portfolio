import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import AppBar from '@mui/material/AppBar';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import {
    container,
    heading,
    nav,
    navLinks,
    navLinkItem,
    navLinkText,
    logo,
    homeItem,
    underline
  } from './layout.module.css'
import { Toolbar, Typography } from '@mui/material';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <AppBar className={nav}>
          <Toolbar>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/" className={logo}>
                    Daniel Azevedo
                </Link>
              </li>
              <li id={homeItem} className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                    Home
                </Link>
                <div className={underline}></div>
              </li>
              <li className={navLinkItem}>
                <Link to="/about" className={navLinkText}>
                    About
                </Link>
                <div className={underline}></div>
              </li>
              <li className={navLinkItem}>
                <Link to="/projects" className={navLinkText}>
                  Projects
                </Link>
                <div className={underline}></div>
              </li>
              <li className={navLinkItem}>
                <Link to="/contact" className={navLinkText}>
                  Contact
                </Link>
                <div className={underline}></div>
              </li>
          </ul>
          </Toolbar>
        </AppBar>
      
      <br />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout