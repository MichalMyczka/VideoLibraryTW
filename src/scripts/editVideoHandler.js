function getId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}
function fillInputs (video){
    document.getElementById("videoTitle").value = video.title;
    document.getElementById("videoDescription").value = video.description;
    document.getElementById("videoTags").value = video.tag;
    document.getElementById("videoUrl").value = video.videoURL;
    document.getElementById("uploadedBy").value = video.uploadedBy;
    document.getElementById("contact").value = video.contactEmail;
}
function getVideo(){
    fetch(`http://localhost:5000/videos/${getId()}`)
        .then(function (response){
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return  response.json();
        })
        .then(function (video) {
            fillInputs(video.data);

        }).catch(function (error) {
        alert(error);
    });
}

const form = document.querySelector("#editVideo");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const body = {
        title: this.videoTitle.value,
        description: this.videoDescription.value,
        tag: this.videoTags.value,
        videoURL: this.videoUrl.value,
        uploadedBy: this.uploadedBy.value,
        contactEmail: this.contact.value
    };
    const data = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };
    console.log(body);
    fetch(`/videos/${getId()}`, data)
        .then(response => {
            window.location.href = "/";
        });
});

getVideo();


