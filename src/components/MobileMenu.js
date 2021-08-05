import React, { useEffect, useState } from "react"
import Button from "@material-ui/core/Button"
import cx from "classnames"
import ExpandMore from "@material-ui/icons/ExpandMore"
import MenuItem from "@material-ui/core/MenuItem"
import { alpha, styled } from "@material-ui/core/styles"
import Menu from "@material-ui/core/Menu"
import { useLocation, useNavigate } from "@reach/router"

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    classes={{label: 'ttn'}}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 4,
    marginTop: 0,
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiList-root': {
      padding: 0
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}))

const MobileMenu = ({ pages }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()
  const isOpen = Boolean(anchorEl)

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const handleMenuItemOnClick = (event) => {
    navigate(event.currentTarget.id)
    handleClose()
  }

  useEffect(() => {
    return () => handleClose()
  }, [])

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className='menu-button'
      >
        <span className={cx('ttn f5 b', {'black': !isOpen}, {'deep-blue': isOpen})}>Menu</span>
        <ExpandMore fontSize='large'/>
      </Button>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        open={isOpen}
        onClose={handleClose}
      >
        {pages.map((page, index) => {
          const isLast = index === pages.length - 1

          return (
            <MenuItem
              key={page}
              onClick={handleMenuItemOnClick}
              divider={!isLast}
              id={page}
              disabled={`/${page}` === location.pathname}
            >
              {page}
            </MenuItem>
          )
        })}
      </StyledMenu>
    </div>
  )
}

export default MobileMenu