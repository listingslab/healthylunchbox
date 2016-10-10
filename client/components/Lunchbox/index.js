import React, { Component } from 'react'
import { render } from 'react-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ModalWindow from '../Modal'
import { WP_POSTS } from '../../constants'
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
        breads: '',
        dairy: '',
        fruits: '',
        vegies: '',
        meatsandalternatives: ''
      }
    }
  }

  filterPosts() {
    const postData = JSON.parse(sessionStorage.getItem('posts'))
    const breads = postData.filter(post => post.acf.food_group === 'breads')
    const vegies = postData.filter(post => post.acf.food_group === 'vegies')
    const fruits = postData.filter(post => post.acf.food_group === 'fruits')
    const dairy = postData.filter(post => post.acf.food_group === 'dairy')
    const meatsandalternatives = postData.filter(post => post.acf.food_group === 'meatsandalternatives')

    this.state.foods = {
      breads: breads,
      vegies: vegies,
      fruits: fruits,
      dairy: dairy,
      meatsandalternatives: meatsandalternatives
    }
  }

  componentWillMount() {
    const getPosts = sessionStorage.getItem('posts')

    if(!getPosts) {
      RequestManager.get(WP_POSTS).then(payload => {
        sessionStorage.setItem('posts', JSON.stringify(payload))
      })

      this.filterPosts()
    }

    if(getPosts) {
      this.filterPosts()
    }
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
        <div className="lunchbox">
          <img src={this.state.breads}/>
          <img src={this.state.vegies}/>
          <img src={this.state.fruits}/>
          <img src={this.state.meatsandalternatives}/>
          <img src={this.state.dairy}/>
        </div>

        <Tabs>
           <TabList>
            <Tab className={this.state.breads ? 'complete' : ''}><span>Breads & Cereals</span></Tab>
            <Tab><span className={this.state.vegies ? 'complete' : ''}>Veges & Salads</span></Tab>
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
              this.state.foods.breads && this.state.foods.breads.map(item => {
                return (
                  <div key={item.id} className="col col-xs-4">
                    <div key={item.id} onClick={this.openModal.bind(this, item)}>
                      <img src={item.acf.food_image} />
                      <h2>{item.title.rendered}</h2>
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
               this.state.foods.vegies.map(item => {
                 return (
                   <div key={item.id} className="col col-xs-4">
                     <div key={item.id} onClick={this.openModal.bind(this, item)}>
                       <img src={item.acf.food_image} />
                       <h2>{item.title.rendered}</h2>
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
                       <img src={item.acf.food_image} />
                       <h2>{item.title.rendered}</h2>
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
                       <img src={item.acf.food_image} />
                       <h2>{item.title.rendered}</h2>
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
                     <img src={item.acf.food_image} />
                     <h2>{item.title.rendered}</h2>
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
