
// Create Video Class
class VideoPlayer  {
    constructor({ videoPlayer, videoThumbs, volumeIndicator }){
        this.videoPlayer = videoPlayer  
        this.videoThumbs = videoThumbs
        this.volumeIndicator = volumeIndicator 

        this.initListeners()
    }
    
    initListeners(){
        this.videoPlayer.addEventListener("mouseover", this.handleVolumeIndicatorOn.bind(this))
        this.videoPlayer.addEventListener("mouseout", this.handleVolumeIndicatorOff.bind(this))

    }

    handleVolumeIndicatorOn() {
        // console.log(this.videoPlayer);
        this.videoPlayer.muted = false;
        this.volumeIndicator.classList.replace('fa-volume-off', 'fa-volume-up')
    }
     handleVolumeIndicatorOff() {
        //  console.log(this.videoPlayer)
        this.videoPlayer.muted = true;
        this.volumeIndicator.classList.replace('fa-volume-on', 'fa-volume-off')
    }
}

// Bootstrapping Code ...

// Taking the default values of the constructor.  We can also provide different mounting points
const video = new VideoPlayer({
    videoPlayer: document.querySelector('video'),
    videoThumbs : document.querySelector('.vid_thumb'),
    volumeIndicator  : document.querySelector('.vol-indicator') 
})