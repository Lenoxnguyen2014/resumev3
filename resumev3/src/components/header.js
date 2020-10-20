import { Link, Img } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Grid, Box, Flex } from 'theme-ui'
import Logo from "../images/logo.png"
import Search_logo from "../images/search_logo.png"
function Header ({ menuLinks,siteTitle }) {
  console.log(menuLinks)
  return(
  <header
    style={{
      background: `#fdd021`,
    }}
  >
 <Flex>
      <Link to="/">
      <img src={Logo}  alt="Logo" style={{width:"40px", height:"auto", margin:"5px"}}/>
      </Link>
      <Box sx={{ flex: '1 1 auto' }} style={{display:"flex"}} >
      {menuLinks.map(link => (
                <p key={link.name} style={{margin: "5px"}}>
                  <Link to={link.Link} style={{color: "#bb2205"}}>
                    {link.name}
                  </Link>
                </p>
              ))}
       <Link style={{color: "#bb2205", margin: "5px"}} href="mailto:lenoxnguyen2014@gmail.com">hire me</Link>
      </Box>
      <Box>
      <Link to="/">
      <img src={Search_logo}  alt="Logo" style={{width:"40px", height:"auto", margin:"5px"}}/>
      </Link>      </Box>
    </Flex>
  </header>
  )
            }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
