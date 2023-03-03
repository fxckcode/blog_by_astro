interface BlogPostFrontmatter {
    title: string;
    data: string;
    tags?: string[];
    draft?: boolean;
}

export type {
    BlogPostFrontmatter
}