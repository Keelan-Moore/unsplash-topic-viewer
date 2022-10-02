export type Topic = {
    id: string,
    slug: string,
    title: string,
    description: string,
    published_at: Date,
    updated_at: Date,
    starts_at: Date,
    ends_at: Date,
    only_submissions_after: Date,
    visibility: string,
    featured: boolean,
    total_photos: number,
}