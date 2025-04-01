import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <div>phamvanphuc</div>
      <Typography variant="body2" color="text.secondary">
        Test
      </Typography>
      <Button variant="contained">Hello world</Button>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  );
}

export default App;
