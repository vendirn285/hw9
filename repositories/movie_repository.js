class MovieRepository {
    async getAllMovies() {
      return Movie.findAll();
    }
  
    async getMovieById(id) {
      return Movie.findByPk(id);
    }
  
    async createMovie({ name, category }) {
      return Movie.create({ name, category });
    }
  
    async updateMovie(id, { name, category }) {
      return Movie.update({ name, category }, { where: { id } });
    }
  
    async deleteMovie(id) {
      return Movie.destroy({ where: { id } });
    }
  
    async uploadMovieImage(id, filename) {
      const movie = await Movie.findByPk(id);
      if (!movie) {
        throw { name: 'notFound' };
      }
  
      movie.photo = filename;
      await movie.save();
    }
  }
  
  module.exports = MovieRepository;