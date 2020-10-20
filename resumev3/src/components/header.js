import { Link, Img } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Grid, Box, Flex } from 'theme-ui'
import Logo from "../images/logo.png"
function Header ({ menuLinks,siteTitle }) {
  console.log(menuLinks)
  return(
  <header
    style={{
      background: `#D45B12`,

    }}
  >
 <Flex>
      <Link>
      <img src={Logo}  alt="Logo" style={{width:"40px", height:"auto"}}/>
      </Link>
      <Box sx={{ flex: '1 1 auto' }} style={{display:"flex"}} >
      {menuLinks.map(link => (
                <p key={link.name} style={{margin: "5px"}}>
                  <Link to={link.Link} className="navbar-item title is-5">
                    {link.name}
                  </Link>
                </p>
              ))}
        <p style={{margin: "5px"}}><Link to="#">hire me</Link></p>
      </Box>
      <Box>
        <p style={{margin: "5px"}}>Search</p>
      </Box>
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
