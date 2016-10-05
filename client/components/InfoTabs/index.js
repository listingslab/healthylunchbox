import React, { Component } from 'react'
import { render } from 'react-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { WP_TABS } from '../../constants'
import get from 'lodash.get'
import he from 'he'
import RequestManager from '../../services/request-manager'

Tabs.setUseDefaultStyles(false);

export default class InfoTabs extends Component {
  constructor() {
    super()
    this.state = {
      tabs: []
    }
  }

  componentWillMount() {
    const tabs = sessionStorage.getItem('tabs')

    if(!tabs) {
      RequestManager.get(WP_TABS).then(payload => {
        console.log(payload)
        sessionStorage.setItem('tabs', JSON.stringify(payload))
        this.setState({tabs: payload})
      })
    }

    if(tabs) {
      const parsedTabs = JSON.parse(tabs)
      this.setState({tabs: parsedTabs})
    }
  }

  buildTabs() {
    return this.state.tabs.map(tabs => <Tab key={tabs.id}><span><img src={get(tabs, 'acf.tab_icon')} /></span></Tab>)
  }

  buildPanels() {
    return this.state.tabs.map(tabpanel => <TabPanel key={tabpanel.id}>
                                              { get(tabpanel, 'acf.tab_image') ? <img src={get(tabpanel, 'acf.tab_image')} /> : "" }
                                              <h2>{he.decode(get(tabpanel, 'title.rendered'))}</h2>
                                              <div dangerouslySetInnerHTML={{__html: get(tabpanel, 'content.rendered')}}></div>
                                            </TabPanel>)
  }

  render() {
    return (
       <Tabs selectedIndex={0}>
          <TabList>{this.buildTabs()}</TabList>
          {this.buildPanels()}
       </Tabs>
    )
  }
}
