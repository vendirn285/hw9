class MovieService {
    constructor(movieRepository) {
      this.movieRepository = movieRepository;
    }
  
    async getAllMovies() {
      return this.movieRepository.getAllMovies();
    }
  
    async getMovieById(id) {
      return this.movieRepository.getMovieById(id);
    }
  
    async createMovie({ name, category }) {
      return this.movieRepository.createMovie({ name, category });
    }
  
    async updateMovie(id, { name, category }) {
      return this.movieRepository.updateMovie(id, { name, category });
    }
  
    async deleteMovie(id) {
      return this.movieRepository.deleteMovie(id);
    }
  
    async uploadMovieImage(id, filename) {
      return this.movieRepository.uploadMovieImage(id, filename);
    }
  }
  
  module.exports = MovieService;