export type like = {
    id?: number,
    user_id: number,
    content_type: number,
    object_id: number,
    object: comment
}

export type comment = {
    id?: number,
    user_id: number,
    content: string,
    like: like
}

export type courseTag = {
    id?: number,
    course_id?: number[],
    project_id?: number[],
    tag_name: string,
    level: number
}

export type course = {
    id?: number,
    name: string,
    description?: string,
    avatar?: string,
}

export type project = {
    id?: number,
    name: string,
    description?: string
    avatar?: string
    likes: like
}

export type userTag = {
    id?: number,
    user_id: number[],
    tag_name: string,
    level: number
}

export type user = {
    id?: number,
    avatar?: string,
    description?: string
}