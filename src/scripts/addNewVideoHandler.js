
const form = document.querySelector("#newVideo");



form.addEventListener('submit',e => {
    e.preventDefault();

    const body = {
        id: localStorage.getItem("id"),
        title: this.videoTitle.value,
        description: this.videoDescription.value,
        tag: this.videoTags.value,
        videoURL: this.videoUrl.value,
        uploadedBy: this.uploadedBy.value,
        contactEmail: this.contact.value
    };
    console.log(body);
    const data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };
    console.log(body);
    fetch("/videos", data)
        .then(response => {
            window.location.href = "/";
        });
});
