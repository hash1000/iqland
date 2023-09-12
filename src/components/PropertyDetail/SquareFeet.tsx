import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Box, TextField, InputAdornment } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Square = ["0-1000", "1001-2000", "2001-3000", "3001-4000", "4001-5000"];

const SquareFeet = ({
  formData,
  onChange,
}: {
  formData: any;
  onChange: any;
}) => {
  const [showSquareFeet, setShowSquareFeet] = useState<boolean>(false);
  const selectRef = useRef<HTMLInputElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setShowSquareFeet(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl sx={{ width: "100%", mt: 3,}}>
      <TextField
          placeholder="Select your desired sq.ft"
          onFocus={() => setShowSquareFeet(true)}
          value={formData}
          inputProps={{ ref: selectRef}}
          InputProps={{
            endAdornment: showSquareFeet ? (
              <InputAdornment position="end">
                <ArrowDropUpIcon sx={{color:"#29781D"}} onClick={() => setShowSquareFeet(false)}/>
              </InputAdornment>
            ) : (
              <InputAdornment position="end" >
                <ArrowDropDownIcon sx={{color:"#29781D"}} onClick={() => setShowSquareFeet(true)}/>
              </InputAdornment>
            ),
            sx: {
              borderRadius: "8px",
              backgroundColor: "white",
              color:"#29781D",
              border:"none",
              ".MuiOutlinedInput-notchedOutline": {
                border: "none !important"
              }
            },
          }}
        />
        <Box sx={{ bgcolor: "white", mt: 1, borderRadius: "8px" }}>
          {showSquareFeet &&
            Square.map((name, index) => (
              <MenuItem
                key={name}
                value={name}
                style={{
                  borderBottom:
                    index !== Square.length - 1 ? "1px solid #DAE6E1" : "none",
                }}
                onClick={() => onChange(name)}
                sx={{ color: "#29781D",pt:2 }}
              >
                {name}
              </MenuItem>
            ))}
        </Box>
      </FormControl>
    </Box>
  );
};

export default SquareFeet;
