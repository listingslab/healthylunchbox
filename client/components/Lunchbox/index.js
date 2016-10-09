import React, { Component } from 'react'
import { render } from 'react-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ModalWindow from '../Modal'

export default class Lunchbox extends Component {
  constructor() {
    super()
    this.state = {
      dairy: '',
      breads: [
        {
          id: 0,
          image: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
          title: 'Healthy Foodz',
          modal: {
            title: 'Test',
            content: 'Contet contet content content content content content content',
            image: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
            group: 'dairy'
          }
        },
        {
          id: 1,
          image: 'http://cookdiary.net/wp-content/uploads/images/Sandwiches_9301.jpg',
          title: 'Healthy Foodz 23',
          modal: {
            title: 'Test 2',
            content: 'Contet contet content content content content content content',
            image: 'http://cookdiary.net/wp-content/uploads/images/Sandwiches_9301.jpg'
          }
        },
        {
          id: 2,
          image: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Sandwiches-Pictures.jpg',
          title: 'Healthy Foodz 1 1 1',
          modal: {
            title: 'Test 3 ',
            content: 'Contet contet content content content content content content',
            image: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Sandwiches-Pictures.jpg'
          }
        },
        {
          id: 3,
          image: 'https://s3.amazonaws.com/cos-cdn2/McAlisters/Images+for+menu+7.24/McAlisters-Product-Images_HOT-SANDWICHES_Turkey-Melt.png',
          title: 'Healthy Foodz 2323',
          modal: {
            title: 'Test 4',
            content: 'Contet contet content content content content content content',
            image: 'https://s3.amazonaws.com/cos-cdn2/McAlisters/Images+for+menu+7.24/McAlisters-Product-Images_HOT-SANDWICHES_Turkey-Melt.png'
          }
        },
        {
          id: 4,
          image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg',
          title: 'Health foodz',
          modal: {
            title: 'Test 5',
            content: 'Contet contet content content content content content content',
            image: 'http://i.dailymail.co.uk/i/pix/2010/04/23/article-1268371-09465B34000005DC-929_468x332.jpg'
          }
        }
        ]
      }
  }

  openModal(item) {
    this.setState({open: true, modalData: item.modal})
  }

  hideModal() {
    this.setState({open: false})
  }

  render() {
    const lunchbox = this.state.lunchbox

    return (
      <div className="container">
        <div className="lunchbox">
          <img src={this.state.dairy}/>
          <img src=""/>
          <img src=""/>
          <img src=""/>
          <img src=""/>
        </div>

        <Tabs selectedIndex={0}>
           <TabList>
            <Tab><span className={this.state.breads ? 'complete' : ''}>Breads & Cereals</span></Tab>
            <Tab><span className={this.state.veges ? 'complete' : ''}>Veges & Salads</span></Tab>
            <Tab><span className={this.state.fruit ? 'complete' : ''} >Fruits</span></Tab>
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
              this.state.breads.map(item => {
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
           <TabPanel>2</TabPanel>
           <TabPanel>3</TabPanel>
           <TabPanel>4</TabPanel>
           <TabPanel>5</TabPanel>
           <TabPanel>6</TabPanel>
        </Tabs>

        { this.state.modalData && <ModalWindow open={this.state.open} data={this.state.modalData} state={this.hideModal.bind(this)} addItem={this.updateLunchbox} /> }
      </div>
    )
  }
}
