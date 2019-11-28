import React from "react"
import { css } from "@emotion/core"

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
      <a href="https://www.gatsbyjs.org" target="_blank">
        Gatsby
      </a>
    </p>
  </footer>
)

export default Header
