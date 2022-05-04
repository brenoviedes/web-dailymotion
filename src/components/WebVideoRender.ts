import webVideo from "../models/dailymotionType"


export const renderSelectedVideo = (video: webVideo, container: HTMLElement) => {
    const htmlContent = `
    <h2>${video.title}</h2>

    <br>

    <div id="videoRendered"> 
            <iframe  style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/${video.id}?autoplay=1" width="100%" height="100%" allowfullscreen allow="autoplay">
            </iframe>
    </div>
    `

    container.innerHTML = htmlContent
}
