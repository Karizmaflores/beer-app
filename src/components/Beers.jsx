import React, { Component } from 'react'
import Beer  from './Beer';

export default class Beers extends Component {
    constructor() {
        super()
    
        this.state = {
          items: [],
        }
      }

      
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers").then((res) => {
      return res.json();
    }).then(data => {
      // console.log(data);
      this.setState({
        items: data,
      });
    });
  }

  render() {
    return (
        <ul className='items'>
        {
          this.state.items.map((item) => {
            return <Beer name={item.name} image={item.image_url} />;   
          })
          
        
        }
        </ul>
    )
  }
}
