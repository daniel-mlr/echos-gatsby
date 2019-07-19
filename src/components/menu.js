import React, { Component } from 'react'
import { Link } from 'gatsby'
import menuStyles from './menu.module.scss'
import { FaBars } from 'react-icons/fa'
import PropTypes from 'prop-types'

class Menu extends Component {
  
  state = {
    hidden: false,
    isOpen: false,
    position: 0
  }  

  handleOnClick = () => {
    this.state.isOpen
      ? this.setState(state => ({ ...state, isOpen: false }))
      : this.setState(state => ({ ...state, isOpen: true }))
  }

  render(){
    
    const menuClassNames = this.state.isOpen 
      ? `${menuStyles.topnav} ${menuStyles.responsive}`
      : menuStyles.topnav 
    
    return (
      <div className={menuClassNames}>
        {this.props.links.map(link => {
          return (
            <Link
              to={link.href}
              key={link.id}
              activeClassName={menuStyles.active}
            >{link.text}</Link>
          )})
        }
        <a href="javascript:void(0);" className={menuStyles.bars} onClick={this.handleOnClick}>
          <FaBars size={40} />
        </a>
      </div>
    )
  }
}
Menu.propTypes = {
  links: PropTypes.array.isRequired
}

export default Menu