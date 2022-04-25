import axios from 'axios'
import { API_URL } from '../config'
import { getVideo } from '../models/dailymotionType'
import { renderWebVideo } from './webVideoCard'

export const $ = document.querySelector.bind(document)

const http = axios.create({ baseURL: API_URL })

export const renderSearchForm = (container: HTMLElement) => {

    const htmlContent = `
        <div>
            <form id="search-form">
                <input type="text" name="filter" id="filter" placeholder="Digite o vídeo que está procurando">
                <button id="search">Pesquisar</button>
            </form>
        </div>
    `
    container.innerHTML = htmlContent
}

export const searchVideos = async () => {
    const params = new URLSearchParams(document.location.search)
    const filter = params.get('filter')

    if (filter) {
        const response = await http.get('/videos', {
            params: { search: filter }
        })
        
        console.log(response)

        if(response.status == 200) {
            const {data} = response
            const {list} = data

            console.log(list)

            const resultArea = <HTMLDivElement>$('#result-area')
            resultArea.innerHTML = ''

            list.forEach((jsonObj: any) => {
                const webVideoThumb = getVideo(jsonObj)
                renderWebVideo(webVideoThumb, resultArea)
            })

            // data.forEach((jsonObj: any) => {
                // const {list} = jsonObj
                // const webVideo = getVideo(list)
                // inserir aqui a função de renderizar o card
            // })
        }
   }
}

searchVideos()