export type RecentPostsProps = {
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
