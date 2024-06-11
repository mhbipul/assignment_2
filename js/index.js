

const imageArray = [
    {
        url: "/img/product/product1.png"
    },
    {
        url: "/img/product/product2.png"
    },
    {
        url: "/img/product/product3.png"
    },
    {
        url: "/img/product/product4.png"
    },
    {
        url: "/img/product/product5.png"
    },
    {
        url: "/img/product/product6.png"
    },
    {
        url: "/img/product/product1.png"
    },
    {
        url: "/img/product/product2.png"
    },
    {
        url: "/img/product/product3.png"
    },
    {
        url: "/img/product/product4.png"
    },
    {
        url: "/img/product/product5.png"
    },
  ];










function handleShowMoreProducts(){
    const projectContainer = document.getElementById("products");

  for (const item of imageArray) {
    const projectDivImage = document.createElement("div");

    projectDivImage.classList.add("product");
    projectDivImage.innerHTML= `
    <img src="${item.url}" >
    `;
    projectContainer.appendChild(projectDivImage);


    
  }

}

function handleSubmission(){
  
    const container = document.getElementById("email");
    const emailPara = document.createElement("p");
    emailPara.innerText = `Subscription Successful!!`;
    container.appendChild(emailPara);
}