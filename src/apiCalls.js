const fetchData = (type) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${type}`).then(
    (res) => res.json()
  );
};

export default fetchData;
