
function searchUsingXHR() {
    var userId = document.getElementById("inputBox").value.trim();
    var images = document.getElementById("Image");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.unsplash.com/search/photos?client_id=3u6X9bF8Oe_dW3KcCRAlGRUNb_dq6xg4oQFle1HALaU&query=${userId}` , true);

    xhr.onreadystatechange = function () {
        // When the request is successful, finished, and response is ready
        if (xhr.readyState === 4 && xhr.status === 200) {
            processimages(JSON.parse(this.responseText));
        }
    };
    xhr.send();

    function processimages(resp) {
        images.innerHTML = '';  
        for (let item of resp.results) {

          let imgElement = document.createElement("img");
          imgElement.src = item.urls.small;
          imgElement.alt = item.alt_description;
          imgElement.style.width = '200px';
          imgElement.style.margin = '10px';
          images.appendChild(imgElement);
        }
      }
}

function searchUsingFetch() {
    var userId = document.getElementById("inputBox").value;
    var images = document.getElementById("Image");

    fetch(`https://api.unsplash.com/search/photos?client_id=3u6X9bF8Oe_dW3KcCRAlGRUNb_dq6xg4oQFle1HALaU&query=${userId}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            processimages(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        function processimages(resp) {
            images.innerHTML = '';  
            for (let item of resp.results) {
    
              let imgElement = document.createElement("img");
              imgElement.src = item.urls.small;
              imgElement.alt = item.alt_description;
              imgElement.style.width = '200px';
              imgElement.style.margin = '10px';
              images.appendChild(imgElement);
            }
          }
}

async function searchUsingFetchAwaitAsync() {
    var userId = document.getElementById("inputBox").value;
    var images = document.getElementById("Image");

    let response = await fetch(`https://api.unsplash.com/search/photos?client_id=3u6X9bF8Oe_dW3KcCRAlGRUNb_dq6xg4oQFle1HALaU&query=${userId}`);
    let data = await response.json();
    processimages(data);
  

    function processimages(resp) {
        images.innerHTML = '';  
        for (let item of resp.results) {

          let imgElement = document.createElement("img");
          imgElement.src = item.urls.small;
          imgElement.alt = item.alt_description;
          imgElement.style.width = '200px';
          imgElement.style.margin = '10px';
          images.appendChild(imgElement);
        }
      }
}