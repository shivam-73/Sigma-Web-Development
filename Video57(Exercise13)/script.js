function createCard(title,cName,views,monthsOld,duration,thumbnail){

    const container = document.querySelector(".container");

    let card = document.createElement("div");
    card.style.backgroundColor="#0f0f0f";
    card.style.padding = "15px 10px 10px 15px";
    card.style.width="100%";
    card.style.display="flex";
    card.style.gap="16px";
    card.style.marginBottom="10px";

    //ThumbNail
    let thumbnailDiv = document.createElement("div");
    thumbnailDiv.style.position = "Relative";
    thumbnailDiv.style.flexShrink = 0;


    let img = document.createElement("img");
    img.src = thumbnail;
    img.style.width = "170px";
    img.style.borderRadius = "8px";

    
    let time = document.createElement("span");
    time.innerText = duration;
    time.style.position = "absolute";
    time.style.bottom = "8px";
    time.style.right = "8px";
    time.style.padding = "2px 5px"
    time.style.backgroundColor = "rgba(0,0,0,0.8)"
    time.style.fontSize = "12px";
    time.style.borderRadius = "3px";
    time.style.fontWeight = "bold";
    time.style.color = "white";


    thumbnailDiv.appendChild(img);
    thumbnailDiv.appendChild(time);

    //Info
    let info_div = document.createElement("div");
    info_div.style.display ="flex";
    info_div.style.flexDirection = "column";
    info_div.style.maxWidth = "850px";

    let titleE = document.createElement("div");
    titleE.innerText = title;
    titleE.style.fontWeight = "bold";
    titleE.style.fontSize = "17px";
    titleE.style.marginBottom = "6px";


    let metaE = document.createElement("div");
    metaE.innerText = `${cName} • ${Math.floor(views / 1000)}K views • ${monthsOld} months ago`
    metaE.style.fontSize = "14px";
    metaE.style.color= "#aaa"

    info_div.appendChild(titleE);
    info_div.appendChild(metaE);

    card.appendChild(thumbnailDiv);
    card.appendChild(info_div);

    container.appendChild(card);
}

createCard("Installing VS Code & How Website Work | Sigma Web Development Course - Tutorial #1",
    "CodeWithHarry",560000,7,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA"
)

createCard("Installing VS Code & How Website Work | Sigma Web Development Course - Tutorial #1",
    "CodeWithHarry",560000,7,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA"
)
