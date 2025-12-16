(function($){
    'use script';


///menu

let cont = document.querySelector(".lines-container");
let menu = document.querySelector(".menu");
let blog = document.querySelector(".blog");
let contact = document.querySelector(".contact");
let blocks = document.querySelector(".blocks");
let blogChild = document.querySelector(".blog-child");
let contactChild = document.querySelector(".contact-child");
cont.addEventListener("click", () => {
    if (blog) blog.classList.remove("content");
    contact.classList.remove("content");
     if(menu.style.maxHeight){
        menu.style.maxHeight = null;
        if (blogChild) blogChild.style.maxHeight = null;
        contactChild.style.maxHeight = null;
        
     }else{
        menu.style.maxHeight = menu.scrollHeight + "px"; 
     }    
})
if (blog && blogChild) {
    blog.addEventListener("click", () => {
        if(blogChild.style.maxHeight){
            blogChild.style.maxHeight = null;
            blog.classList.add("btn-anime");
            blog.classList.remove("content");
            setTimeout(() => {
                blog.classList.remove("btn-anime");   
            }, 100);
         }else{
            blogChild.style.maxHeight = blogChild.scrollHeight + "px"; 
            menu.style.maxHeight = menu.scrollHeight + blogChild.scrollHeight + "px"; 
            blog.classList.add("btn-anime");
            blog.classList.add("content");
            setTimeout(() => {
                blog.classList.remove("btn-anime");   
            }, 100);
         }    
    })
}
contact.addEventListener("click", () => {
    if(contactChild.style.maxHeight){
        contactChild.style.maxHeight = null;
        contact.classList.add("btn-anime");
        contact.classList.remove("content");
        setTimeout(() => {
            contact.classList.remove("btn-anime");   
        }, 100);
     }else{
        contactChild.style.maxHeight = contactChild.scrollHeight + "px"; 
        menu.style.maxHeight = menu.scrollHeight + contactChild.scrollHeight + "px"; 
        contact.classList.add("btn-anime");
        contact.classList.add("content");
        setTimeout(() => {
            contact.classList.remove("btn-anime");   
        }, 100);
     }    
})
}(jQuery));
