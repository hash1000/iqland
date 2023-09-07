import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row"],
          justifyContent: "space-between",
          overflow: "hidden",
          width: "100%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: ["none", "none", "block"],
            width: ["100%", "100%", "56%"],
            height: ["50%", "50%", "100%"],
            overflow: "hidden",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/login_bg.png`}
            alt="login"
            style={{ width: "100%", height: "100%", }}
          />
        </Box>
        <Box
          sx={{
            width: ["100%", "100%", "44%"],
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 2,
              alignItems: "center",
            }}
          >
            
            <Box sx={{ pt:"44px" }} component={Link} to="/">
              <img src={process.env.PUBLIC_URL + '/images/Logo.png'} alt="" />
            </Box>
            <Box sx={{ width: "65%" }}>
              <Box sx={{ marginTop:"10%"}}>
                {" "}
                <Typography
                  sx={{
                    fontWeight: "700",
                    lineHeight: "30px",
                    letterSpacing: "0.5%",
                    fontSize: "25px",
                    font: "bold",
                    fontFamily: "Oxygen",
                  }}
                >
                  Sign in to IQLAND
                </Typography>{" "}
              </Box>
              <Box component="form" sx={{marginTop:"10%"}}>
                <Typography sx={{ fontWeight: "bold",marginBottom:"-15px" }}>
                  Email
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  sx={{
                    backgroundColor: "#29781D3B",
                    borderRadius:"8px",
                    "&:focus": {
                      outline: "none", 
                      borderColor: "transparent", 
                    },
                    ".MuiOutlinedInput-root":{
                      borderRadius: "8px",

                    }
                  }}
                />
                <Typography
                  sx={{ fontWeight: "bold", marginTop: 3 ,marginBottom:"-15px" }}
                >
                  Password
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  placeholder="**********"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{color:"gray"}}>
                        <IconButton onClick={togglePasswordVisibility}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    backgroundColor: "#29781D3B",
                    borderRadius:"8px",
                    "&:focus": {
                      outline: "none", 
                      borderColor: "transparent", 
                    },
                    ".MuiOutlinedInput-root":{
                      borderRadius: "8px",

                    }
                  }}
                />
                <Box>
                  <Typography sx={{ color: "gray", textAlign: "end",fontFamily:"Oxygen" }}>
                    <Link
                      to="#"
                      style={{
                        textDecoration: "none",
                        color: "gray",
                        fontFamily: "Oxygen",
                      }}
                    >
                      Forgot password?
                    </Link>
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mt: "18%", mb: 0.5 }}>
                <Button
                  type="submit"
                  fullWidth
                  sx={{
                    bgcolor: "#29781D",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    fontFamily:"Oxygen",
                    paddingY: "10px",
                    "&:hover": {
                      bgcolor: "#1E5C13",
                    },
                  }}
                >
                  Sign In
                </Button>
              </Box>
              <Typography
                sx={{
                  justifyContent: "center",
                  textAlign: "center",
                  color: "gray",
                }}
              >
                or
              </Typography>
              <Box sx={{ mt: 0.5 }}>
                <Button
                  type="submit"
                  fullWidth
                  sx={{
                    bgcolor: "white",
                    color: "#29781D",
                    fontWeight: "bold",
                    border: "2px solid #29781D",
                    borderRadius: "8px",
                    paddingY: "10px",
                    fontFamily:"Oxygen",
                    "&:hover": {
                      color: "#1E5C13",
                      bgcolor: "#29781D3B",
                    },
                  }}
                >
                  Sign in with google
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                mt: { xs: "20%", sm: "8%", md: "20%", lg: "8%", xl:"20%",},
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Typography sx={{ fontFamily: "Oxygen" }}>
                Doesn’t have an account?
              </Typography>
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  color: "#29781D",
                  fontWeight: "bold",
                  fontFamily: "Oxygen",
                }}
              >
                {" "}
                Sign up now
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

