import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PeopleCard from "./PeopleCard";
import PeopleCardSmall from "./PeopleCardSmall";

export default function People() {
  const [count, setCount] = useState(0);

  return (
    <>
      <List>
        <ListItem>
          <PeopleCard />
        </ListItem>
        <ListItem>
          <PeopleCardSmall />
        </ListItem>
      </List>
    </>
  );
}
