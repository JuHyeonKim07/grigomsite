export type vimeoResponse = {
    data: videoList_Interface[]
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


export type videoList_Interface = {
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
}

