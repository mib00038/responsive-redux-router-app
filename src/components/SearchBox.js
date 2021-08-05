import React from "react"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from "@material-ui/icons/Search"

const SearchBox =  ({ className= '' }) => (
  <span className={className}>
    <TextField
      variant="outlined"
      classes={{root: 'h-100'}}
      InputProps={{
        classes:{ root: 'h-100'},
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  </span>
)

export default SearchBox