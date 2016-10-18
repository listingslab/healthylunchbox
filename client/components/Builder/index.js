import React, { Component } from 'react'
import { render } from 'react-dom'
import update from 'react-addons-update'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { WP_POSTS } from '../../constants'
import RequestManager from '../../services/request-manager'

import Lunchbox from '../Lunchbox'
import ModalWindow from '../Modal'
import FoodItem from '../FoodItem'

export default class Builder extends Component {
  constructor() {
    super()
    this.state = {
      breads: sessionStorage.getItem('breads'),
      vegies: sessionStorage.getItem('vegies'),
      fruits: sessionStorage.getItem('fruits'),
      meatsandalternatives: sessionStorage.getItem('meatsandalternatives'),
      dairy: sessionStorage.getItem('dairy'),
      foods: {
        breads: [],
        vegies: [],
        fruits: [],
        meatsandalternatives: [],
        dairy: []
      },
      hidden: {
        breads: false,
        vegies: false,
        fruits: false,
        meatsandalternatives: false,
        dairy: false,
      }

    }
  }

  // MOVE INTO WORDPRESS SERVICE
  componentDidMount() {
    const postData = sessionStorage.getItem('posts')

    if(!postData) {
      RequestManager.get(WP_POSTS).then(payload => {
        sessionStorage.setItem('posts', JSON.stringify(payload))
        this.filterPosts()
      })
    }

    if(postData) {
      this.filterPosts()
    }

  }

  filterPosts() {
      const postData = sessionStorage.getItem('posts')
      const parsedData = JSON.parse(postData)
      const breads = parsedData.filter(post => post.acf.food_group === 'breads')
      const vegies = parsedData.filter(post => post.acf.food_group === 'vegies')
      const fruits = parsedData.filter(post => post.acf.food_group === 'fruits')
      const dairy = parsedData.filter(post => post.acf.food_group === 'dairy')
      const meatsandalternatives = parsedData.filter(post => post.acf.food_group === 'meatsandalternatives')

      this.setState({foods: {
        breads: breads,
        vegies: vegies,
        fruits: fruits,
        dairy: dairy,
        meatsandalternatives: meatsandalternatives
      }})
  }

  openModal(item) {
    this.setState({open: true, modalData: [item]})
  }

  hideModal() {
    this.setState({open: false})
  }

  addToLunchbox() {
    const modal = this.state.modalData[0]
    const group = modal.acf.food_group
    const image = modal.acf.food_image
    this.setState({[group]: image})
    sessionStorage.setItem(group, image)
  }

  removeFromLunchbox() {
    const modal = this.state.modalData[0]
    const group = modal.acf.food_group
    this.setState({[group]: ''})
    sessionStorage.removeItem(group)
  }

  handleClick(group) {

    let hidden = update(this.state.hidden, {
       [group]: {$set: !this.state.hidden[group]}
    });

    this.setState({hidden: hidden});
  }

  render() {
    return (
      <div>
      <div className="row alt">
          <Lunchbox
            breads={this.state.breads}
            vegies={this.state.vegies}
            fruits={this.state.fruits}
            meatsandalternatives={this.state.meatsandalternatives}
            dairy={this.state.dairy} />
      </div>

      <div className="row">
        <Tabs>
           <TabList>
            <Tab className={this.state.breads ? 'breads complete' : 'breads'}><span className="icon icon_breads"></span> <b>Breads & Cereals</b></Tab>
            <Tab className={this.state.vegies ? 'vegies complete' : 'vegies'}><span className="icon icon_vegies"></span> <b>Veges & Salads</b></Tab>
            <Tab className={this.state.fruits ? 'fruits complete' : 'fruits'}><span className="icon icon_fruits"></span> <b> Fruits</b></Tab>
            <Tab className={this.state.meats ? 'meats complete' : 'meats'}><span className="icon icon_meats"></span> <b>Meats & Alternatives</b></Tab>
            <Tab className={this.state.dairy ? 'dairy complete' : 'dairy'}><span className="icon icon_dairy"></span> <b>Dairy</b></Tab>
           </TabList>
           <TabPanel>
            <div>
              <h2>Breads & Cereals</h2>
              <p className={this.state.hidden.breads ? 'hidden' : ''}>Eating grain (cereal) foods, mostly wholegrain, can help protect us against heart disease Type 2 diabetes and excessive weight gain and may help reduce risk of some cancers. Wholemeal or wholegrain varieties are preferable because they provide more dietary fibre, vitamins and minerals than refined grain (cereal) foods.</p>

              <button onClick={this.handleClick.bind(this, 'breads')}>{this.state.hidden.breads ? 'Read more about this food group' : 'Hide information about this food group'}</button>
            </div>
            <div className="s-grid-top s-grid-xs-12 s-grid-sm-6 s-grid-md-4">
            {
              this.state.foods.breads && this.state.foods.breads.map(item => {
                return <FoodItem key={item.id} data={item} onClick={this.openModal.bind(this, item)}/>
              })
            }
            </div>
           </TabPanel>
           <TabPanel>
             <div>
               <h2>Veges & Salads</h2>
               <p className={this.state.hidden.vegies ? 'hidden' : ''}>Eating enough fruit and vegetables is essential to achieving this because they are low in energy and high in fibre, so they help to fill you up without providing too many kilojoules. Fruit and veg also contain vital vitamins and minerals, meaning they are one of the most important features of a healthy diet.</p>
               <button onClick={this.handleClick.bind(this, 'vegies')}>{this.state.hidden.vegies ? 'Read more about this food group' : 'Hide information about this food group'}</button>
             </div>

             <div className="s-grid-top s-grid-xs-12 s-grid-sm-6 s-grid-md-4">
             {
              this.state.foods.vegies.map(item => {
                 return <FoodItem key={item.id} data={item} onClick={this.openModal.bind(this, item)}/>
               })
             }
             </div>
           </TabPanel>
           <TabPanel>
             <div>
               <h2>Fruits</h2>
               <p className={this.state.hidden.fruits ? 'hidden' : ''}>Eating enough fruit and vegetables is essential to achieving this because they are low in energy and high in fibre, so they help to fill you up without providing too many kilojoules. Fruit and veg also contain vital vitamins and minerals, meaning they are one of the most important features of a healthy diet.</p>
               <button onClick={this.handleClick.bind(this, 'fruits')}>{this.state.hidden.fruits ? 'Read more about this food group' : 'Hide information about this food group'}</button>
             </div>
             <div className="s-grid-top s-grid-xs-12 s-grid-sm-6 s-grid-md-4">
             {
               this.state.foods.fruits.map(item => {
                 return <FoodItem key={item.id} data={item} onClick={this.openModal.bind(this, item)}/>
               })
             }
             </div>
           </TabPanel>
           <TabPanel>
             <div>
               <h2>Meats & Alternatives</h2>
               <p className={this.state.hidden.meatsandalternatives ? 'hidden' : ''}>Eating a variety of foods from the group containing lean meats and poultry, fish, eggs, nuts and seeds, and legumes/beans provides many nutrients, including protein, iron, zinc and other minerals and vitamins, particularly those of the vitamin B group. Vitamin B12 is found mainly in animal-based products. Alternatives to animal foods include nuts, seeds, legumes, beans and tofu. For all Australians, these foods increase dietary variety and can provide a valuable, affordable source of protein and other nutrients found in meats. Lean red meat is high in iron and can be an important food, especially for some groups including infants, children, women (particularly when pregnant) and athletes. However regular consumption of larger quantities of red meat may be associated with increased risk of colorectal cancer. Cancer Council recommends eating no more than 700g (raw weight) of red meat per week. Processed meats such as salami, bacon, and ham are not part of this food group. They are classified as discretionary choices because they are high in saturated fat and/or salt. Consuming processed meat may be associated with an increased risk of colorectal cancer. Cutting down on red and processed meats will reduce your cancer risk.</p>
               <button onClick={this.handleClick.bind(this, 'meatsandalternatives')}>{this.state.hidden.meatsandalternatives ? 'Read more about this food group' : 'Hide information about this food group'}</button>
             </div>
             <div className="s-grid-top s-grid-xs-12 s-grid-sm-6 s-grid-md-4">
             {
               this.state.foods.meatsandalternatives.map(item => {
                 return <FoodItem key={item.id} data={item} onClick={this.openModal.bind(this, item)}/>
               })
             }
             </div>
           </TabPanel>
           <TabPanel>
           <div>
             <h2>Dairy</h2>
             <p className={this.state.hidden.dairy ? 'hidden' : ''}>Milk, yoghurt and cheese are rich sources of calcium and other minerals, protein, and vitamins, including B12. Consumption of milk, yoghurt and cheese can protect us against heart disease and stroke, can reduce our risk of high blood pressure and some cancers, may reduce our risk of Type 2 diabetes and may contribute to stronger bones. The Department of Health recommends that the best choices for most people over the age of 2, are the reduced fat varieties, to reduce saturated fat and kilojoule content in the diet. However, this is a personal preference and the most important thing is that children are having calcium rich foods. For those who prefer to avoid dairy products, choose alternative products that have added calcium, such as calcium-enriched soy or rice drinks.</p>
             <button onClick={this.handleClick.bind(this, 'dairy')}>{this.state.hidden.dairy ? 'Read more about this food group' : 'Hide information about this food group'}</button>
           </div>
           <div className="s-grid-top s-grid-xs-12 s-grid-sm-6 s-grid-md-4">
           {
             this.state.foods.dairy.map(item => {
               return <FoodItem key={item.id} data={item} onClick={this.openModal.bind(this, item)}/>
             })
           }
           </div>
           </TabPanel>
        </Tabs>

        { this.state.modalData && <ModalWindow open={this.state.open} data={this.state.modalData} close={this.hideModal.bind(this)} add={this.addToLunchbox.bind(this)} remove={this.removeFromLunchbox.bind(this)}  state={this.state}/> }

        </div>
      </div>
    )
  }
}
