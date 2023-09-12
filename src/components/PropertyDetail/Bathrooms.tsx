import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Box, TextField, InputAdornment } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const FullBath = ["1", "2", "3"];
const HalfBath = ["1", "2", "3"];


const Bathrooms = ({
  formData,
  onChange,
}: {
  formData: any;
  onChange: any;
}) => {
  const [showFullBath, setFullBath] = useState<boolean>(false);
  const [showHalfBath, setHalfBath] = useState<boolean>(false);
  const selectRef = useRef<HTMLInputElement | null>(null);
  const selectRef1 = useRef<HTMLInputElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setHalfBath(false);
    }
    if (
      selectRef1.current &&
      !selectRef1.current.contains(event.target as Node)
    ) {
      setFullBath(false);
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
      <FormControl sx={{ width: "100%", mt: 3 }}>
        <TextField
          placeholder="Bathrooms Desired - Full"
          onFocus={() => setFullBath(true)}
          value={formData["fullBathrooms"]}
          inputProps={{ ref: selectRef1 }}
          InputProps={{
            endAdornment: showFullBath ? (
              <InputAdornment position="end">
                <ArrowDropUpIcon
                  sx={{ color: "#29781D" }}
                  onClick={() => setFullBath(false)}
                />
              </InputAdornment>
            ) : (
              <InputAdornment position="end">
                <ArrowDropDownIcon
                  sx={{ color: "#29781D" }}
                  onClick={() => setFullBath(true)}
                />
              </InputAdornment>
            ),
            sx: {
              borderRadius: "8px",
              backgroundColor: "white",
              color:"#29781D",
              border: "none",
              ".MuiOutlinedInput-notchedOutline": {
                border: "none !important",
              },
            },
          }}
        />
        <Box sx={{ bgcolor: "white", mt: 1, borderRadius: "8px" }}>
          {showFullBath &&
            FullBath.map((name, index) => (
              <MenuItem
                key={name}
                value={name}
                style={{
                  borderBottom:
                    index !== FullBath.length - 1
                      ? "1px solid #DAE6E1"
                      : "none",
                }}
                onClick={() => {
                  let newFormValue = {...formData};
                  newFormValue["fullBathrooms"] = name;
                  onChange(newFormValue);
                }}
                sx={{ color: "#29781D", pt: 2 }}
              >
                {name}
              </MenuItem>
            ))}
        </Box>
      </FormControl>
      {/* Half Bath  */}
      <FormControl sx={{ width: "100%", mt: 1 }}>
        <TextField
          placeholder="Bathrooms Desired - Half"
          onFocus={() => setHalfBath(true)}
          value={formData["halfBathrooms"]}
          inputProps={{ ref: selectRef }}
          InputProps={{
            endAdornment: showHalfBath ? (
              <InputAdornment position="end">
                <ArrowDropUpIcon
                  sx={{ color: "#29781D" }}
                  onClick={() => setHalfBath(false)}
                />
              </InputAdornment>
            ) : (
              <InputAdornment position="end">
                <ArrowDropDownIcon
                  sx={{ color: "#29781D" }}
                  onClick={() => setHalfBath(true)}
                />
              </InputAdornment>
            ),
            sx: {
              borderRadius: "8px",
              backgroundColor: "white",
              color:"#29781D",
              border: "none",
              ".MuiOutlinedInput-notchedOutline": {
                border: "none !important",
              },
            },
          }}
        />
        <Box sx={{ bgcolor: "white", mt: 1, borderRadius: "8px" }}>
          {showHalfBath &&
            HalfBath.map((name, index) => (
              <MenuItem
                key={name}
                value={name}
                style={{
                  borderBottom:
                    index !== HalfBath.length - 1
                      ? "1px solid #DAE6E1"
                      : "none",
                }}
                onClick={() => {
                  let newFormValue = {...formData};
                  newFormValue["halfBathrooms"] = name;
                  onChange(newFormValue);
                }}
                sx={{ color: "#29781D", pt: 2 }}
              >
                {name}
              </MenuItem>
            ))}
        </Box>
      </FormControl>
    </Box>
  );
}

export default Bathrooms
