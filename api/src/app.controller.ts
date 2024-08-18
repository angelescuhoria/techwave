import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Genre, Movie } from './entities';
import { GenreDto, MovieDto } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Movies

  @Get('ListMovies')
  getMovies(): Promise<Movie[]> {
    return this.appService.getAllMovies();
  }

  @Post('AddMovie')
  addMovie(@Body() movie: MovieDto): Promise<Movie[]> {
    return this.appService.addMovie(movie);
  }

  @Put('UpdateMovie/:id')
  async updateMovie(
    @Body() movie: MovieDto,
    @Param('id') id: number,
  ): Promise<Movie[]> {
    return await this.appService.updateMovie(id, movie);
  }

  @Delete('DeleteMovie/:id')
  async deleteMovie(@Param('id') id: number): Promise<Movie[]> {
    return await this.appService.deleteMovie(id);
  }

  //Genres

  @Get('ListGenres')
  getAllGenres(): Promise<Genre[]> {
    return this.appService.getAllGenres();
  }

  @Post('AddGenre')
  addGenre(@Body() genre: GenreDto): Promise<Genre[]> {
    return this.appService.addGenre(genre);
  }

  @Delete('DeleteGenre/:id')
  async deleteGenre(@Param('id') id: number): Promise<Genre[]> {
    return await this.appService.deleteGenre(id);
  }
}
