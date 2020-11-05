function getVideos() {
    fetch("http://localhost:5000/videos")
        .then(function (response){
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return  response.json();
        })
        .then(function (videos) {
            addVideosToList(videos.data);

        }).catch(function (error) {
        alert(error);
    });
}

function randomNoRepeats(videosList) {
    let copy = videosList.slice(0);
    return function () {
        if (copy.length < 1) {
            copy = videosList.slice(0);
        }
        let index = Math.floor(Math.random() * copy.length);
        let item = copy[index];
        copy.splice(index, 1);
        return item;
    };
}

function addVideosToList(videosList){
    localStorage.setItem("id", videosList.length);

    let randomList = [];
    let chooser = randomNoRepeats(videosList);
    randomList.push(chooser());
    randomList.push(chooser());
    randomList.push(chooser());
    randomList.push(chooser());
    randomList.push(chooser());

    let sel = document.getElementById("videocontent");
    randomList.forEach(video => {
        let div1 = document.createElement('div');
        div1.className = "videotemplate";

        let div2 = document.createElement('div');
        div2.className = "videothumbnail";
        div2.innerHTML = `<iframe width="200px" height="120px" src= ${video.videoURL} allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>`

        let div3 = document.createElement('div');
        div3.className = "videoinfo";
        div3.innerHTML = `<p>${video.title}</p>
                             <p>${video.description}</p>
                             <p>${video.tag}</p>
                             <p>Uploaded By: ${video.uploadedBy}</p>
                             <p>${video.contactEmail}</p>`

        let div4 = document.createElement('div');
        div4.className = "editButton";
        div4.innerHTML = `<a href='../views/editVideo.html?id=${video.id}' class='button'>Edit Video</a>`

        sel.appendChild(div1);
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);
    })
}

getVideos();