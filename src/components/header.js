import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #777;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    color: #000;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
  <header
    css={css`
      background: #fff;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 2rem 5vw;

      @media (min-width: calc(550px + 10vw)) {
        padding-left: calc((100vw - 550px - 0.5rem) / 2);
        padding-right: calc((100vw - 550px - 0.5rem) / 2);
      }
    `}
  >
    <NavLink to="/">Ujval Joshi</NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
      <NavLink to="/blog/" activeClassName="current-page">
        Blog
      </NavLink>
      <NavLink to="/portfolio/" activeClassName="current-page">
        Work
      </NavLink>
      <NavLink to="/contact/" activeClassName="current-page">
        Contact
      </NavLink>
    </nav>
  </header>
)

export default Header
