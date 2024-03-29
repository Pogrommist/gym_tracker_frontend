import { useLocation, Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function RouterBottomNavigation() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={useLocation().pathname} showLabels>
        <BottomNavigationAction
          component={Link}
          to="/training"
          value="/training"
          icon={<PlayArrowIcon />}
          label="Тренировки"
        />
        <BottomNavigationAction
          component={Link}
          to="/exercises"
          value="/exercises"
          icon={<FitnessCenterIcon />}
          label="Упражнения"
        />
        <BottomNavigationAction
          component={Link}
          to="/profile"
          value="/profile"
          icon={<Person2Icon />}
          label="Профиль"
        />
      </BottomNavigation>
    </Paper>
  );
}
