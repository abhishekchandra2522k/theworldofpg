import { graphql } from 'graphql'
import { GraphQLClient } from 'graphql-request'
import { request, gql } from 'graphql-request'

const hygraph = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`
)

export const getPosts = async () => {
  const query = gql`
    query Assets {
      assets {
        createdAt
        id
        publishedAt
        fileName
        url
        updatedAt
      }
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await hygraph.request(query)

  return result.postsConnection.edges
}
