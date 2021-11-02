async function randomDog() {
  await fetch("https://random.dog/woof.json")
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);

      document.getElementById("img").src = data.url;
    })
    .catch((error) => {
      console.log("error");
      console.error(error);
    });
}
