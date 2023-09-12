import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Box, TextField, InputAdornment } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Garages = ["1 Car", "2 Car", "3 Car"];
const Garage = ({
  formData,
  onChange,
}: {
  formData: any;
  onChange: any;
}) => {
  const [showGarage, setShowGarage] = useState<boolean>(false);
  const selectRef = useRef<HTMLInputElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setShowGarage(false);
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
          placeholder="Number of Garage"
          onFocus={() => setShowGarage(true)}
          value={formData}
          inputProps={{ ref: selectRef}}
          InputProps={{
            endAdornment: showGarage ? (
              <InputAdornment position="end">
                <ArrowDropUpIcon sx={{color:"#29781D"}} onClick={() => setShowGarage(false)}/>
              </InputAdornment>
            ) : (
              <InputAdornment position="end" >
                <ArrowDropDownIcon sx={{color:"#29781D"}} onClick={() => setShowGarage(true)}/>
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
          {showGarage &&
            Garages.map((name, index) => (
              <MenuItem
                key={name}
                value={name}
                style={{
                  borderBottom:
                    index !== Garages.length - 1 ? "1px solid #DAE6E1" : "none",
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
  )
}

export default Garage
