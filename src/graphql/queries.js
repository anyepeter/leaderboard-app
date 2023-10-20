/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLink = /* GraphQL */ `
  query GetLink($id: ID!) {
    getLink(id: $id) {
      id
      youtube
      linkedin
      hashnode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLinks = /* GraphQL */ `
  query ListLinks(
    $filter: ModelLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        youtube
        linkedin
        hashnode
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWeek = /* GraphQL */ `
  query GetWeek($id: ID!) {
    getWeek(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listWeeks = /* GraphQL */ `
  query ListWeeks(
    $filter: ModelWeekFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeeks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getScore = /* GraphQL */ `
  query GetScore($id: ID!) {
    getScore(id: $id) {
      id
      value
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listScores = /* GraphQL */ `
  query ListScores(
    $filter: ModelScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        value
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
