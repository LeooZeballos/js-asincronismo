import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(url = "", data = {}) {
  const response = fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    });
  return response;
}

const data = {
  "title": "Banana",
  "price": 10,
  "description": "Una banana",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/tech"]
}

postData(`${API}/products`, data)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => console.log("Done"));