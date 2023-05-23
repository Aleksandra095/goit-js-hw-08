import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const savedData = localStorage.getItem('videoplayer-current-time');
const parseData = JSON.parse(savedData);

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

player.on('time', throttle(onLocalRecordTime, 1000));

function onLocalRecordTime(event) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(event.seconds));
}

if (parseData) {
    player.setCurrentTime(parseData);
} else {
    player.setCurrentTime(0);
}