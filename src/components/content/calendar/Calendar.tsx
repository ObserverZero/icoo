import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CalendarItemCard from "./CalendarItemCard";

export default function Calendar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <List>
        <ListItem>
          <CalendarItemCard />
        </ListItem>
      </List>
    </>
  );
}
