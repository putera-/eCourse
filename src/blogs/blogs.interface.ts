import { BlogCategory } from "src/blog_categories/blog_categories.interface"
import { Photo } from "src/photos/photos.interface"
import { User } from "src/users/users.interface"

export interface Blog {
    id: string
    title: string
    content: string
    author?: User
    authorId: string
    category?: BlogCategory
    photos?: Photo[]
    status: 'DRAFT' | 'PUBLISH'
    deleted: boolean
    publishAt: Date
    createdAt: Date
    updatedAt: Date
}