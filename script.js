const image1={id:1,link:"pdp/hair1_2023.jpg",desc:"Hair 1<br>Oil on canvas<br>34x38<br>2023"};
    const image2={id:2,link:"pdp/sit_down_2023.jpg",desc:"Hair 1<br>Oil on canvas<br>34x38<br>2023"};
populateImages=()=>{
    let imageContainer=document.getElementById('image');
    let captionContainer=document.getElementById('caption');
    if (image1===true) {
        image1.addEventListener('click', ()=>{
            window.open('view.html','popup');
            imageContainer.innerHTML=`<img src=[this.image1.link]>`;
            captionContainer.innerHTML=`[this.image1.desc]`;
        })
    }
}