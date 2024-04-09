let styles = `
    #overallDiv { 
        height: 45px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        margin-top: 12px;
    }
    #navBtn{
        height: 38px;
        margin-right: 7px;
        margin-left: 7px;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 5px;
        font-size: 20px;
        color: #1E94BF;
        background-color: #ffffff;
        border-color: #1E94BF;
        border-radius: 5px;
        transition: background-color 0.15s;
        border: 1px solid;
        
    }

    #navBtn:hover{
        color: #ffffff;
        background-color: #1E94BF;
    }
    
`

let styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

async function addNav() {

    await new Promise(resolve => setTimeout(resolve, 15000));

    const header = document.getElementsByTagName('header')[0];
    const plusZweierBlock = document.querySelector("[data-flip-id='zJx2FJhEGCpbfhlMMg0x']");
    const videoBlock = document.querySelector("[data-flip-id='X4z5u8MZ3rhzJ7PPFFQz']");
    const newsBlock = document.querySelector("[data-flip-id='0nWJjC1t0g0M6REKpm9Z']");
    const polBlock = document.querySelector("[data-flip-id='KSlflajUrhemq1qjRWM8']");
    const showBlock = document.querySelector("[data-flip-id='JOmPnca9aI5f4egYxft2']");
    const sportBlock = document.querySelector("[data-flip-id='Wvv8FMp5BwLZzdlwg0wM']");
    const plusBlock = document.querySelector("[data-flip-id='MFfOSHTyyA5T2tPNlsOw']");
    const regioBlock = document.querySelector("[data-flip-id='mUMToRLHaEHWjERvt5Xk']");
    const geldBlock = document.querySelector("[data-flip-id='G5IRwA3ffOI71Vg0lKjo']");

    
    
    const mrec = document.querySelector("[data-flip-id='pi66iXWJFZ3ZKdap5kMb']");

    console.log(header);
    console.log(newsBlock);
    
    const overallDiv = document.createElement("div");
    overallDiv.setAttribute("id", "overallDiv");
    header.appendChild(overallDiv);

    const topBtn = document.createElement("button");
    topBtn.setAttribute("id", "navBtn");
    topBtn.innerHTML = "Top";
    overallDiv.appendChild(topBtn);

    topBtn.addEventListener("click", () => {
        if(mrec != null){
            mrec.scrollIntoView(false);
        }
        else{
        const scrollBtn = document.querySelector("[data-test='scrollButton']");
        scrollBtn.click();
        }


    })

    const plusZweierBtn = document.createElement("button");
    plusZweierBtn.setAttribute("id", "navBtn");
    plusZweierBtn.innerHTML = "Plus Zweier";
    overallDiv.appendChild(plusZweierBtn);

    plusZweierBtn.addEventListener("click", () => {
        plusZweierBlock.scrollIntoView(true);
    })

    const videoBtn = document.createElement("button");
    videoBtn.setAttribute("id", "navBtn");
    videoBtn.innerHTML = "Video";
    overallDiv.appendChild(videoBtn);

    videoBtn.addEventListener("click", () => {
        videoBlock.scrollIntoView(false);
    })

    const newsBtn = document.createElement("button");
    newsBtn.setAttribute("id", "navBtn");
    newsBtn.innerHTML = "News";
    overallDiv.appendChild(newsBtn);

    newsBtn.addEventListener("click", () => {
        newsBlock.scrollIntoView(true);
    })


    const polBtn = document.createElement("button");
    polBtn.setAttribute("id", "navBtn");
    polBtn.innerHTML = "Politik";
    overallDiv.appendChild(polBtn);

    polBtn.addEventListener("click", () => {
        polBlock.scrollIntoView(true);
    })

    const showBtn = document.createElement("button");
    showBtn.setAttribute("id", "navBtn");
    showBtn.innerHTML = "Show";
    overallDiv.appendChild(showBtn);

    showBtn.addEventListener("click", () => {
        showBlock.scrollIntoView(true);
    })

    const sportBtn = document.createElement("button");
    sportBtn.setAttribute("id", "navBtn");
    sportBtn.innerHTML = "Sport";
    overallDiv.appendChild(sportBtn);

    sportBtn.addEventListener("click", () => {
        sportBlock.scrollIntoView(true);
    })


    const plusBtn = document.createElement("button");
    plusBtn.setAttribute("id", "navBtn");
    plusBtn.innerHTML = "Plus";
    overallDiv.appendChild(plusBtn);

    plusBtn.addEventListener("click", () => {
        plusBlock.scrollIntoView(true);
    })

    const regioBtn = document.createElement("button");
    regioBtn.setAttribute("id", "navBtn");
    regioBtn.innerHTML = "Regio";
    overallDiv.appendChild(regioBtn);

    regioBtn.addEventListener("click", () => {
        regioBlock.scrollIntoView(true);
    })

    const geldBtn = document.createElement("button");
    geldBtn.setAttribute("id", "navBtn");
    geldBtn.innerHTML = "Wirtschaft";
    overallDiv.appendChild(geldBtn);

    geldBtn.addEventListener("click", () => {
        geldBlock.scrollIntoView(true);
    })
}


addNav();











