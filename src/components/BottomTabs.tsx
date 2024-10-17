import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import PeopleIcon from "@mui/icons-material/People";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Calendar"
          value="Calendar"
          icon={<CalendarTodayIcon />}
        />
        <BottomNavigationAction
          label="Workspaces"
          value="Workspaces"
          icon={<WorkspacesIcon />}
        />
        <BottomNavigationAction
          label="People"
          value="People"
          icon={<PeopleIcon />}
        />
      </BottomNavigation>
    </>
  );
}
