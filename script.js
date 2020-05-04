
const gallery = document.getElementById("gallery");
const arrow_right = document.getElementById("arrow_right");
const arrow_left = document.getElementById("arrow_left");
const storageRefPhotos = firebase.storage().ref().child("photos/");
const tempPhotos = [];
let currentPhoto = 0;

//all images are gotten from Firebase, then for every image a Node.image is created and saved in an array
//holt sich jedes Mal alle Files, vllt nur 3 auf einmal?
storageRefPhotos.listAll().then(res=>{
    for(let i = 0; i < res.items.length; i++){
        tempPhotos[i] = document.createElement("img");
        res.items[i].getDownloadURL().then(url => {
            tempPhotos[i].src = url;
            if(tempPhotos[i].width > tempPhotos[i].height){
                tempPhotos[i].classList.add("horizontal");
            }
            else{
                tempPhotos[i].classList.add("vertical");
            }
        });
    }
    gallery.insertBefore(tempPhotos[0], arrow_right);
}).catch(error => console.log(error));

arrow_right.addEventListener("click", ()=>{
    if(currentPhoto === tempPhotos.length-1){
        try{
            gallery.replaceChild(tempPhotos[0], arrow_left.nextElementSibling);
            currentPhoto = 0;
            //console.log("node: "+tempPhotos[currentPhoto].toString());
            //console.log("src: "+tempPhotos[currentPhoto].src+" width: "+tempPhotos[currentPhoto].width+" height: "+tempPhotos[currentPhoto].height);
        }
        catch(error){
            console.log(error);
        }
    }
    else{
        try{
            currentPhoto++;
            gallery.replaceChild(tempPhotos[currentPhoto], arrow_left.nextElementSibling);
            //console.log("node: "+tempPhotos[currentPhoto].toString());
            //console.log("width: "+tempPhotos[currentPhoto].width+" height: "+tempPhotos[currentPhoto].height);
        }
        catch(error){
            console.log(error);
        }
    }
});

arrow_left.addEventListener("click", ()=>{
    if(currentPhoto === 0){
        try{
        gallery.replaceChild(tempPhotos[tempPhotos.length-1], arrow_left.nextElementSibling);
        currentPhoto = tempPhotos.length-1;
        }
        catch(error){
            console.log(error);
        }
    }
    else{
        currentPhoto--;
        gallery.replaceChild(tempPhotos[currentPhoto], arrow_left.nextElementSibling);
    }});

