// // Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Button from '@mui/base/Button';
import { container, form, title, buttons, sendButton, clearButton, clear, name, email, message, messageTextArea } from '../components/contact.module.css'  

// // Step 2: Define your component
const Contact = () => {
  return (
    <Layout /*pageTitle="Contact"*/>
      <div className={container}>
        <form className={form} method="post" action="https://formspree.io/f/mlekkgep">
          <h2 className={title}>Contact Me</h2>
          <br />
          <div>
            <label>
              <p id={name}>Name</p>
              <input type="text" name="name" id="name" />
            </label>
          </div>
          <br />
          <br />
          <div>
            <label>
              <p id={email}>Email</p>
              <input type="email" name="email" id="email" />
            </label>
          </div>
          <br />
          <br />
          <div>
            <label>
              <p id={message}>Message</p>
              <br />
              <textarea type="message" name="message" id={messageTextArea} />
            </label>
          </div>
          <br />
          <br />
          <div className={buttons}>
            <div className={sendButton}>
              <Button type="submit">Send</Button>
            </div>
            <div className={clearButton}>
              <input className={clear} type="reset" value="Clear" />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

// // Step 3: Export your component
export default Contact 

