import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { SearchIcon } from "../icons/searchIcon";
import { useState } from "react";

const Search = ({fetchWeather}) => {

  const [searchCity, setSearchCity] = useState('');

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: '24px'
      }}
    >
      <Box sx={{ display: "flex", width: '100%' }}>
        <TextField
          sx={{ width: "100%" }}
          label="Enter your location and search"
          autoComplete="off"
          value={searchCity}
          onChange={(e) => {setSearchCity(e.target.value)}}
        />
        <Button
          sx={{
            backgroundColor: "white",
            boxShadow: "none",
            borderRadius: '18px',
            ml: '12px',
            "&:hover": { backgroundColor: "white", borderRadius: '18px' },
          }}
          variant="contained"
          onClick={() => {if(searchCity){fetchWeather(searchCity)}}}
        >
          <SearchIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Search;
