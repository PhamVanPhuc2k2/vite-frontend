import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import Box from "@mui/material/Box";
//

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
    // setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessOutlinedIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");
  // const prefersLightMode = useMediaQuery("(prefers-color-scheme:light)");
  // console.log("prefersDarkMode: ", prefersDarkMode);
  // console.log("prefersLightMode: ", prefersLightMode);
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
      <ModeSelect />
      <hr />
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
