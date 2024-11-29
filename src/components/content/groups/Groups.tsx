import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import GroupCard from "./GroupCard";
import KickstartCard from "./KickstartCard";

export default function Groups() {
  const [count, setCount] = useState(0);

  return (
    <>
      <List>
        <ListItem>
          <GroupCard />
        </ListItem>
        <ListItem>
          <KickstartCard />
        </ListItem>
        <ListItem>
          <GroupCard />
        </ListItem>
      </List>
    </>
  );
}
