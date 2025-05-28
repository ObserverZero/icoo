import { useState, useEffect, useCallback } from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 64, // AppBar height in desktop
  left: 0,
  right: 0,
  zIndex: 1099, // Just below AppBar
  borderRadius: 0,
  backgroundColor: alpha(theme.palette.background.paper, 0.95),
  padding: theme.spacing(1),
  transition: "transform 0.2s ease-out", // Faster transition for more responsive feel
  transform: "translateY(-100%)",
  "&.visible": {
    transform: "translateY(0)",
  },
  [theme.breakpoints.down("sm")]: {
    top: 56, // AppBar height in mobile
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const SCROLL_THRESHOLD = 10; // Small threshold for more sensitive scrolling

export default function SearchBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const theme = useTheme();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;
    
    // Show on any upward scroll
    if (scrollDelta < 0) {
      setIsSearchVisible(true);
    } 
    // Hide on small downward scroll past threshold
    else if (scrollDelta > SCROLL_THRESHOLD && isSearchVisible) {
      setIsSearchVisible(false);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY, isSearchVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Search className={isSearchVisible ? "visible" : ""}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
} 