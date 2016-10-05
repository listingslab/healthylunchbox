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
    const getTabs = sessionStorage.getItem('tabs')

    if(!getTabs) {
      RequestManager.get(WP_TABS).then(payload => {
        sessionStorage.setItem('tabs', JSON.stringify(payload))
        this.setState({tabs: payload})
      })
    }

    if(getTabs) {
      const tabs = JSON.parse(getTabs)
      this.setState({tabs: tabs})
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
