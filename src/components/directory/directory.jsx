import React, { Component } from 'react';

import './directory.scss';

import MenuItem from '../menu-item/menu-item';


export default class directory extends Component {

    constructor() {
        super()

        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'http://www.kevcoghlan.com/images/back/cool%20mens%20hats-021evr.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'http://assets.dmagstatic.com/wp-content/uploads/2010/11/LilliLondon-leatherjackets.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://static1.fashionbeans.com/wp-content/uploads/2019/12/19winterstyleguidemains2.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
            }    
    } 

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(
                    ({title, id, imageUrl, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                )
                )}
            </div>
        )
    }
}
