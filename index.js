function getRandomImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then(function(res) {
            console.log(res);
            document.querySelector("#dog-image").style.backgroundImage = `url(${res.message})`;
        });
 }
 function getSpecificImage() {
    const name = document.querySelector("#dog-name").value;
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((res) => res.json())
        .then(function(res) {
            if (res.status === "error") {
                alert("There's nothing ")
            }
            else {
                document.querySelector("#dog-image").style.backgroundImage = `url(${res.message})`;
            }
        });
 }
 