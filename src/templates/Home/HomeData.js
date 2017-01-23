/**
 * Created by Chris Dorward on 23/01/2017
 * testData/HomeData
 * HomeData - replace real data here
 */
const HomeData = {
  meta: 'HomeData',
  data: {
    hero: {
      header: 'Homepage hero',
      shortDescription: 'Short description of Homepage hero',
      link: '/about',
      linkText: 'About'
    },
    featured: [
      {
        id: 123,
        header: 'Recipe 123',
        shortDescription: 'This is a featured recipe',
        link: '/recipe?ID=123',
        btnType: 'recipe'
      },
      {
        id: 234,
        header: 'Tip 123',
        shortDescription: 'This is a featured tip',
        link: '/tip?ID=234',
        btnType: 'tip'
      }
    ]
  }
};
export default HomeData;
