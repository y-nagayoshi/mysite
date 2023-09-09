import { graphqlAPI } from "./graphqlAPI";

export async function getRecentPosts() {
    const postsPerPage = process.env.POST_PER_PAGE;

    const response = await fetch(graphqlAPI,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        query: `
        query getRecentPosts {
          postsConnection(orderBy: updatedAt_DESC, stage: PUBLISHED, first: 3) {
            edges {
              node {
                createdAt
                featuredImage {
                  url
                }
                title
                updatedAt
                slug
              }
            }
          }
        }
          `,
      }),
    });
    const json = await response.json();
  
    return json.data;
  }