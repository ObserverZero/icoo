import { useState } from "react";
import GroupCard from "./groups/GroupCard";
import KickstartCard from "./groups/KickstartCard";
import PeopleCard from "./people/PeopleCard";
import PeopleCardSmall from "./people/PeopleCardSmall";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import SearchBar from "./SearchBar";

export default function Content() {
  const theme = useTheme();

  return (
    <Box sx={{ 
      paddingTop: { 
        xs: theme.spacing(8), // Additional padding for mobile
        sm: theme.spacing(10) // Additional padding for desktop
      }
    }}>
      <SearchBar />
      
      <List>
        <ListItem>
          <GroupCard />
        </ListItem>
        <ListItem>
          <KickstartCard />
        </ListItem>
        <ListItem>
          <PeopleCard />
        </ListItem>
        <ListItem>
          <PeopleCardSmall />
        </ListItem>
      </List>
    </Box>
  );
}
