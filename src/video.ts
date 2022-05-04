import './css/style.css'
import './css/response.css'
import './css/fonts.css'

import { API_URL } from './config'
import axios from 'axios'
import { getVideo } from './models/dailymotionType'
import { renderSelectedVideo } from './components/WebVideoRender'

const searchWebVideo = async (id: string) => {
    const http = axios.create({
        baseURL: API_URL
    })

    const response = await http.get(`/video/${id}`)

    console.log(response)

    if(response.status === 200) {
        const {data} = response

        // console.log(data)
        const video = getVideo(data)
        const app = <HTMLDivElement>document.querySelector('#app')
        renderSelectedVideo(video, app)
    }
}

const params = new URLSearchParams(document.location.search)
const id = params.get('id')

if(id) {
    searchWebVideo(id)
}