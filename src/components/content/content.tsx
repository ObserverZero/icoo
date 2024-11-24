import { useState } from "react";
import GroupCard from "../../components/GroupCard";
import KickstartCard from "../../components/KickstartCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function Content() {
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
          <KickstartCard />
        </ListItem>
        <ListItem>
          <KickstartCard />
        </ListItem>
        <ListItem>
          <KickstartCard />
        </ListItem>
      </List>
    </>
  );
}
