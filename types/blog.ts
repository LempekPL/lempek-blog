export interface Post {
    id: string
    name: string
    date: string
    likes: number
    thumbnail: string | undefined | null
    description: string | undefined | null
    content: Content[]
    comments: Comment[]
}

export interface Comment {
    id: string
    userId: string
    userName: string
    date: number
    contents: string
    likes: number
}

export interface Content {
    key: string
    type: "text" | "image"
    contents: string
}