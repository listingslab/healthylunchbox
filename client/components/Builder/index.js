import React, { Component } from 'react'
import { render } from 'react-dom'
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
      }
    }
  }

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

  render() {
    return (
      <div className="container">

        <Lunchbox
          breads={this.state.breads}
          vegies={this.state.vegies}
          fruits={this.state.fruits}
          meatsandalternatives={this.state.meatsandalternatives}
          dairy={this.state.dairy} />

        <Tabs>
           <TabList>
            <Tab className={this.state.breads ? 'complete' : ''}><span>Breads & Cereals</span></Tab>
            <Tab className={this.state.vegies ? 'complete' : ''}><span>Veges & Salads</span></Tab>
            <Tab className={this.state.fruits ? 'complete' : ''}><span>Fruits</span></Tab>
            <Tab className={this.state.meats ? 'complete' : ''}><span>Meats & Alternatives</span></Tab>
            <Tab className={this.state.dairy ? 'complete' : ''}><span>Dairy</span></Tab>
            <Tab className={this.state.water ? 'complete' : ''}><span>Water</span></Tab>
           </TabList>
           <TabPanel>
            <div>
              <h2>Breads & Cereals</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in lectus eu dui sollicitudin pellentesque. Morbi sed lacinia magna. Cras metus nisl, scelerisque eu aliquam quis, accumsan quis neque. Vestibulum et vestibulum eros. Etiam mollis enim eget velit tempus imperdiet. Maecenas ullamcorper risus et massa dictum, in imperdiet nunc luctus. Nam varius ac tellus feugiat egestas. Nulla ornare, elit et commodo suscipit, sapien lectus ornare massa, eu cursus lacus sapien in orci.</p>
            </div>
            <div className="s-grid-top s-grid-sm-12 s-grid-md-6 s-grid-lg-4">
            {
              this.state.foods.breads && this.state.foods.breads.map(item => {
                return (
                  <FoodItem key={item.id} data={item} onClick={this.openModal.bind(this, item)}/>
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
             <div className="s-grid-top s-grid-sm-12 s-grid-md-6 s-grid-lg-4">
             {
              this.state.foods.vegies.map(item => {
                 return (
                    <FoodItem key={item.id} data={item} onClick={this.openModal.bind(this, item)}/>
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
             <div className="s-grid-top s-grid-sm-12 s-grid-md-6 s-grid-lg-4">
             {
               this.state.foods.fruits.map(item => {
                 return (
                   <FoodItem key={item.id} data={item} onClick={this.openModal.bind(this, item)}/>
                 )
               })
             }
             </div>
           </TabPanel>
           <TabPanel>
             <div className="s-grid-top s-grid-sm-12 s-grid-md-6 s-grid-lg-4">
             {
               this.state.foods.meatsandalternatives.map(item => {
                 return (
                   <FoodItem key={item.id} data={item} onClick={this.openModal.bind(this, item)}/>
                 )
               })
             }
             </div>
           </TabPanel>
           <TabPanel>
           <div className="s-grid-top s-grid-sm-12 s-grid-md-6 s-grid-lg-4">
           {
             this.state.foods.dairy.map(item => {
               return (
                 <FoodItem key={item.id} data={item} onClick={this.openModal.bind(this, item)}/>
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
