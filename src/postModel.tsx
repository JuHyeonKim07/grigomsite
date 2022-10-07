type videoList_Interface = {
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

export default videoList_Interface