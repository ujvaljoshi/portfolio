import React from "react"
import { css } from "@emotion/core"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Header = () => (
  <footer
    css={css`
      padding-bottom: 2rem;
      max-width: 90vw;
      width: 550px;
      margin: 2rem auto;
    `}
  >
    <p>
      &copy; {new Date().getFullYear()}, Built with{" "}
      <OutboundLink href="https://www.gatsbyjs.org" target="_blank">
        Gatsby
      </OutboundLink>
    </p>
  </footer>
)

export default Header
