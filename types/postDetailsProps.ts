export type postDetailsProps = {
    post: Post;
}

type Data = {
    post: Post;
}

type Post = {
    author:        Author;
    title:         string;
    updatedAt:     Date;
    createdAt:     Date;
    content:       Content;
    featuredImage: Image;
}

type Author = {
    name:  string;
    image: Image;
}

type Image = {
    url: string;
}

type Content = {
    raw: Raw;
}

type Raw = {
    children: RawChild[];
}

type RawChild = {
    type:     Type;
    children: ChildChild[];
}

type ChildChild = {
    text:  string;
    code?: boolean;
}

enum Type {
    HeadingOne = "heading-one",
    Paragraph = "paragraph",
}