/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home
 * NavigationData - replace real data here
 */
const NavigationData = [
  {
    text: 'Recipes & ideas',
    navType: 'internal',
    accessible: 'http://api.healthylunchbox.com.au/home/recipes/',
    url: 'thisUrl coming soon',
    to: '/recipes',
    colour: 'blue'
  },
  {
    text: 'Tips',
    navType: 'internal',
    accessible: 'http://api.healthylunchbox.com.au/home/tips/',
    url: '/tips',
    to: '/tips',
    colour: 'green'
  },
  {
    text: 'About',
    navType: 'internal',
    accessible: 'http://api.healthylunchbox.com.au/home/about/',
    url: '/about',
    to: '/about',
    colour: 'orange'
  }
];
export default NavigationData;
