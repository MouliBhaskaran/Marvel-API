let marvel = {
  render: function () {
    let publicKey = "78277a647aff1b066a7e87cbc1895048";
    let hash = "31a80f262eda63c6068229cf71216d1c";
    let baseURL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;
    console.log(baseURL);
    let content = document.getElementById("content");
    let info = document.getElementById("info");
    let value;

    $.ajax({
      url: baseURL,
      type: "GET",
      success: function (data) {
        const superheros = data.data.results;
        console.log(superheros);
        let list = "";

        superheros.forEach((superhero) => {
          let template = `
            <a class="superhero__a" href='/info.html?id=${superhero.id}' >
            <div class="superhero__container">
                 <div>
                    <img class="superhero__image" src= " ${
                      superhero.thumbnail.path +
                      "." +
                      superhero.thumbnail.extension
                    } "  alt="Superhero image">    
                 </div>
                <div>
                    <h3  class="superhero__name"> ${superhero.name}</h3>
                </div>
                <div>
                    <p class="superhero__p">${superhero.description}</p>
                    <br>
                    <p class="superhero__appearences"> Comic appearences: ${
                      superhero.comics.available
                    } </p>
                </div>
            </div> 
            </a> `;
          list += template;
        });
        content.innerHTML = list;
      },
      error: function () {
        info.innerHTML = "Data not available";
      },
    });
  },
};

marvel.render();
