import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #777;
  font-size: 1.2rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    color: #333;
  }

  &:last-of-type {
    margin-right: 0;
  }

  :hover {
    color: #333;
  }
`

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
