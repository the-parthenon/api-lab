const residentButton = document.getElementById('residents');
const resNames = document.querySelector('section');

const clickButton = (evt) => {
  console.log('Button clicked! Congratulations!');
  axios.get('https://swapi.dev/api/planets/?search=ald').then((res) => {
    // console.log(res.data.results[0].residents.length);
    for (let i = 0; i < res.data.results[0].residents.length; i++) {
      //   console.log(res.data.results[0].residents[i]);
      axios.get(res.data.results[0].residents[i]).then((res) => {
        let residentName = document.createElement('div');
        // console.log(residentName);
        residentName.innerHTML = `<h2>${res.data.name}</h2>`;
        document.body.appendChild(residentName);
      });
      //   charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>`
      //   charContainer.appendChild(charCard)
    }
  });
};

residentButton.addEventListener('click', clickButton);
