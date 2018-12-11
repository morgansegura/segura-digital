import React from 'react';
import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class NavBar extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    // const { classes } = this.props;

    const sideList = (
      <div className="nav__menu">
        <List className="logoBG"></List>
        <Divider />
        <List>
            <ListItem>
              <Link className="nav__item" to="#shop" title="Internal page.">
                Locations
              </Link>
            </ListItem>
            <ListItem>                          
              <Link className="nav__item" to="#menu" title="Internal page.">
                Our Menu
              </Link>
            </ListItem>
            <ListItem>            
              <Link className="nav__item" to="#contact" title="Internal page.">
                Contact
              </Link>
            </ListItem>
            <ListItem>            
              <Link className="nav__item" to="#about" title="Internal page.">
                About Us
              </Link>  
            </ListItem>
        </List>
        <Divider />
        <List>
          <div className="social-media__block--nav">
            <a className="social-media--yelp" href="https://www.yelp.com/biz/the-brazilian-guys-san-diego?osq=the+brazilian+guys" title="Yelp">
              <span className="mdi mdi-yelp"></span>
            </a>
            <a className="social-media--instagram" href="https://www.instagram.com/thebrazilianguys/" title="Instagram">
              <span className="mdi mdi-instagram"></span>
            </a>
            <a className="social-media--facebook" href="https://www.facebook.com/thebrazilianguys/" title="Facebook">
              <span className="mdi mdi-facebook"></span>
            </a>
          </div> 
        </List>
        <List>
          <div className="t-center b6">
            <a className="btn btn--sm uppercase btn--black btn__round" href="mailto:contact@thebrazilianguys.com<" title="The Brazilian Guys | Contact Email">contact@thebrazilianguys.com</a>
          </div> 
        </List>
      </div>
    );


    return (
      <nav className="nav nav__main">
          <div className="nav__inner">      
            <Button onClick={this.toggleDrawer('right', true)}>
                <span className="mdi mdi-menu"></span>
            </Button>
            <Drawer className="nav__menu__inner" anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('right', false)}
                onKeyDown={this.toggleDrawer('right', false)}
              >
                {sideList}               
              </div>
            </Drawer>
          </div>
      </nav>      
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
