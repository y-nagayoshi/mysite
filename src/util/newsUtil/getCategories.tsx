import { graphqlAPI } from "./graphqlAPI";

export async function getCategories() {
    const postsPerPage = process.env.POST_PER_PAGE;

    const response = await fetch(graphqlAPI,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        query: `
        query getCategories {
          categoriesConnection {
            edges {
              node {
                name
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