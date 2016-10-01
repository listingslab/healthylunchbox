import React from 'react'
import Hero from '../Hero'
import Card from '../Card'

export default () => {
  return (
    <div>
      <div className="row hero">
        <div className="container">
          <Hero />
        </div>
      </div>
      <div className="row">
        <div className="container">
          <Card
            title="Tips"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut purus dolor. Nam metus sapien, vehicula aliquet interdum sit amet, sodales sed purus. Donec vitae euismod lacus. Etiam porttitor bibendum lorem eu luctus."
            link="/information/tips"
            label="More" />

          <Card
            title="Get Inspired"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut purus dolor. Nam metus sapien, vehicula aliquet interdum sit amet, sodales sed purus. Donec vitae euismod lacus. Etiam porttitor bibendum lorem eu luctus."
            link="/information/inspiration"
            label="Start with this"/>
        </div>
    </div>
    </div>
  )
}
