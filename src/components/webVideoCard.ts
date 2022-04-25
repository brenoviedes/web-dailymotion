import webVideo from '../models/dailymotionType'



export const renderWebVideo = (list: webVideo | any, conatiner: HTMLElement) => {
   
    const htmlContent = `
        <div class="tv-card">
            <a id="modal-${list.id}" href="video.html?id=${list.id}">
                <div class="show-banner">
                    <img src="https://www.dailymotion.com/thumbnail/video/${list.id}">
                <div>

                <h3>${list.title}<h3>
            </a>
        </div>
    `    

    conatiner.innerHTML += htmlContent
}