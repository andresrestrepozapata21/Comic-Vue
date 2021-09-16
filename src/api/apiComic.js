export default class apiComic {
  async getComic(id) {
    const data = await fetch(id + "/info.0.json",{
      headers: {
      },
    });
    const comics = await data.json();

    return comics;
  }
}
