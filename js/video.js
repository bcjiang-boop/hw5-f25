var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
    video.load();


    // Play
    document.querySelector("#play").addEventListener("click", function() {
        video.play();
        document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
    });

    // Pause
    document.querySelector("#pause").addEventListener("click", function() {
        video.pause();
    });

    // Slower
    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate -= 0.1;
        console.log("New speed:", video.playbackRate);
    });

    // Faster
    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate += 0.1;
        console.log("New speed:", video.playbackRate);
    });

    // Skip
    document.querySelector("#skip").addEventListener("click", function() {
        video.currentTime += 10;
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
        console.log("Current location:", video.currentTime);
    });

    // Mute
    document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted === false) {
            video.muted = true;
            this.innerHTML = "Unmute";
        } else {
            video.muted = false;
            this.innerHTML = "Mute";
        }
    });

    // Volume Slider
    document.querySelector("#slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
    });

    // Old School
    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    // Original
    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});
