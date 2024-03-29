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
  <header
    css={css`
      background: #fff;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      padding-top: 2rem;
      padding-bottom: 2rem;
      max-width: 90vw;
      width: 550px;
      margin: 2rem auto;
    `}
  >
    <NavLink
      to="/"
      css={css`
        color: #333;
        font-weight: bold;
      `}
    >
      Ujval Joshi
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/contact/" activeClassName="current-page">
        Contact
      </NavLink>
    </nav>
  </header>
)

export default Header
