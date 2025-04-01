import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material/styles";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <Button
      variant="contained"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"} (Current: {mode})
    </Button>
  );
}

function App() {
  return (
    <div style={{ padding: 20 }}>
      <ModeToggle />
      <hr />
      <Typography variant="h6">Current Mode Demo</Typography>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
        Secondary Button
      </Button>
      <div style={{ marginTop: 20 }}>
        <HomeIcon fontSize="large" />
        <HomeIcon color="primary" fontSize="large" sx={{ ml: 2 }} />
        <HomeIcon color="secondary" fontSize="large" sx={{ ml: 2 }} />
      </div>
    </div>
  );
}

export default App;
