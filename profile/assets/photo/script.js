var scope=document.querySelector('body')
var contextmenu=document.querySelector('#contextMenu')
var options=document.querySelectorAll(".item")
var submitCaptionbtn=document.querySelector("submitCaption")
var container=document.getElementById("container")
var test;
var curr
scope.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    // let events=Array.from(e.target.src)
    const{clientX:mouseX,clientY:mouseY}=e;
    contextmenu.style.top=`${mouseY}px`
    contextmenu.style.left=`${mouseX}px`
    contextmenu.classList.add("visible")
    curr=e
    
//     if (curr.target.tagName=='IMG'){
//         // console.log("I am "+curr.target)
//         options[1].addEventListener("click",(curr)=>{
//             curr.target.style.filter="grayscale(100%)";
//         });
        
//         options[0].addEventListener("click",(e)=>{
//             var newWindow = window.open();
//             newWindow.document.write(curr.target.src);
//             newWindow.focus();
            
//         })
//         options[2].addEventListener("click",(e)=>{
//             console.log("brightness")
//             curr.target.style.filter="brightness(150%)"
//         });
//         options[3].addEventListener("click",(e)=>{
//         var newImage=reduceResolution(curr.target)
//         console.log(newImage)
//         curr.target=newImage
//     });
//         options[4].addEventListener("click",(e)=>{
//             curr.target.style.borderRadius="50%";
//             curr.target.style.width='150px';
//             curr.target.style.height='150px';
//             curr.target.style.display="flex";
//             curr.target.style.alignItems='center';
//         })
//         options[5].addEventListener("click",(e)=>{
//             test=curr
//             var duplicateImage=document.createElement('IMG')
//             var div=document.createElement("div")
//             // var newImageId=e.target.id
//             console.log(e);
//             console.log(curr)
//             duplicateImage.src=curr.target.src
//             div.append(duplicateImage)
//             console.log(curr.target.src)
//             container.appendChild(div)
            
//         })
//         options[6].addEventListener("click",(e)=>{
//             document.classList.add("inputCaption")
//             var div=document.createElement("div")
//             var thumbnail=document.querySelector("caption").value
//             var newImageId=curr.target.id
//             var Imagediv=document.getElementById(newImageId+"d")
//             Imagediv.appendChild(thumbnail)
//         })

//         // options[5].addEventListener("click",()=>{
//         //     var qrcode=new QRCode((e),{
//         //         text=e.target
            

//         // })

//     }
//     return

},false);

contextmenu.addEventListener('click',(event)=>{
    if (event.target.id=="it1"){
        var newWindow = window.open();
            var img=newWindow.document.createElement('IMG')
            img.src=curr.target.src
            newWindow.document.body.appendChild(img);
            newWindow.focus();
    }
    if (event.target.id=="it6"){
        test=curr
            var duplicateImage=document.createElement('IMG')
            var div=document.createElement("div")
            duplicateImage.src=curr.target.src
            div.append(duplicateImage)
            console.log(curr.target.src)
            container.appendChild(div)
    }
    if(event.target.id=="it5"){
        curr.target.style.borderRadius="50%";
            curr.target.style.width='150px';
            curr.target.style.height='150px';
            curr.target.style.display="flex";
            curr.target.style.alignItems='center';
    }
    if (event.target.id==="it4"){
        var newImage=reduceResolution(curr.target)
        // console.log(newImage)
        curr.target.src=newImage
    }

   })
scope.addEventListener("click",(e)=>{
    if(e.target.offsetParent!=contextmenu){
        contextmenu.classList.remove("visible")
    }
},false);

function reduceResolution(target, callback){
    // create a new image object
var img = new Image();

// set the image source
img.src=target.src
img.crossOrigin="anonynomous"
// wait for the image to load
  // create a canvas element
var canvas = document.createElement('canvas');
var reducedImageData;
  // set the canvas dimensions to the desired resolution
  resImage=img.onload = function() {
      canvas.width = img.width/3;
      canvas.height = img.height/3;

      var ctx = canvas.getContext('2d');

      ctx.drawImage(img,0,0, canvas.width, canvas.height);
      
        // get the reduced resolution image data from the canvas
        reducedImageData = canvas.toDataURL();
        // do something with the reduced resolution image data
        // console.log(reducedImageData);
        return reducedImageData
    }();
    // console
    return resImage
}
