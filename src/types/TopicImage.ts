export type TopicImage = {
    id: string,
    created_at: Date,
    updated_at: Date,
    width: number,
    height: number,
    color: string,
    blur_hash: string,
    likes: number,
    liked_by_user: number,
    description: string,
    urls: {
      raw: string,
      full: string,
      regular: string,
      small:string,
      thumb: string,
    },
    links: {
      self: string,
      html: string,
      download: string,
      download_location: string,
    }
}