const form = document.querySelector("#searchform");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const body = {
        title: this.searchbar.value,
        description: this.searchbar.value,
        tag: this.searchbar.value
    };
    console.log(body);
    console.log(body.title)


    function getVideos() {
        fetch("http://localhost:5000/videos")
            .then(function (response){
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return  response.json();
            })
            .then(function (videos) {
                console.log(videos.data)
                matchVideos(videos.data);

            }).catch(function (error) {
            alert(error);
        });
    }

    function matchVideos(videosList) {
        let list = [];
        for(let i=0; i<videosList.length; i++){
            console.log(videosList[i]["title"])
            if(videosList[i]["title"].includes(body.title)){
                list.push(videosList[i]);
                console.log(videosList[i])
            }
            if(videosList[i]["description"].includes(body.description)){
                if(videosList[i]["description"].includes(videosList[i]["title"])){
                    continue;
                }
                list.push(videosList[i]);
            }
            if(videosList[i]["tag"].includes(body.tag)){
                if(videosList[i]["tag"].includes(videosList[i]["description"]) || videosList[i]["tag"].includes(videosList[i]["title"])){
                    continue;
                }

                list.push(videosList[i]);
            }
        }
        console.log(list);
        document.getElementById("videocontent").innerHTML = "";
        addVideosToList(list);
    }

    getVideos();

});