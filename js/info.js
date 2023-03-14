let marvel = {
  render: function () {
    let info = document.getElementById("info");
    let content = document.getElementById("content");
    let urlValue = window.location;
    let srl = new URL(urlValue);
    let id = srl.searchParams.get("id");
    let publicKey = "78277a647aff1b066a7e87cbc1895048";
    let hash = "31a80f262eda63c6068229cf71216d1c";
    let baseURL = `https://gateway.marvel.com/v1/public/characters/${id}?apikey=${publicKey}&hash=${hash}&ts=1`;

    $.ajax({
      url: baseURL,
      type: "GET",
      success: function (data) {
        const superhero = data.data.results;
        console.log(data);
        console.log(baseURL);

        let template = `
        <div class="hero__container">
            <div>
                <img class="superhero__image" src=" ${
                  superhero[0].thumbnail.path +
                  "." +
                  superhero[0].thumbnail.extension
                }" alt="Superhero img">

            </div>

            <div>
                <h3 class="superhero__name"> ${superhero[0].name} </h3>
            </div>

            <div>
                <p class="superhero__p"> ${superhero[0].description} </p>
                <p class="superhero__appearences1"> Comic Appearences 📔: ${
                  superhero[0].comics.available
                } </p>
                <p class="superhero__appearences1"> Story Appearences 🎭: ${
                  superhero[0].stories.available
                } </p>
                <p class="superhero__appearences1"> Series Appearences 🎥: ${
                  superhero[0].series.available
                } </p>
            </div>    
        </div> `;

        content.innerHTML = template;
      },

      error: function () {
        info.innerHTML = "Data not available";
      },
    });
  },
};

marvel.render();
