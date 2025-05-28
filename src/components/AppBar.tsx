import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

const CenteredBox = styled(Box)({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
});

const AppIcon = styled('img')({
  height: '32px',
  width: 'auto',
  objectFit: 'contain',
});

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>

          <Avatar
            alt="User Avatar"
            src="/SlightlyCreepySmiley.jpg"
            sx={{ 
              width: 35, 
              height: 35,
              mr: 1,
              cursor: 'pointer'
            }}
          />
          
          <CenteredBox>
            <AppIcon
              src="/iCooIcon.png"
              alt="iCoo"
            />
          </CenteredBox>

          <Box sx={{ flexGrow: 1 }} /> {/* This pushes the notifications icon to the right */}
          <IconButton
            size="large"
            color="inherit"
            aria-label="show notifications"
          >
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
