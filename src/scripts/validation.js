function validateForm(videoForm){
    let title = document.forms[videoForm]["videoTitle"].value;
    let url = document.forms[videoForm]["videoUrl"].value;
    let uploadedBy = document.forms[videoForm]["uploadedBy"].value;
    let contact = document.forms[videoForm]["contact"].value;
    let tag = document.forms[videoForm]["videoTags"].value;


    if (title.length < 3 || title.includes("\n")){
        alert("title should be at least 3 characters long and contains only one line");
        return false;
    }
    if(tag !== ""){
        let splitByHash;
        splitByHash = tag.split(" ");
        for (let i=0; i < splitByHash.length; i++){
            console.log(splitByHash[i][0]);
            if(!splitByHash[i][0].includes("#")){
                alert("enter proper tag format");
                return false;
            }
        }
    }
    if(contact !== ""){
        if(!contact.includes("@") || !contact.includes(".") || contact.includes("\n")){
            alert("your contact should contain proper email form");
            return false;
        }
    }
    if(url.length < 3 || url.includes("\n") || !url.includes(".")){
        alert("enter proper url format");
        return false;
    }
    if(uploadedBy !== ""){
        if(uploadedBy.length <3 || uploadedBy.includes("\n")){
            alert("uploaded by should be at least 3 characters long");
            return false;
        }
    }
    return true;
}