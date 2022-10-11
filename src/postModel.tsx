// Vimeo
export type vimeoResponse = {
    data: {
        name: string
        pictures: {
            active: boolean
            base_link: string
            default_picture: boolean
            resource_key: string
            sizes: {
                height: number
                link: string
                width: number
            }[]
        }
        type: string
        uri: string
        embed: {
            html: string
        }
    }[]
    page: number,
    paging: {
        first: string
        last: string
        next: null
        previous: null
    }
    per_page: number,
    total: number
}

// Youtube
export type youtubeResponse = {
    kind: string
    etag: string
    items: {
        kind: string
        etag: string
        id: string
        snippet: {
            publishedAt: string
            channelId: string
            title: string
            description: string
            thumbnails: {
                default: {
                    url: string
                    width: number
                    height: number
                },
                medium: {
                    url: string,
                    width: number,
                    height: number
                },
                high: {
                    url: string,
                    width: number,
                    height: number
                },
                standard: {
                    url: string,
                    width: number,
                    height: number
                },
                maxres: {
                    url: string,
                    width: number,
                    height: number
                }
            }
            channelTitle: string,
            playlistId: string,
            position: 0,
            resourceId: {
                kind: string,
                videoId: string
            },
            videoOwnerChannelTitle: string,
            videoOwnerChannelId: string
        }[]
    }[],
}