import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    �
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ width: 1 }}>
      <CardContent>
        <Typography
          align="center"
          gutterBottom
          sx={{ color: "text.secondary", fontSize: 14 }}
        >
          Word of the Day
        </Typography>
        <Typography align="center" variant="h5" component="div">
          Squatter's rights
        </Typography>
        <Typography align="center" sx={{ color: "text.secondary", mb: 1.5 }}>
          noun
        </Typography>
        <Typography align="center" variant="body2">
          It's like finder's keepers, but for other people's houses.
          <br />
          {"-Mr. Robinson"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
