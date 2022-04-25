type webVideo = {
    id: string 
    title: string
    thumbnail?: string
    category?: string
}

export default webVideo

export const getVideo = (objJson: any): webVideo => {
    const {
        id,
        title,
        thumbnail,
        channel
    } = objJson

    const videoDailymotion: webVideo = {
        id,
        title,
        thumbnail,
        category: channel
    }

    return videoDailymotion
}