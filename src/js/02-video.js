import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

let savedData = localStorage.getItem('videoplayer-current-time')
const parseData = JSON.parse(savedData)

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(onLocalRecordTime, 1000))

function onLocalRecordTime(event) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(event))
};
player.setCurrentTime(parseData ? parseData.seconds : 0)