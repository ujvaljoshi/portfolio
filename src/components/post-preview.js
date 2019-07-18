import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"
import ReadLink from "../components/read-link"

const PostPreview = ({ post }) => (
  <article
    css={css`
      display: flex;
      flex-direction: column;
      margin-top: 0;
      padding-bottom: 1rem;
      width: 100%;
    `}
  >
    <div
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100%;
      `}
    >
      <Image
        css={css`
          * {
            margin-top: 0;
          }

          margin: 0 auto;
          border-radius: 10px;
        `}
        fluid={post.image.sharp.fluid}
        alt={post.title}
      />
    </div>
    <div>
      <h2 style={{ textAlign: "center" }}>{post.title}</h2>
    </div>
  </article>
)

export default PostPreview
