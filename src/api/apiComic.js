export default class apiComic {
  async getComic(id) {
    const data = await fetch(id + "/info.0.json", {
     mode: 'no-cors',
     headers: [
       ['Access-Control-Allow-Origin', '*']
     ]
    });
    const comics = await data.json();

    return comics;
  }
}
