import { graphqlAPI } from "./graphqlAPI";

export async function getPosts(pageNum:number,category?:string) {
    // const postsPerPage:number = process.env.POST_PER_PAGE != undefined && isNaN(parseInt(process.env.POST_PER_PAGE)) ? parseInt(process.env.POST_PER_PAGE) : 4;
    const postsPerPage:number = 4;

    const response = await fetch(graphqlAPI,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        query: `
        query getPost {
          postsConnection(
            orderBy: updatedAt_DESC 
            stage: PUBLISHED
            skip: ${((pageNum - 1)) * postsPerPage}
            first: ${postsPerPage}
            ${typeof category === "string" ? `where: {AND: {categories_some: {slug: "${category}"}}}` : ''}
            ) {
            edges {
              node {
                createdAt
                excerpt
                featuredImage {
                  url
                }
                title
                stage
                updatedAt
                author {
                  name
                  image {
                    url
                  }
                }
                slug
              }
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              pageSize
            }
          }
        }
          `,
      }),
    });
    const json = await response.json();
  
    return json.data;
  }