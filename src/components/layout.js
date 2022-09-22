/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {css, Global} from "@emotion/core"
import useSiteMetadata from "../hooks/use-sitemetadata"
import Header from "./header"
import Footer from "./footer"
import Helmet from "react-helmet"
import "./layout.css"

const Layout = ({children}) => {
    const {title, description} = useSiteMetadata()

    return (
        <>
            <Global
                styles={css`
                  * {
                    box-sizing: border-box;
                    margin: 0;
                  }

                  /* More info: https://bit.ly/2PsCnzk */

                  * + * {
                    margin-top: 1rem;
                  }

                  html,
                  body {
                    margin: 0;
                    color: #333;
                    font-family: "IBM Plex Sans", sans-serif;
                    font-size: 14px;
                    line-height: 1.4;

                    @media (min-width: calc(550px + 10vw)) {
                      font-size: 14px;
                    }

                    /* remove margin for the main div that Gatsby mounts into */

                    > div {
                      margin-top: 0;
                    }
                  }

                  h1,
                  h2,
                  h3,
                  h4,
                  h5,
                  h6 {
                    color: #333;
                    line-height: 1.1;

                    + * {
                      margin-top: 0.5rem;
                    }
                  }

                  h2 {
                    font-size: 1.2rem;
                  }

                  p {
                    padding: 5px 0;
                    line-height: 1.9;
                    font-weight: 400;
                  }

                  strong {
                    color: #222;
                  }

                  li {
                    margin-top: 0.25rem;
                  }

                  hr {
                    border: 1px solid #eee;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                    border-bottom: 0;
                  }
                `}
            />
            <Helmet>
                <html lang="en"/>
                <title>{title} - Front-End Developer</title>
                <meta name="description" content={description}/>
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6420781405737455"
                        crossOrigin="anonymous"></script>
            </Helmet>
            <Header/>
            <main
                css={css`
                  margin: 2rem auto;
                  max-width: 90vw;
                  width: 550px;
                `}
            >
                {children}
            </main>
            <Footer/>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
