import { Link } from "gatsby"
import * as React from "react"

// markup
const IndexPage = () => {
  return (
    <main>
      <head>
        <title>Chufan Chen</title>
      </head>
      <body>
        <div>
          <Link to="/blog">Blog</Link>
          <Link to="/teaching">Teaching</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/dn42">DN42</Link>
        </div>
      </body>
    </main>
  )
}

export default IndexPage
