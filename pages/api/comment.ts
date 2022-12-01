// Any file inside the folder pages/api is mapped to /api/* and
// will be treated as an API endpoint instead of a page
import type { NextApiRequest, NextApiResponse } from 'next'
import { graphql } from 'graphql'
import { GraphQLClient } from 'graphql-request'
import { request, gql } from 'graphql-request'

const hygraph = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`
)

const graphqlAPI = `${process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT}`

type Data = {
  name: string
}

export default function comments(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env}`,
    },
  })
}
