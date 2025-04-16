//Prof: João Paulo Pereira Rezende

//Fluxo:
// - Evento de submit no formulario disparado pelo botão
// - Captura do evento pelo search.addEventListener("submit", processar);
// - O evento captura o valor do input e coloca ele na url de requisição
// - E feita a requisição e a resposta é capturada por response.json();

const search = document.getElementById("search");
const cityInput = document.getElementById("cidade");
const h1 = document.getElementById("id");
const img = document.getElementById("img");
const temp1 = document.getElementById("temp1");
const temp2 = document.getElementById("temp2");
const tempmin = document.getElementById("tempmin");
const tempmax = document.getElementById("tempmax");
const umidade = document.getElementById("umidade");
const vento = document.getElementById("vento");
const weather = document.getElementById("weather");

const processar = async (event) => {
  event.preventDefault();
  const cityName = cityInput.value;
  const key = "dbd06c971bb57d7c713e5f2c6207c82b";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
      )}&appid=${key}&units=metric&lang=pt_br`
    );
    const data = await response.json();

    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    h1.textContent = data.name;
    temp1.textContent = `${data.main.temp} C°`;
    temp2.textContent = data.weather[0].description;
    tempmin.textContent = `${data.main.temp_min} C°`;
    tempmax.textContent = `${data.main.temp_max} C°`;
    umidade.textContent = `${data.main.humidity}%`;
    vento.textContent = `${data.wind.speed} Km/H`;

    weather.classList.add("visible");
  } catch (error) {
    console.log("Erro ao buscar dados", error);
  }
};

search.addEventListener("submit", processar);
