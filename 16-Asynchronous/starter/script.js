'use strict';
// url: https://countries-api-836d.onrender.com/countries/
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/* const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
      <article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} M</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(data.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
        </div>
      </article>
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('turkey');
getCountryData('portugal');
getCountryData('germany');
getCountryData('usa');
getCountryData('france');
getCountryData('china');
 */

///////////////////////////////////////
/* const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} M</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(data.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
        </div>
      </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // render country 1
    renderCountry(data);

    // get neighbour country
    const neighbour = data.borders[0];

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      renderCountry(data, 'neighbour');
    });
  });
};
getCountryAndNeighbour('syria');
 */

/* const request = fetch('https://restcountries.com/v3.1/name/portugal');
console.log(request);
 */

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       [data] = data;
//       renderCountry(data);
//     });
// };
/* const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};
const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} M</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(data.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
        </div>
      </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};
const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg}, (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      const [country] = data;
      renderCountry(country);

      // optional chaining
      // const neighbour = country?.borders;
      const neighbour = country.borders;

      if (!neighbour) throw new Error('No neighbour found!');

      // country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha?codes=${neighbour.join(',')}`,
        'Country not found'
      );
    })
    .then(data => {
      console.log(data);
      data.forEach(item => {
        renderCountry(item, 'neighbour');
      });
    })
    .catch(err => {
      renderError(`Something went wrong💣💣 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', e => {
  e.preventDefault();
  getCountryData('turkey');
});
 */
/* const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} M</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(data.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
        </div>
      </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};
const whereAmI = function (lat, lng) {
  return fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then(response => {
      if (response.status === 400) throw new Error('Invalid location data!');
      return response.json();
    })
    .then(data => {
      console.log(`You're in ${data.city}/${data.countryName}`);
      return data;
    })
    .then(data => {
      if (!data) throw new Error('There is no country that identified');
      getCountryData(data.countryName);
    })
    .catch(err => {
      console.error(`${err} 💣💣💣`);
    });
};

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMsg);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country was not found!💣💣'
  )
    .then(data => {
      const [country] = data;
      renderCountry(country);
      const neighbour = country.borders;

      if (!neighbour) throw new Error('No neighbour found!');

      // country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha?codes=${neighbour.join(',')}`,
        'Country not found'
      );
    })
    .then(neighbours => {
      neighbours.forEach(country => renderCountry(country, 'neighbour'));
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
 */

/* console.log('Test start!');
setTimeout(() => console.log('0 sec timer!'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Task end!');
 */

/* const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening!');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 🎆🎆🎆');
    } else {
      reject(new Error('You lose 🥹'));
    }
  }, 2000);
});
lotteryPromise
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });

// promisifying settimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(res => {
    console.log('WOHOHO!');
    return wait(1);
  })
  .then(res => {
    console.log('Another bitch!');
  });

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('cba').catch(x => console.error(x));
 */
/* 
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} M</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(data.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
        </div>
      </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then(response => {
      if (response.status === 400) throw new Error('Invalid location data!');
      return response.json();
    })
    .then(data => {
      console.log(`You're in ${data.city}/${data.countryName}`);
      if (!data) throw new Error('There is no country that identified');
      getCountryData(data.countryName);
    })
    .catch(err => {
      console.error(`${err} 💣💣💣`);
    });
};

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMsg);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country was not found!💣💣'
  )
    .then(data => {
      const [country] = data;
      renderCountry(country);
      const neighbour = country.borders;

      if (!neighbour) throw new Error('No neighbour found!');

      // country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha?codes=${neighbour.join(',')}`,
        'Country not found'
      );
    })
    .then(neighbours => {
      neighbours.forEach(country => renderCountry(country, 'neighbour'));
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

whereAmI();
 */

/* const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const imageElem = document.createElement('img');
    imageElem.addEventListener('load', function () {
      resolve(imageElem);
    });
    imageElem.addEventListener('error', function () {
      reject(new Error('Image not loaded!'));
    });
    imageElem.src = imgPath;
  });
};

let image;

createImage('img/img-1.jpg')
  .then(elem => {
    image = elem;
    imgContainer.insertAdjacentElement('beforeend', elem);
    return wait(2);
  })
  .then(() => {
    image.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(elem => {
    image = elem;
    imgContainer.insertAdjacentElement('beforeend', elem);
    return wait(2);
  })
  .then(data => {
    image.style.display = 'none';
  })
  .catch(err => console.error(err));
 */

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} M</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
          `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     const resGeo = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting location data!');
//     const dataGeo = await resGeo.json();

//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.countryName}`
//     );
//     if (!res.ok) throw new Error('Problem getting country data!');

//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}/${dataGeo.countryName}`;
//   } catch (err) {
//     console.error(err);

//     // reject promise returned from async functiong
//     throw err;
//   }
// };

// whereAmI()
//   .then(city => {
//     console.log(`2: ${city} 😊`);
//   })
//   .catch(err => console.error(`2: ${err.message} 👋🏽`))
//   .finally(() => console.log('3: Yüklendi be!'));

/////////////// ^^ ALTERNATIVE ^^
/* (async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {

  }
})();
 */

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg}, (${response.status})`);
    return response.json();
  });
};
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    const [[data1], [data2], [data3]] = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data1, data2, data3);
  } catch (err) {
    console.error(`${err} 🥹🥹`);
  }
};

get3Countries('Turkey', 'Syria', 'Portugal');
 */

// Promise.race

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/turkey`),
//     getJSON(`https://restcountries.com/v3.1/name/portugal`),
//     getJSON(`https://restcountries.com/v3.1/name/syria`),
//   ]);
//   console.log(res[0].name.common);
// })();
/* 
const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, seconds * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/turkey`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));
 */
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const imageElem = document.createElement('img');
    imageElem.addEventListener('load', function () {
      resolve(imageElem);
    });
    imageElem.addEventListener('error', function () {
      reject(new Error('Image not loaded!'));
    });
    imageElem.src = imgPath;
  });
};

const loadNPause = async function (seconds) {
  try {
    const imageContainer = document.querySelector('.images');
    const image = await createImage('img/img-1.jpg');
    imageContainer.insertAdjacentElement('beforeend', image);
    await wait(2);
    image.style.display = 'none';
  } catch (err) {
    console.error(`Well that is suck🥹 Error: ${err.message}`);
  }
};

// loadNPause(2);

const loadAll = async function (imgArr) {
  try {
    const imageContainer = document.querySelector('.images');
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);

    imgsEl.forEach(img => {
      img.classList.add('parallel');
      imageContainer.insertAdjacentElement('beforeend', img);
    });
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
