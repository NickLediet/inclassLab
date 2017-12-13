// Create Video Class
class VideoPlayer  {
    constructor({ videoPlayer, videoThumbs, volumeIndicator, overlay }){
        this.videoPlayer = videoPlayer  
        this.videoThumbs = videoThumbs
        this.volumeIndicator = volumeIndicator 
        this.overlay = overlay
        this.initListeners()
    }
    
    initListeners(){
        this.videoPlayer.addEventListener("mouseover", this.handleVolumeIndicatorOn.bind(this))
        this.videoPlayer.addEventListener("mouseout", this.handleVolumeIndicatorOff.bind(this))
        this.overlay.querySelector('i').addEventListener("click", this.replayVideo.bind(this))
        this.videoPlayer.addEventListener("ended", this.popOverlay.bind(this))

        this.videoThumbs.forEach((el, i) => {
            el.addEventListener("click", () => this.loadNewVideo(i))
        })
    }

    handleVolumeIndicatorOn() {
        this.videoPlayer.muted = false;
        this.volumeIndicator.classList.replace('fa-volume-off', 'fa-volume-up')
    }

     handleVolumeIndicatorOff() {
        this.videoPlayer.muted = true
        this.volumeIndicator.classList.replace('fa-volume-on', 'fa-volume-off')
    }

    popOverlay(){
        this.overlay.classList.add("show-overlay")
    }

    replayVideo() {
        this.videoPlayer.currentTime = 0
        this.videoPlayer.play()
        this.overlay.remove("show-overlay")
    }

    fetchVideoThumbs(){
        fetch('http://localhost:8888/inclasslab/includes/functions.php?getVideos')
            .then(response => response.json())
            .then(data => {
                this.videoData = [...data]
                this.videoThumbs.forEach((el, i ) => {
                    console.log(el)
                    el.querySelector('img').src = `./images/${data[i].placeholder}`
                })
            })
            .catch(err => console.log(err))
        }
    loadNewVideo(index) { 
        // loand and play video from source
        this.videoPlayer.src = `video/${this.videoData[index].path}`
        this.videoPlayer.load()
        this.videoPlayer.play()
    }
}

// Bootstrapping Code ...

// Taking the default values of the constructor.  We can also provide different mounting points
const video = new VideoPlayer({
    videoPlayer: document.querySelector('video'),
    videoThumbs : document.querySelectorAll('.vid-thumb'),
    volumeIndicator  : document.querySelector('.vol-indicator'),
    overlay : document.querySelector('.vid-overlay')
})

video.fetchVideoThumbs()