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
    
`;

let styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

async function addNav() {
  await new Promise((resolve) => setTimeout(resolve, 15000));

  const allTechnicalNames = document.querySelectorAll(
    "[data-test='technicalNamePreview']",
  );

  const header = document.getElementsByTagName("header")[0];
  const plusZweierBlock = Array.from(allTechnicalNames).find(
    (span) => span.innerText === "best-of-bildplus",
  );

  const videoCenter = Array.from(allTechnicalNames).find(
    (span) => span.innerText === "Video-Center",
  );
  const newsBlock = Array.from(allTechnicalNames).find(
    (span) => span.innerText === "news",
  );
  const polBlock = Array.from(allTechnicalNames).find(
    (span) => span.innerText === "politik",
  );
  const showBlock = Array.from(allTechnicalNames).find(
    (span) => span.innerText === "stars und kultur",
  );
  const sportBlock = Array.from(allTechnicalNames).find(
    (span) => span.innerText === "sport",
  );


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
    if (mrec != null) {
      mrec.scrollIntoView(false);
    } else {
      const scrollBtn = document.querySelector("[data-test='tab-aufmacher']");
      scrollBtn.click();
    }
  });

  const plusZweierBtn = document.createElement("button");
  plusZweierBtn.setAttribute("id", "navBtn");
  plusZweierBtn.innerHTML = "Plus Zweier";
  overallDiv.appendChild(plusZweierBtn);

  plusZweierBtn.addEventListener("click", () => {
    plusZweierBlock.scrollIntoView(true);
  });

  const videoBtn = document.createElement("button");
  videoBtn.setAttribute("id", "navBtn");
  videoBtn.innerHTML = "Video";
  overallDiv.appendChild(videoBtn);

  videoBtn.addEventListener("click", () => {
    videoCenter.scrollIntoView(true);
  });

  const newsBtn = document.createElement("button");
  newsBtn.setAttribute("id", "navBtn");
  newsBtn.innerHTML = "News";
  overallDiv.appendChild(newsBtn);

  newsBtn.addEventListener("click", () => {
    newsBlock.scrollIntoView(true);
  });

  const polBtn = document.createElement("button");
  polBtn.setAttribute("id", "navBtn");
  polBtn.innerHTML = "Politik";
  overallDiv.appendChild(polBtn);

  polBtn.addEventListener("click", () => {
    polBlock.scrollIntoView(true);
  });

  const showBtn = document.createElement("button");
  showBtn.setAttribute("id", "navBtn");
  showBtn.innerHTML = "Show";
  overallDiv.appendChild(showBtn);

  showBtn.addEventListener("click", () => {
    showBlock.scrollIntoView(true);
  });

  const sportBtn = document.createElement("button");
  sportBtn.setAttribute("id", "navBtn");
  sportBtn.innerHTML = "Sport";
  overallDiv.appendChild(sportBtn);

  sportBtn.addEventListener("click", () => {
    sportBlock.scrollIntoView(true);
  });

 }

addNav();
