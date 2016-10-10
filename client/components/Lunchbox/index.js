import React, { Component } from 'react'
import { render } from 'react-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ModalWindow from '../Modal'
import RequestManager from '../../services/request-manager'

export default class Lunchbox extends Component {
  constructor() {
    super()
    this.state = {
      breads: sessionStorage.getItem('breads'),
      veges: sessionStorage.getItem('veges'),
      fruits: sessionStorage.getItem('fruits'),
      meatsandalternatives: sessionStorage.getItem('meatsandalternatives'),
      dairy: sessionStorage.getItem('dairy'),
      foods: {
        breads: [
          {
            id: 0,
            image: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
            title: 'Sandwich made from multigrain, wholemeal or white high fibre bread',
            modal: {
              title: 'Sandwich made from multigrain, wholemeal or white high fibre bread',
              content: 'Make up a loaf of fresh bread into sandwihes on the weekend with simple fillings like chicken with peso or leftover home cooked meat with mustard then freeze. Add in a fresh salad on the day by sending it separately in a plastic container',
              image: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
              group: 'breads'
            }
          },
          {
            id: 1,
            image: 'http://cookdiary.net/wp-content/uploads/images/Sandwiches_9301.jpg',
            title: 'Pita Pocket, Lavash or Lebanese bread',
            modal: {
              title: 'Pita Pocket, Lavash or Lebanese bread',
              content: 'Put fillings such as hummus, falafel and tabouli inside a pita bread pocket or roll them inside Lebanese bread. Baked pita bread pieces with veggie dip or salsa makes a great snack',
              image: 'http://cookdiary.net/wp-content/uploads/images/Sandwiches_9301.jpg',
              group: 'breads'
            }
          },
          {
            id: 2,
            image: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Sandwiches-Pictures.jpg',
            title: 'Home made pizza muffin',
            modal: {
              title: 'Home made pizza muffin',
              content: 'Top English miffins with diced vegetables (like mushroom and capsicum) and sprinkle with reduced fat cheese for a quick mini pizza',
              image: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Sandwiches-Pictures.jpg',
              group: 'breads'
            }
          },
          {
            id: 3,
            image: 'https://s3.amazonaws.com/cos-cdn2/McAlisters/Images+for+menu+7.24/McAlisters-Product-Images_HOT-SANDWICHES_Turkey-Melt.png',
            title: 'Cooked pasta spirals or shells',
            modal: {
              title: 'Cooked pasta spirals or shells',
              content: "Leftover vegetables and pasta or rice from dinner can be made into a healthy salad for the next day\'s lunchbox ",
              image: 'https://s3.amazonaws.com/cos-cdn2/McAlisters/Images+for+menu+7.24/McAlisters-Product-Images_HOT-SANDWICHES_Turkey-Melt.png',
              group: 'breads'
            }
          },
          {
            id: 4,
            image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
            title: 'Salad wrap',
            modal: {
              title: 'Salad wrap',
              content: 'Involve children in choosing and preparing foods for their pakced lunches by asking them to select what they would like for lunch, out of a choice of healthy foods',
              image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
              group: 'breads'
            }
          },
          {
            id: 5,
            image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
            title: 'Crispbread Cruskits or Corn Thins',
            modal: {
              title: 'Crispbread Cruskits or Corn Thins',
              content: 'Pack crispbreads with salsa or guacamole, reduced fat grated cheese and some salad vegetables and let kids assemble for themselves',
              image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
              group: 'breads'
            }
          },
          {
            id: 6,
            image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
            title: 'Wholegrain bread roll',
            modal: {
              title: 'Wholegrain bread roll',
              content: 'Leftover cottage pie or a spaghetti bolognaise can be added to a bread roll for a tasty sandwich',
              image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
              group: 'breads'
            }
          },
          {
            id: 7,
            image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
            title: 'Rice or noodles',
            modal: {
              title: 'Rice or noodles',
              content: 'If you prepare extra stir fry or fried rice at dinner time, it makes a great lunch the next day',
              image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
              group: 'breads'
            }
          },
        ],
        veges: [
          {
            id: 0,
            image: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
            title: 'Corn on the cob',
            modal: {
              title: 'Corn on the cob',
              content: 'Look out for fruits and vegeables "in season". They are usually good quality and better value. Frozen or cannbed vegies and legumes are also good options',
              image: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
              group: 'veges'
            }
          },
          {
            id: 1,
            image: 'http://cookdiary.net/wp-content/uploads/images/Sandwiches_9301.jpg',
            title: 'Baked vegies',
            modal: {
              title: 'Baked vegies',
              content: 'Add leftover vegetables from dinner such as roast pumpkin or sweet potato to sandwiches and wraps, make a baked vegie slice or frittata or put in a container as a snack',
              image: 'http://cookdiary.net/wp-content/uploads/images/Sandwiches_9301.jpg',
              group: 'veges'
            }
          },
          {
            id: 2,
            image: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Sandwiches-Pictures.jpg',
            title: 'Tomato and cucumber slices',
            modal: {
              title: 'Tomato and cucumber slices',
              content: 'Prepare lunches the night before whilst cutting up the vegies for dinner to save time in the morning. Avoid soggy sandwiches by making sure salad is dry and putting cut up items like tomato in a separate plastic container',
              image: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Sandwiches-Pictures.jpg',
              group: 'veges'
            }
          },
          {
            id: 3,
            image: 'https://s3.amazonaws.com/cos-cdn2/McAlisters/Images+for+menu+7.24/McAlisters-Product-Images_HOT-SANDWICHES_Turkey-Melt.png',
            title: 'Coleslaw',
            modal: {
              title: 'Coleslaw',
              content: 'Add grated carrot and cabbage or shredded lettuce and diced apple and mix with reduced fat mayonnaise. Add coleslaw to a sandwich with leftover home cooked meat or chicken or mix in a tin of tuna to make a healthy salad',
              image: 'https://s3.amazonaws.com/cos-cdn2/McAlisters/Images+for+menu+7.24/McAlisters-Product-Images_HOT-SANDWICHES_Turkey-Melt.png',
              group: 'veges'
            }
          },
          {
            id: 4,
            image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
            title: 'Mashed avocado',
            modal: {
              title: 'Mashed avocado',
              content: 'Use avocado on sandwiches or margarine spreads made from healthy poly and mono unsaturated fats such as canola, sunflower, soybean and olive as a better alternative to butter.',
              image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
              group: 'veges'
            }
          },
          {
            id: 5,
            image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
            title: 'Mixed vegetables chopped up',
            modal: {
              title: 'Mixed vegetables chopped up',
              content: 'Vegies such as mushrooms, snow peas, broccoli and green beans taste great in a stir fry with honey and soy sauce. Cook extra for dinner and pack a small serve as a snack',
              image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
              group: 'veges'
            }
          },
          {
            id: 6,
            image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
            title: 'Potato salad',
            modal: {
              title: 'Potato salad',
              content: 'Add boiled potatos, corn kernels, chopped apple and celery, and a hard boiled egg to make a quick and easy potato salad. Dressing can be made by combining seeded mustard with reduced fat mayonnaise or natural yoghurt.',
              image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
              group: 'veges'
            }
          }
        ],
        fruits: [
          {
            id: 0,
            image: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
            title: 'Strawberries',
            modal: {
              title: 'Strawberries',
              content: 'Fruit has more fibre and less sugar than fruit juice drinks. Make fruit a daily lunchbox item. Ideally fruit juice drinks should not be packed in the lunch box.',
              image: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
              group: 'fruits'
            }
          },
          {
            id: 1,
            image: 'http://cookdiary.net/wp-content/uploads/images/Sandwiches_9301.jpg',
            title: 'Fruit salad cup',
            modal: {
              title: 'Fruit salad cup',
              content: 'Kids like fresh fruit cut up and ready to eat but if you are in a rush, tinned or packet fruit salad in natural juice is a good option',
              image: 'http://cookdiary.net/wp-content/uploads/images/Sandwiches_9301.jpg',
              group: 'fruits'
            }
          },
          {
            id: 2,
            image: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Sandwiches-Pictures.jpg',
            title: 'Dried apriocot or apple pieces',
            modal: {
              title: 'Dried apriocot or apple pieces',
              content: 'Children do need healthy snacks between main meals because they have small stomachs and require small amounts of food more frequently than adults',
              image: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Sandwiches-Pictures.jpg',
              group: 'fruits'
            }
          },
          {
            id: 3,
            image: 'https://s3.amazonaws.com/cos-cdn2/McAlisters/Images+for+menu+7.24/McAlisters-Product-Images_HOT-SANDWICHES_Turkey-Melt.png',
            title: 'Bunch of grapes',
            modal: {
              title: 'Bunch of grapes',
              content: 'Fresh fruit makes a great snack, especially when it is easy to eat and not too messy',
              image: 'https://s3.amazonaws.com/cos-cdn2/McAlisters/Images+for+menu+7.24/McAlisters-Product-Images_HOT-SANDWICHES_Turkey-Melt.png',
              group: 'fruits'
            }
          },
          {
            id: 4,
            image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
            title: 'Fresh melon balls or pieces',
            modal: {
              title: 'Fresh melon balls or pieces',
              content: 'Try making your own muffins as a great way to include more fruit and vegetables. Examples include sultana, carrot, zucchini, apple, pear, banana or pumpkin. Muffins can be made in advance, then wrapped individually and frozen.',
              image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
              group: 'fruits'
            }
          },
          {
            id: 5,
            image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
            title: 'Sliced fruit such as apple, banana, orange or mandarin',
            modal: {
              title: 'Sliced fruit such as apple, banana, orange or mandarin',
              content: 'For small appetites or younger children, pack smaller serves, cut up sandwiches into quarters and chop up fruit',
              image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
              group: 'fruits'
            }
          },
          {
            id: 6,
            image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
            title: 'Packet of sultanas',
            modal: {
              title: 'Packet of sultanas',
              content: 'Fruit or fruit puree tubs in natural juice or a box in sultanas are quick and easy snacks.',
              image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
              group: 'fruits'
            }
          },
          {
            id: 7,
            image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
            title: 'Tinned fruit in natural juice',
            modal: {
              title: 'Tinned fruit in natural juice',
              content: 'Kids need a healthy school lunch to boost their energy and help them concentrate and learn at school',
              image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
              group: 'fruits'
            }
          }
        ],
        meatsandalternatives: [
          {
            id: 0,
            image: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
            title: 'Tinned tuna or salmon',
            modal: {
              title: 'Tinned tuna or salmon',
              content: 'Tinned tuna, salmon or baked beans are a convenient and easily stored at home',
              image: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
              group: 'meatsandalternatives'
            }
          },
          {
            id: 1,
            image: 'http://cookdiary.net/wp-content/uploads/images/Sandwiches_9301.jpg',
            title: 'Skinless chicken or turkey',
            modal: {
              title: 'Skinless chicken or turkey',
              content: 'It is a good idea to use a cooler bag and cold brick to help keep food cool or add a drink bottle of frozen water to the lunchb ox',
              image: 'http://cookdiary.net/wp-content/uploads/images/Sandwiches_9301.jpg',
              group: 'meatsandalternatives'
            }
          },
          {
            id: 2,
            image: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Sandwiches-Pictures.jpg',
            title: 'Boiled egg',
            modal: {
              title: 'Boiled egg',
              content: 'Make sure that food that has been cooked, such as a hard boiled egg, has been properly cooled in the fridge before packing it in a lunch box',
              image: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Sandwiches-Pictures.jpg',
              group: 'meatsandalternatives'
            }
          },
          {
            id: 3,
            image: 'https://s3.amazonaws.com/cos-cdn2/McAlisters/Images+for+menu+7.24/McAlisters-Product-Images_HOT-SANDWICHES_Turkey-Melt.png',
            title: 'Hummus dip',
            modal: {
              title: 'Hummus dip',
              content: 'Pack carrot and celery sticks in the lunchbox with a dip like hummus to encourage kids to eat raw vegies',
              image: 'https://s3.amazonaws.com/cos-cdn2/McAlisters/Images+for+menu+7.24/McAlisters-Product-Images_HOT-SANDWICHES_Turkey-Melt.png',
              group: 'meatsandalternatives'
            }
          },
          {
            id: 4,
            image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
            title: 'Baked beans, bean mix or lentil burger',
            modal: {
              title: 'Baked beans, bean mix or lentil burger',
              content: 'Add legumes such as kidney beans, chickpeas or lentils to salads, soups and casseroles',
              image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
              group: 'meatsandalternatives'
            }
          }
        ],
        dairy: [
          {
            id: 0,
            image: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
            title: 'Reduced fat yoghurt, custard or dairy dessert',
            modal: {
              title: 'Reduced fat yoghurt, custard or dairy dessert',
              content: 'Packing a frozen bottle of water in the lunchbox will give children a cold drink and help keep the lunch cool. Yoghurt, milk and sandwiches can also be frozen in advance and then defrost in the lunchbox',
              image: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
              group: 'dairy'
            }
          },
          {
            id: 1,
            image: 'http://cookdiary.net/wp-content/uploads/images/Sandwiches_9301.jpg',
            title: 'Reduced fat milk and cheese or soy milk',
            modal: {
              title: 'Reduced fat milk and cheese or soy milk',
              content: 'Try to include calcium rich foods every day such as reduced fat milk or cheese or yoghurt or calcium-fortified soy milk.',
              image: 'http://cookdiary.net/wp-content/uploads/images/Sandwiches_9301.jpg',
              group: 'dairy'
            }
          }
        ]
      }
    }
  }
  
  openModal(item) {
    this.setState({open: true, modalData: item.modal})
  }

  hideModal() {
    this.setState({open: false})
  }

  addToLunchbox() {
    const modal = this.state.modalData
    const group = modal.group
    const image = modal.image
    this.setState({[group]: image})
    sessionStorage.setItem(group, image)
  }

  removeFromLunchbox() {
    const modal = this.state.modalData
    const group = modal.group

    this.setState({[group]: ''})
    sessionStorage.removeItem(group)
  }

  render() {
    return (
      <div className="container">
        <div className="lunchbox">
          <img src={this.state.breads}/>
          <img src={this.state.veges}/>
          <img src={this.state.fruits}/>
          <img src={this.state.meatsandalternatives}/>
          <img src={this.state.dairy}/>
        </div>

        <Tabs>
           <TabList>
            <Tab className={this.state.breads ? 'complete' : ''}><span>Breads & Cereals</span></Tab>
            <Tab><span className={this.state.veges ? 'complete' : ''}>Veges & Salads</span></Tab>
            <Tab><span className={this.state.fruits ? 'complete' : ''} >Fruits</span></Tab>
            <Tab><span className={this.state.meats ? 'complete' : ''}>Meats & Alternatives</span></Tab>
            <Tab><span className={this.state.dairy ? 'complete' : ''}>Dairy</span></Tab>
            <Tab><span className={this.state.water ? 'complete' : ''}>Water</span></Tab>
           </TabList>
           <TabPanel>
            <div>
              <h2>Breads & Cereals</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in lectus eu dui sollicitudin pellentesque. Morbi sed lacinia magna. Cras metus nisl, scelerisque eu aliquam quis, accumsan quis neque. Vestibulum et vestibulum eros. Etiam mollis enim eget velit tempus imperdiet. Maecenas ullamcorper risus et massa dictum, in imperdiet nunc luctus. Nam varius ac tellus feugiat egestas. Nulla ornare, elit et commodo suscipit, sapien lectus ornare massa, eu cursus lacus sapien in orci.</p>
            </div>
            <div className="flex-grid">
            {
              this.state.foods.breads.map(item => {
                return (
                  <div key={item.id} className="col col-xs-4">
                    <div key={item.id} onClick={this.openModal.bind(this, item)}>
                      <img src={item.image} />
                      <h2>{item.title}</h2>
                    </div>
                  </div>
                )
              })
            }
            </div>
           </TabPanel>
           <TabPanel>
             <div>
               <h2>Veges & Salads</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in lectus eu dui sollicitudin pellentesque. Morbi sed lacinia magna. Cras metus nisl, scelerisque eu aliquam quis, accumsan quis neque. Vestibulum et vestibulum eros. Etiam mollis enim eget velit tempus imperdiet. Maecenas ullamcorper risus et massa dictum, in imperdiet nunc luctus. Nam varius ac tellus feugiat egestas. Nulla ornare, elit et commodo suscipit, sapien lectus ornare massa, eu cursus lacus sapien in orci.</p>
             </div>
             <div className="flex-grid">
             {
               this.state.foods.veges.map(item => {
                 return (
                   <div key={item.id} className="col col-xs-4">
                     <div key={item.id} onClick={this.openModal.bind(this, item)}>
                       <img src={item.image} />
                       <h2>{item.title}</h2>
                     </div>
                   </div>
                 )
               })
             }
             </div>
           </TabPanel>
           <TabPanel>
             <div>
               <h2>Fruits</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in lectus eu dui sollicitudin pellentesque. Morbi sed lacinia magna. Cras metus nisl, scelerisque eu aliquam quis, accumsan quis neque. Vestibulum et vestibulum eros. Etiam mollis enim eget velit tempus imperdiet. Maecenas ullamcorper risus et massa dictum, in imperdiet nunc luctus. Nam varius ac tellus feugiat egestas. Nulla ornare, elit et commodo suscipit, sapien lectus ornare massa, eu cursus lacus sapien in orci.</p>
             </div>
             <div className="flex-grid">
             {
               this.state.foods.fruits.map(item => {
                 return (
                   <div key={item.id} className="col col-xs-4">
                     <div key={item.id} onClick={this.openModal.bind(this, item)}>
                       <img src={item.image} />
                       <h2>{item.title}</h2>
                     </div>
                   </div>
                 )
               })
             }
             </div>
           </TabPanel>
           <TabPanel>
             <div className="flex-grid">
             {
               this.state.foods.meatsandalternatives.map(item => {
                 return (
                   <div key={item.id} className="col col-xs-4">
                     <div key={item.id} onClick={this.openModal.bind(this, item)}>
                       <img src={item.image} />
                       <h2>{item.title}</h2>
                     </div>
                   </div>
                 )
               })
             }
             </div>
           </TabPanel>
           <TabPanel>
           <div className="flex-grid">
           {
             this.state.foods.dairy.map(item => {
               return (
                 <div key={item.id} className="col col-xs-4">
                   <div key={item.id} onClick={this.openModal.bind(this, item)}>
                     <img src={item.image} />
                     <h2>{item.title}</h2>
                   </div>
                 </div>
               )
             })
           }
           </div>
           </TabPanel>
           <TabPanel>6</TabPanel>
        </Tabs>

        { this.state.modalData && <ModalWindow open={this.state.open} data={this.state.modalData} close={this.hideModal.bind(this)} add={this.addToLunchbox.bind(this)} remove={this.removeFromLunchbox.bind(this)}  state={this.state}/> }
      </div>
    )
  }
}
