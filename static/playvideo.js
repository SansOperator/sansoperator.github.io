const video = document.getElementsByTagName('video')[0];

const isVideoPlaying = video => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);

setTimeout( () => 
{if (!isVideoPlaying(video)){
    const button = document.createElement('button');
    button.innerText = 'Video Not Playing?';
    button.style.position = 'absolute';
    button.style.top = '50%';
    button.style.transform = 'translateY(-50%)';
    button.style.right = '2%';
    button.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    button.style.color = "white";
    button.style.padding = "10px";
    button.style.borderRadius = "5px";
    button.style.outline = "1px solid white";
    button.style.animation = "slideIn 0.5s forwards"; /* Add animation to slide in */


    document.getElementsByTagName('body')[0].appendChild(button);

    button.addEventListener('click', () => {
        video.play();
        button.remove();
    })
}
}, 500);
