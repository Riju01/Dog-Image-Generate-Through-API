
let btn=document.querySelector("button")
let url="https://dog.ceo/api/breeds/image/random"
let img=document.querySelector("img")

btn.addEventListener("click",async()=>{
    let data=await dogImg()
    img.src=data
})

async function dogImg() {
    try{
        let res=await axios.get(url);
        return res.data.message
    }catch(e){
        console.log("No Image Found")
    }
}