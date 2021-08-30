const fetchData = (type) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${type}`)
    .then(res => {
      if (!res.ok) {
        throw new Error("Trouble loading. Refresh the page and get your movie on.");
      } else {
        return res.json();
      }
    }
  
  );
};

export default fetchData;
