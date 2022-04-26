import webVideo from "../models/dailymotionType"


export const renderSelectedVideo = (video: webVideo, container: HTMLElement) => {
    const htmlContent = `

    <div id="videoRendered"> 
            <iframe style="width:100%; height:100%; position:absolute;top:50px; overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/${video.id}?autoplay=1" margin="0 auto" width="100%" height="100%" allowfullscreen allow="autoplay">
            </iframe>
    </div>

    <br>

    <h2>${video.title}</h2>
    `

    container.innerHTML = htmlContent
}

// <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;"> 

//     <h2>${video.title}</h2>

//     <br><br>

//     <iframe style="width:100%; height:100%; position:absolute; left:0px; top: 50px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/${video.id}?autoplay=1" width="100%" height="100%" allowfullscreen allow="autoplay">
    
//     </iframe>
    
//     </div>

// <iframe style="width:80%; height:100%; position:absolute;left:0px;top:0px; overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/${video.id}?autoplay=1" width="100%" height="100%" allowfullscreen allow="autoplay">
// </iframe>