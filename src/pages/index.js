import React from "react"
import usePosts from "../hooks/use-posts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"
import { css } from "@emotion/core"

const IndexPage = () => {
  const posts = usePosts()
  return (
    <Layout>
      <SEO title="Home" />
      <p>
        Hey, I am Ujval Joshi. I am versatile Front-end Developer with 6+ years
        of experience designing, developing, and managing complex web
        applications and admin tools. Specializes in React.js and responsive
        design.{" "}
      </p>
      <hr />
      <h2
        css={css`
          color: #333;
          font-weight: bold;
          font-size: 1.2rem;
        `}
      >
        Portfolio
      </h2>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        `}
      >
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
      <hr />
    </Layout>
  )
}

export default IndexPage
