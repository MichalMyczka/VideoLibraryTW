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


function addVideosToList(videosList){
    localStorage.setItem("id", videosList.length);

        let chooseVideo = function () {
            let unique = true;
            let num = Math.floor(Math.random() * videosList.length - 5);
            let video = videosList.splice(num,1);
            videosList.push(video);
        }

        let x = Math.floor(Math.random() * videosList.length);
        let lista = []
        lista += x;

        let list = [];

        list += videosList[x]
    }


    let sel = document.getElementById("videocontent");
    videosList.forEach(video => {
        let div1 = document.createElement('div');
        div1.className = "videotemplate";

        let div2 = document.createElement('div');
        div2.className = "videothumbnail";
        div2.innerHTML = `<iframe width=\"auto\" height=\"auto\" src= ${video.videoURL} allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>`

        let div3 = document.createElement('div');
        div3.className = "videoinfo"
        div3.innerHTML = `<p>${video.title}</p>
                             <p>${video.description}</p>
                             <p>${video.tag}</p>
                             <p>Uploaded By: ${video.uploadedBy}</p>
                             <p>${video.contactEmail}</p>`

        sel.appendChild(div1);
        div1.appendChild(div2);
        div1.appendChild(div3);
    })
}


getVideos();