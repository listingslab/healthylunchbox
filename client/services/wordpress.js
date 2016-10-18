import RequestManager from '../services/request-manager'
import { WP_HERO } from '../constants'

class Wordpress {

  static getHero() {
    const promises = {}

    if (!promises.hero) {
      promises.hero = new Promise((resolve, reject) => {
        const heroJSON = sessionStorage.getItem('hero')
        if (heroJSON) {
          const hero = JSON.parse(heroJSON)
          return resolve(hero);
        }
        RequestManager.get(WP_HERO)
          .then(payload => {
            const hero = payload[0];
            sessionStorage.setItem('hero', JSON.stringify(hero));
            resolve(hero);
          })
          .catch(reject);
      });
    }

    return promises.hero;

  }
}

export default {
	getHero: Wordpress.getHero
}
