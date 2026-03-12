let btn = document.querySelector("button");
btn.addEventListener("click", getnews);
function news(topic) {
  fetch(`https://hn.algolia.com/api/v1/search?query=${topic}`)
    .then((res) => res.json())
    .then((data) => {
      let allnews = document.querySelector("#allnews");
      allnews.innerHTML = "";
      data.hits.forEach((i) => {
        if (i.title && i.url) {
          let card = document.createElement("div");
          card.className = "card";

          card.innerHTML = `
                        <h3><a href="${i.url}" >${i.title}</a><h3>
                        <p>Author: ${i.author}</p>`;
          allnews.appendChild(card);
        }
      });
    });
}
function getnews() {
  let topic = document.getElementById("topic").value;
  news(topic);
}
news("Sports"); //by default
