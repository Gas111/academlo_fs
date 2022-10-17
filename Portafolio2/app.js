const hidden=document.querySelectorAll(".hidden")
const links=document.querySelectorAll(".link")

const observer=new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
    if (entry.Intersecting){

        entry.target.classList.add("show")
        links.forEach((link)=>{
            const href=link.getAttribute("href").split(#)
            const id=entry.target.id;
            if(href===id){
                console.log(link.target)
                link.classList.remove

            }
        })
    }else{
        entry.target.classList.remove("hidden")
    }
})

},{
    threshold:0.5,
})


hiddenElement.forEach((element)=> observer.observe(element));