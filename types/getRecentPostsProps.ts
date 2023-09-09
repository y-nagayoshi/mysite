export type GetRecentPostsProps = {
    postsConnection: PostsConnection;
}

type PostsConnection = {
    edges: Edge[];
}

type Edge = {
    node: Node;
}

type Node = {
    createdAt:     Date;
    featuredImage: FeaturedImage;
    title:         string;
    updatedAt:     Date;
    slug:          string;
}

type FeaturedImage = {
    url: string;
}
