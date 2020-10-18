

/*
    Find all tags that have "data-toggle" attribute, which equals "collapse", like in CSS.
    For each tag add event listener for click event.

    *event(prop) have info about clicked tag(target)
    target is a object that have info about node(tag)
    in that object we looking for dataset object which contain our data attribute name("target", "toggle"),
    we need "target" it's a id of block what we need to show*

    than find by id element what we need to show,
    and apply styles for collapsed block
    if it collapsed set height(scrollHeight = real block height)
    else hide, set height to 0
*/

document.querySelectorAll("[data-toggle=collapse]").forEach((el)=>{
    el.addEventListener("click", (event)=>{
        const collapsedBlock = document.querySelector(`${event.target.dataset.target}`)
        collapsedBlock.style.height = collapsedBlock.clientHeight===0 ? `${collapsedBlock.scrollHeight}px` : 0;
    })
})

document.querySelectorAll("[data-path]").forEach((el)=>{
    el.addEventListener("click", ()=>{
        const link = el.getAttribute("data-path");
        if (link.length>0){
            document.getElementById('main').innerHTML = loadPage(link);
        }else{
            document.getElementById('main').innerHTML = loadPage("err.html");
        }
    })
})

function loadPage(href)
{
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

