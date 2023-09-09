export type postProps = {
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
