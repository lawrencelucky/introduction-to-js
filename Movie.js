class Movie {
  constructor(title, genre, tags) {
    this.title = title;
    this.genre = genre;
    this.tags = tags;
  }

  description() {
    this.tags.forEach((tag, index) => {
      console.log(`${index} - ${this.title} has ${tag} tag`);
    });
  }
}

const colors = ['Blue', 'Red'];

export { colors };

export default Movie;
