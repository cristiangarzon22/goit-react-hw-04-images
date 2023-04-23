const fetchImage =  async (searchInfo, page) => {
    const API_KEY = '33770960-9441e00aea4c2d2fce88c05cc';
    const BASE_URL = 'https://pixabay.com/api/';
    const response = await fetch(
        `${BASE_URL}?key=${API_KEY}&q=${searchInfo}&page=${page}&per_page=12`
    );
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(new Error(`Sorry, we couldn't find any matches`));
  }
  export default fetchImage;