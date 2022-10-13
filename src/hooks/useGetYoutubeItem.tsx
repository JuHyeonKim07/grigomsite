import axios from "axios"
import { youTubeAcsses } from '../apis/keys';


export function useGetYoutubeItem(videoId: string) {
    if (!!videoId) {
        console.log('hello')

        const itemList = axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${youTubeAcsses.apiKey}&part=statistics&id=${videoId}`,).then(res => {
            console.log(res);
        }).catch(error => console.error(error))
    }
}