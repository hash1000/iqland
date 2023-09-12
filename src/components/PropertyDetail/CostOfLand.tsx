import FormControl from "@mui/material/FormControl";
import { Box, TextField, InputAdornment } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const CostOfLand = ({
  formData,
  onChange,
}: {
  formData: any;
  onChange: any;
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl sx={{ width: "100%", mt: 3 }}>
        <TextField
          placeholder="Cost of the Land"
          type="number"
          value={formData}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "#29781D" }}>
                <AttachMoneyIcon />
              </InputAdornment>
            ),
            sx: {
              borderRadius: "8px",
              backgroundColor: "white",
              color: "#29781D",
              border: "none",
              ".MuiOutlinedInput-notchedOutline": {
                border: "none !important",
              },
            },
          }}
        />
      </FormControl>
    </Box>
  );
};

export default CostOfLand;
