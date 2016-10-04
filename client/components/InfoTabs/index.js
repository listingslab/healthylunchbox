import React, { Component } from 'react'
import { render } from 'react-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import icon_apple from './icon_apple.png'
import icon_bread from './icon_bread.png'
import icon_carrot from './icon_carrot.png'
import icon_cheese from './icon_cheese.png'
import icon_fish from './icon_fish.png'
import icon_water from './icon_water.png'

Tabs.setUseDefaultStyles(false);

export default class InfoTabs extends Component {
  handleSelect(index, last) {
  }
  render() {
    return (
         <Tabs
           onSelect={this.handleSelect}
           selectedIndex={0}
         >
          <TabList>
             <Tab><span><img src={icon_apple}/></span></Tab>
             <Tab><span><img src={icon_carrot} /></span></Tab>
             <Tab><span><img src={icon_bread} /></span></Tab>
             <Tab><span><img src={icon_fish} /></span></Tab>
             <Tab><span><img src={icon_water} /></span></Tab>
          </TabList>

           <TabPanel>
              <h2>Hello from Fruits</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nunc quis velit auctor, et pharetra risus tincidunt. Fusce fermentum, nulla sed pellentesque eleifend, lorem ipsum pulvinar orci, sed sodales purus felis eu lorem. Etiam ac turpis sed orci hendrerit sollicitudin. Vivamus sodales elit non lacus finibus cursus. Proin eget tortor lacus. Mauris vel nunc aliquam, auctor leo sit amet, tristique neque. Phasellus nec ante volutpat lorem interdum fringilla.</p>
           </TabPanel>
           <TabPanel>
             <h2>Hello from Vegetables & Salads</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nunc quis velit auctor, et pharetra risus tincidunt. Fusce fermentum, nulla sed pellentesque eleifend, lorem ipsum pulvinar orci, sed sodales purus felis eu lorem. Etiam ac turpis sed orci hendrerit sollicitudin. Vivamus sodales elit non lacus finibus cursus. Proin eget tortor lacus. Mauris vel nunc aliquam, auctor leo sit amet, tristique neque. Phasellus nec ante volutpat lorem interdum fringilla.</p>
           </TabPanel>
           <TabPanel>
             <h2>Hello from Breads & Cereal</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nunc quis velit auctor, et pharetra risus tincidunt. Fusce fermentum, nulla sed pellentesque eleifend, lorem ipsum pulvinar orci, sed sodales purus felis eu lorem. Etiam ac turpis sed orci hendrerit sollicitudin. Vivamus sodales elit non lacus finibus cursus. Proin eget tortor lacus. Mauris vel nunc aliquam, auctor leo sit amet, tristique neque. Phasellus nec ante volutpat lorem interdum fringilla.</p>
           </TabPanel>
           <TabPanel>
             <h2>Hello from Meat & Dairy</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nunc quis velit auctor, et pharetra risus tincidunt. Fusce fermentum, nulla sed pellentesque eleifend, lorem ipsum pulvinar orci, sed sodales purus felis eu lorem. Etiam ac turpis sed orci hendrerit sollicitudin. Vivamus sodales elit non lacus finibus cursus. Proin eget tortor lacus. Mauris vel nunc aliquam, auctor leo sit amet, tristique neque. Phasellus nec ante volutpat lorem interdum fringilla.</p>
           </TabPanel>
           <TabPanel>
             <h2>Hello from Water</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nunc quis velit auctor, et pharetra risus tincidunt. Fusce fermentum, nulla sed pellentesque eleifend, lorem ipsum pulvinar orci, sed sodales purus felis eu lorem. Etiam ac turpis sed orci hendrerit sollicitudin. Vivamus sodales elit non lacus finibus cursus. Proin eget tortor lacus. Mauris vel nunc aliquam, auctor leo sit amet, tristique neque. Phasellus nec ante volutpat lorem interdum fringilla.</p>
           </TabPanel>
       </Tabs>
    )
  }
}
