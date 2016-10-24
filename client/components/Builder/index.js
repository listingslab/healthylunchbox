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
        breads: true,
        vegies: true,
        fruits: true,
        meatsandalternatives: true,
        dairy: true,
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
            <Tab className={this.state.vegies ? 'vegies complete' : 'vegies'}><span className="icon icon_vegies"></span> <b>Vegies & Salads</b></Tab>
            <Tab className={this.state.fruits ? 'fruits complete' : 'fruits'}><span className="icon icon_fruits"></span> <b> Fruits</b></Tab>
            <Tab className={this.state.meatsandalternatives ? 'meats complete' : 'meats'}><span className="icon icon_meats"></span> <b>Meats & Alternatives</b></Tab>
            <Tab className={this.state.dairy ? 'dairy complete' : 'dairy'}><span className="icon icon_dairy"></span> <b>Dairy</b></Tab>
           </TabList>

           <TabPanel>
            <div>
              <h2>Breads & Cereals</h2>
              <p>Packed with dietary fibre, vitamins and minerals, wholegrain breads and cereals boost health and fight disease.</p>
              <div className={this.state.hidden.breads ? 'hidden' : ''}>
                <p>These foods are rich in carbohydrate which is the bodies preferred source of energy – perfect for kids to play and learn all day.</p>

                <h3>What is a serve?</h3>
                <p>1 slice bread, 1/2 medium roll or flat bread, 1/2 cup cooked rice, pasta or noodles, 3 (35g) crispbreads.</p>
              </div>
              <button onClick={this.handleClick.bind(this, 'breads')}>{this.state.hidden.breads ? 'Read more about this food group' : 'Hide info about this food group'}</button>
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
               <h2>Vegies & Salads</h2>
               <p>Eating vegies and salads helps maintain a healthy weight and can help to prevent cancer.</p>
               <div className={this.state.hidden.vegies ? 'hidden' : ''}>
                <p>Vegetables and salads are low in energy and high in fibre, so they help fill you up without providing too many kilojoules. Plus they’re packed full of vital vitamins and minerals, perfect for growing bodies</p> <p>Vegetables are one of the most important features of a healthy diet, however only 6% of adults in NSW are eating enough vegetables and so it’s not surprising that children are not eating enough either. There are heaps of exciting ways to pack vegies and salads in the lunch box. In 13 years of school children eat more than 2,500 school lunches. That’s 2,500 opportunities to east vegetables!</p>
                <h3>What is a serve?</h3>
                <p>75g or 1/2 cup of cooked veg or legumes or 1/2 medium potato or 1 cup salad</p>
              </div>

               <button onClick={this.handleClick.bind(this, 'vegies')}>{this.state.hidden.vegies ? 'Read more about this food group' : 'Hide info about this food group'}</button>
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
               <p>Eating fruit helps maintain a healthy weight and can help to prevent cancer.</p>

               <div className={this.state.hidden.fruits ? 'hidden' : ''}>
                <p>Fruit is low in energy and high in fibre, so it helps fill you up without providing too many kilojoules. Plus they’re packed full of vital vitamins and minerals.</p>
                <p>Make fruit a snack in the lunch box every day.</p>

                <h3>What is a serve?</h3>
                <p>1 medium piece, 2 small pieces, or 1 cup chopped</p>
              </div>

              <button onClick={this.handleClick.bind(this, 'fruits')}>{this.state.hidden.fruits ? 'Read more about this food group' : 'Hide info about this food group'}</button>
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
               <p>Lean meats and poultry, fish, eggs, nuts, seeds, legumes, beans and tofu are rich in protein, iron, zinc and vitamin B12.</p>

               <div className={this.state.hidden.meatsandalternatives ? 'hidden' : ''}>
                <p>Lean red meat is high in iron and is an important part of a balanced diet, but eating large quantities of red meat regularly can increase risk of bowel cancer. Cancer Council recommends eating no more than 700g (raw weight) of red meat per week per person.</p>
                <p>Processed meats such as salami, bacon, and ham are not part of this food group. They are classified as discretionary choices because they are high in saturated fat and/or salt. Eating processed meat can increase risk of bowel and stomach cancer.</p>
                <p>Cut down on red meat and limit or avoid processed meats to reduce your cancer risk.</p>

                <h3>What is a serve?</h3>
                <p>65g cooked meat, 2 eggs, 1 small can of tuna, 30g nuts, or 1 cup of legumes</p>
               </div>

               <button onClick={this.handleClick.bind(this, 'meatsandalternatives')}>{this.state.hidden.meatsandalternatives ? 'Read more about this food group' : 'Hide info about this food group'}</button>
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

             <p>Milk, yoghurt and cheese create stronger bones and help protect against cancer and chronic disease.</p>

             <div className={this.state.hidden.dairy ? 'hidden' : ''}>
              <p>Dairy foods are rich sources of calcium and other minerals, protein, and vitamins including B12.</p>
              <p>The Department of Health recommends reduced-fat varieties for people aged 2 or more, but it’s a personal preference - the most important thing is that children are having calcium rich foods.</p>
              <p>If you choose to avoid dairy products, choose alternative products that have added calcium, such as calcium-enriched soy or rice drinks.</p>

              <h3>What is a serve?</h3>
              <p>1 cup milk, 2 slices of cheese, 200g tub of yoghurt</p>

             </div>

             <button onClick={this.handleClick.bind(this, 'dairy')}>{this.state.hidden.dairy ? 'Read more about this food group' : 'Hide info about this food group'}</button>
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
