document.addEventListener('keydown', async function (event) {
        if (event.key == "π"){
            const pBtnOverview = document.querySelector("[data-test='publishButton']");

            if(pBtnOverview != null){
                pBtnOverview.click();
            }
            

            await new Promise(resolve => setTimeout(resolve, 3000));

            const clearAllBtn = document.querySelector("[data-test='ApproveAllButton']");

            if(clearAllBtn != null){
                clearAllBtn.click();
            }
            
            await new Promise(resolve => setTimeout(resolve, 2000));

            const pBtnAfter = document.querySelector("[data-test='submitButton']");

            if(pBtnAfter != null){
                pBtnAfter.click();
            }
           
        }
})

let styles = `
    #overallDiv { 
        height: 55px;
        
    }
    #navBtn{
        height: 45px;
        margin-right: 10px;
        margin-left:10px;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 5px;
        font-size: 30px;
    }
    
`

let styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

async function addNav() {

    await new Promise(resolve => setTimeout(resolve, 20000));

    const header = document.getElementsByTagName('header')[0];
    const newsBlock = document.querySelector("[data-flip-id='0nWJjC1t0g0M6REKpm9Z']");
    const polBlock = document.querySelector("[data-flip-id='KSlflajUrhemq1qjRWM8']");
    const showBlock = document.querySelector("[data-flip-id='JOmPnca9aI5f4egYxft2']");
    const sportBlock = document.querySelector("[data-flip-id='yGZB9Gl8geEXsKqjFGJP']");

    const aufmacher = document.getElementById("appContent");

    console.log(header);
    console.log(newsBlock);
    
    const overallDiv = document.createElement("div");
    overallDiv.setAttribute("id", "overallDiv");
    header.appendChild(overallDiv);

    const topBtn = document.createElement("button");
    topBtn.setAttribute("id", "navBtn");
    topBtn.innerHTML = "TOP";
    overallDiv.appendChild(topBtn);

    topBtn.addEventListener("click", () => {
        console.log("Hello!");
        aufmacher.scrollIntoView();
    })

    const newsBtn = document.createElement("button");
    newsBtn.setAttribute("id", "navBtn");
    newsBtn.innerHTML = "NEWS";
    overallDiv.appendChild(newsBtn);

    newsBtn.addEventListener("click", () => {
        newsBlock.scrollIntoView(false);
    })


    const polBtn = document.createElement("button");
    polBtn.setAttribute("id", "navBtn");
    polBtn.innerHTML = "POLITIK";
    overallDiv.appendChild(polBtn);

    polBtn.addEventListener("click", () => {
        polBlock.scrollIntoView(false);
    })

    const showBtn = document.createElement("button");
    showBtn.setAttribute("id", "navBtn");
    showBtn.innerHTML = "SHOW";
    overallDiv.appendChild(showBtn);

    showBtn.addEventListener("click", () => {
        showBlock.scrollIntoView(false);
    })

    const sportBtn = document.createElement("button");
    sportBtn.setAttribute("id", "navBtn");
    sportBtn.innerHTML = "SPORT";
    overallDiv.appendChild(sportBtn);

    sportBtn.addEventListener("click", () => {
        sportBlock.scrollIntoView(false);
    })
}


addNav();











