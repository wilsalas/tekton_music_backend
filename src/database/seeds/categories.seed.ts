import CATEGORIES from '@enum/categories.enum';
import { Categories } from 'categories/entities/categories.entity';
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateCategories implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    await dataSource.createQueryBuilder().delete().from(Categories).execute();

    await dataSource
      .createQueryBuilder()
      .insert()
      .into(Categories)
      .values([
        {
          id: CATEGORIES.ELECTRONIC,
          name: 'Electronic',
        },
        {
          id: CATEGORIES.COUNTRY,
          name: 'Country',
        },
        {
          id: CATEGORIES.POP,
          name: 'Pop',
        },
        {
          id: CATEGORIES.ROCK,
          name: 'Rock',
        },
        {
          id: CATEGORIES.RAP,
          name: 'Rap',
        },
        {
          id: CATEGORIES.REGGUAETON,
          name: 'Regguaeton',
        },
        {
          id: CATEGORIES.ROMANTIC,
          name: 'Romantic',
        },
        {
          id: CATEGORIES.REGGAE,
          name: 'Reggae',
        },
        {
          id: CATEGORIES.SALSA,
          name: 'Salsa',
        },
        {
          id: CATEGORIES.RANCHERA,
          name: 'Ranchera',
        },
      ])
      .execute();
  }
}
