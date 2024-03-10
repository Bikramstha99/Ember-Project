import Model, { attr } from '@ember-data/model';

export default class MovieModel extends Model {
  // @attr('number') id;
  @attr('string') name;
  @attr('string') director;
  @attr('string') genre;
  @attr('string') photoPath;
  @attr('date') releaseDate;
}   