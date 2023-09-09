export type getPostsProps = {
    postsConnection: PostsConnection;
}

type PostsConnection = {
    edges:    Edge[];
    pageInfo: PageInfo;
}

type Edge = {
    node: Node;
}

type Node = {
    createdAt:     Date;
    excerpt:       string;
    featuredImage: Image;
    title:         string;
    stage:         string;
    updatedAt:     Date;
    author:        Author;
    slug:          string;
}

type Author = {
    name:  string;
    image: Image;
}

type Image = {
    url: string;
}

type PageInfo = {
    hasNextPage:     boolean;
    hasPreviousPage: boolean;
    pageSize:        number;
}
