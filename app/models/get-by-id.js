import Model, { attr } from '@ember-data/model';

export default class GetByIdModel extends Model {
  @attr('string') name;
  @attr('string') director;
  @attr('string') genre;
  @attr('string') photoPath;
  @attr('date') releaseDate;
}   