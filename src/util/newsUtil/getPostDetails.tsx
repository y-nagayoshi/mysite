import { graphqlAPI } from "./graphqlAPI";

export async function getPostDetails(slug:string) {
    const postsPerPage = process.env.POST_PER_PAGE;

    const response = await fetch(graphqlAPI,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        query: `
        query getPostDetails {
            post(where: {slug: "${slug}"}) {
              author {
                name
                image {
                  url
                }
              }
              title
              updatedAt
              createdAt
              content {
                raw
              }
              featuredImage {
                url
              }
            }
          }
          
          `,
      }),
    });
    const json = await response.json();
  
    return json.data;
  }