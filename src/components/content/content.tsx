import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Groups from "./groups/Groups";
import People from "./people/People";
import Calendar from "./calendar/Calendar";

export default function Content() {
  const [count, setCount] = useState(0);

  return (
    <>
      <List>
        <ListItem>
          <Calendar />
        </ListItem>
      </List>
    </>
  );
}
