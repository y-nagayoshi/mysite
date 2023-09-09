import { graphqlAPI } from "./graphqlAPI";

export async function getNumOfPosts(category?: string) {
    const postsPerPage = process.env.POST_PER_PAGE;

    const response = await fetch(graphqlAPI,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        query: `
        query getNumOfPosts {
            postsConnection ${typeof category === "string" ? `(where: {categories_some: {slug: "${category}"}})` : ''}{
              edges {
                node {
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