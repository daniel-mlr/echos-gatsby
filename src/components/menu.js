import React, { Component } from 'react'
import { Link } from 'gatsby'
import menuStyles from './menu.module.scss'
import { FaBars } from 'react-icons/fa';

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
    
    const menuClassName = this.state.isOpen 
      ? `${menuStyles.topnav} ${menuStyles.responsive}`
      : menuStyles.topnav 
    
    return (
      <div className={menuClassName}>

        <Link className={menuStyles.title} to="/">
          <img
            className={menuStyles.logo}
            src='https://res.cloudinary.com/danielmeilleurimg/image/upload/v1560419215/echos/Les-Echos-du-Pacifique_logo_alpha.png'
            alt='logo
            '/>
        </Link>
   
      {this.props.links.map(link => {
        return (
          <Link to={link.href} key={link.id} activeClassName={menuStyles.active} >{link.text}</Link>
        )
      })}
      <a href="javascript:void(0);" className={menuStyles.bars} onClick={this.handleOnClick}>
        <FaBars size={40} />
      </a>
      </div>
      )
  }
}

export default Menu
