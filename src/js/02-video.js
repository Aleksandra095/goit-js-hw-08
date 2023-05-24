import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.querySelector('iframe');
    const player = new VimeoPlayer(iframe);
    let currentTime = 0;
    player.on('timeupdate', throttle(onVideoTimeUpdate, 1000));
    player.on('pause', onVideoPause);
    player.on('play', onVideoPlay);
function onVideoTimeUpdate(event) {
    currentTime = event.seconds;
    }
function onVideoPause() {
    console.log('Час відтворення відео при зупинці:', currentTime);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
    }
function onVideoPlay() {
    const savedData = localStorage.getItem('videoplayer-current-time');
    const parseData = JSON.parse(savedData);
        if (parseData) {
        currentTime = parseData;
        player.setCurrentTime(currentTime);
        console.log('Час відтворення', currentTime);
        }
    }
});