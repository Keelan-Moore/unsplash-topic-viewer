import { Topic } from "../types/Topic";
import { TopicImage } from "../types/TopicImage";


const unsplash_baseUrl = 'https://api.unsplash.com'

export async function fetchTopics() : Promise<Topic[]>{
    const res = await fetch(`${unsplash_baseUrl}/topics` , 
    {
        method: 'GET',
        headers:  {
            'Authorization': `Client-ID ${process.env.REACT_APP_API_KEY}`
        }
    });
    return await res.json();
}

export async function fetchImages(topicDescription: string) : Promise<TopicImage[]>{
    const res = await fetch(`${unsplash_baseUrl}/topics/${topicDescription}/photos` , 
    {
        method: 'GET',
        headers:  {
            'Authorization': `Client-ID ${process.env.REACT_APP_API_KEY}`
        }
    });
    return await res.json();
}
