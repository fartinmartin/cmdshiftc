const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const slugify = require("./src/hooks/slugify")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // if node is an MDX file AND is in the posts directory, then create a slug field for that node
  if (
    node.internal.type === "Mdx" &&
    node.fileAbsolutePath.includes(`${__dirname}/src/posts/`)
  ) {
    const value = createFilePath({ node, getNode })
    const title = node.frontmatter.title
    const prefix = "/tut"
    createNodeField({
      name: "slug",
      node,
      // if MDX has a title in frontmatter, use that as slug, else use filename
      value: title ? `${prefix}/${slugify(title)}` : `${prefix}${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // GraphQL query sorted by date and filtered by directory (`/posts` only)
  const postQuery = await graphql(`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/src/posts/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (postQuery.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = postQuery.data.allMdx.edges
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/layouts/post.js`),
      context: { id: node.id },
    })
  })
}
