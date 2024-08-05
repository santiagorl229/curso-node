import { heroes } from '../heroes';

export const findHeroById = ( id: number ) => {
    return heroes.find( (hero) => hero.id === id);
}
 