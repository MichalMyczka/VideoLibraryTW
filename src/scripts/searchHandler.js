const form = document.querySelector("#searchform");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const body = {
        title: this.searchbar.value,
        description: this.searchbar.value,
        tag: this.searchbar.value
    };

    function getVideos() {
        fetch("http://localhost:5000/videos")
            .then(function (response){
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return  response.json();
            })
            .then(function (videos) {
                matchVideos(videos.data);

            }).catch(function (error) {
            alert(error);
        });
    }

    function matchVideos(videosList) {
        let list = [];
        for(let i=0; i<videosList.length; i++){
            if(videosList[i]["title"].includes(body.title)){
                list.push(videosList[i]);
            }
            if(videosList[i]["description"].includes(body.description)){
                if(videosList[i]["description"].includes(videosList[i]["title"]) || videosList[i]["title"].includes(videosList[i]["description"])){
                    continue;
                }
                list.push(videosList[i]);
            }
            if(body.tag.includes("#") && videosList[i]["tag"].includes(body.tag)){
                if(videosList[i]["tag"].includes(videosList[i]["description"]) || videosList[i]["tag"].includes(videosList[i]["title"] ||  videosList[i]["title"].includes(videosList[i]["tag"]) || videosList[i]["description"].includes(videosList[i]["tag"]))){
                    continue;
                }
                list.push(videosList[i]);
            }
        }
        document.getElementById("videocontent").innerHTML = "";
        addVideosToList(list);
    }

    getVideos();

});