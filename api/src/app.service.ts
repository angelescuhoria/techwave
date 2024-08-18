import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Genre, Movie } from './entities';
import { GenreDto, MovieDto } from './types';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
    @InjectRepository(Genre) private genreRepository: Repository<Genre>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  //Movies

  async getAllMovies(): Promise<Movie[]> {
    return await this.movieRepository.find({
      order: { id: 'ASC' },
      relations: ['genres'],
    });
  }

  async addMovie(movieDto: MovieDto): Promise<Movie[]> {
    const genres = await this.genreRepository.findBy({
      id: In(movieDto.genres),
    });
    const movie = this.movieRepository.create({ ...movieDto, genres });
    await this.movieRepository.save(movie);
    return await this.getAllMovies();
  }

  async updateMovie(id: number, movieDto: MovieDto): Promise<Movie[]> {
    const movie = await this.movieRepository.findOne({
      where: { id },
      relations: ['genres'],
    });

    if (!movie) throw new Error('Movie not found!');

    Object.keys(movieDto).forEach(async (key) => {
      if (key === 'genres' && movieDto.genres) {
        const genres = await this.genreRepository.findBy({
          id: In(movieDto.genres),
        });
        movie.genres = genres;
      } else movie[key] = movieDto[key];
    }); // update keys accordingly. I tried using .update() but you can't iterate through relations.

    await this.movieRepository.save(movie);
    return await this.getAllMovies();
  }

  async deleteMovie(id: number): Promise<Movie[]> {
    await this.movieRepository.delete(id);
    return await this.getAllMovies();
  }

  //Genres

  async getAllGenres(): Promise<Genre[]> {
    return await this.genreRepository.find({
      order: { id: 'ASC' },
      relations: ['movies'],
    });
  }

  async addGenre(genre: GenreDto): Promise<Genre[]> {
    await this.genreRepository.save(genre);
    return await this.getAllGenres();
  }

  async deleteGenre(id: number): Promise<Genre[]> {
    await this.genreRepository.delete(id);
    return await this.getAllGenres();
  }
}
