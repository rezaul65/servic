
//passport size picture
const fileInput = document.querySelector(".file-input"),
chooseImage = document.querySelector(".choose-img");
previewImg = document.querySelector(".preview-img img");

const loadImage = () => {
    let file = fileInput.files[0];
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
}

fileInput.addEventListener("change", loadImage);
chooseImage.addEventListener("click", () => fileInput.click());
//passport size picture finish


//segneutre img 

const fileInputs = document.querySelector(".file-inputs"),
chooseImages = document.querySelector(".choose-imgs");
showP= document.querySelector(".preview-segne img");

const loadImages = () => {
    let file = fileInputs.files[0];
    if(!file) return;
    showP.src = URL.createObjectURL(file);
}

fileInputs.addEventListener("change", loadImages);
chooseImages.addEventListener("click", () => fileInputs.click());
//segneture img



//barcode img 


const fileInputb = document.querySelector(".file-inputb"),
chooseImageb = document.querySelector(".choose-imgb");
showb= document.querySelector(".preview-barcode img");

const loadImageb = () => {
    let file = fileInputb.files[0];
    if(!file) return;
    showb.src = URL.createObjectURL(file);
}

fileInputb.addEventListener("change", loadImageb);
chooseImageb.addEventListener("click", () => fileInputb.click());




//barcode shesh 





//main page input file 
const MyBtn = document.getElementById("btn"); 


MyBtn.onclick = ()=>{
    var a = document.getElementById('nidNo').value
    document.getElementById('result').innerHTML = a;

    var birth = document.getElementById('birth').value;
     document.getElementById('result2').innerHTML = birth;

     var mother = document.getElementById('mother').value;
     document.getElementById('result3').innerHTML = mother;

     var fother = document.getElementById('fother').value;
     document.getElementById('result4').innerHTML = fother;

     var nameE = document.getElementById('nameE').value;
     document.getElementById('result5').innerHTML = nameE;
     document.getElementById('textarea').innerHTML ="<pin>"+ a + "</pin><name>" + nameE.toUpperCase() + "</name><DOB>"+ birth +"</DOB><FP></FP><F>Right Index</F><TYPE>A</TYPE><V>2.0</V><ds>302e0215009510f668cf69dd89b669ebb6c4eee8f62734d06902150084f07712996a236b0f4ac6e3abd8d5e872d35b83</ds>" ;
     

     var nameB = document.getElementById('nameB').value;
     document.getElementById('result6').innerHTML = nameB;

     var place = document.getElementById('place').value;
     document.getElementById('result7').innerHTML = place;

     var place1 = document.getElementById('place1').value;
     document.getElementById('result8').innerHTML = place1;

     var placeB = document.getElementById('placeB').value;
     document.getElementById('result9').innerHTML = placeB;

     var time = document.getElementById('time').value;
     document.getElementById('result10').innerHTML = time;

     var blood = document.getElementById('blood').value;
     document.getElementById('result11').innerHTML = blood;

     document.querySelector(".main").style.display = "none";
     document.querySelector(".secondPage").style.display = "flex";



}


//butto worker



function exitbtn(){
    document.querySelector(".main").style.display = "flex";
    document.querySelector(".secondPage").style.display = "none"


}

function secondbtn(){
    document.querySelector(".img").style.display = "block";
    document.querySelector(".secondPage").style.display = "none"
    document.querySelector(".main").style.display = "none";

}





function subbtn(){
    const user = document.getElementById('uer').value;
    const userP = document.getElementById('use1').value;

    if(user == "rezaul" && userP == "491793540" || user == "mozammel" && userP == '14101997m'){
        document.querySelector(".main").style.display = "flex";
        document.querySelector(".login-form").style.display = "none";
    }
    else{
        alert("দুঃখিত আপনি রেজিস্ট্রেশন করেননি । রেজিস্ট্রেশন করতে যোগাযোগ করুন সরকার কম্পিউটার ধন্যবাদ");
        location.reload();
    }
  
}



