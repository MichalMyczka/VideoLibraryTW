function validateForm(videoForm){
    const title = document.forms[videoForm]["videoTitle"].value;
    const url = document.forms[videoForm]["videoUrl"].value;
    const uploadedBy = document.forms[videoForm]["uploadedBy"].value;
    const contact = document.forms[videoForm]["contact"].value;
    const tag = document.forms[videoForm]["videoTags"].value;


    if (isInputShorter(title)){
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
    if(isEmail(contact)){
        alert("your contact should contain proper email form");
        return false;
    }

    if(isInputShorter(url) || !url.includes(".")){
        alert("enter proper url format");
        return false;
    }
    if(isUploadedValidate(uploadedBy)){
        alert("uploaded by should be at least 3 characters long");
        return false;
    }
    return true;
}

function isUploadedValidate(uploadedBy) {
    return uploadedBy !== "" && isInputShorter(uploadedBy);
}

function isInputShorter(input) {
    return input.length < 3 || input.includes("\n")
}

function isEmail(email) {
    return contact !== "" && (!contact.includes("@") || !contact.includes(".") || contact.includes("\n"));
}