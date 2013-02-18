/* JavaScript code */

var cam_video_id = "camsource"

window.addEventListener('DOMContentLoaded', function() {
    // Assign the <video> element to a variable
    var video = document.getElementById(cam_video_id);

    // Replace the source of the video element with the stream from the camera
    if (navigator.getUserMedia) {
        navigator.getUserMedia('video', successCallback, errorCallback);
        // Below is the latest syntax. Using the old syntax for the time being for backwards compatibility.
        // navigator.getUserMedia({video: true}, successCallback, errorCallback);
        function successCallback(stream) {
            video.src = stream;
        }
        function errorCallback(error) {
            console.error('An error occurred: [CODE ' + error.code + ']');
            return;
        }
    } else {
        console.log('Native web camera streaming (getUserMedia) is not supported in this browser.');
        return;
    }
}, false);

$(document).ready(function() {
    cam = camera(cam_video_id);
    cam.start()
})