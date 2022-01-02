import { Categories } from "../../@types/categories";
import PastLaunchesList from "../PastLaunchesList/PastLaunchesList";
import RocketList from "../RocketList/RocketList";
import UpcomingLaunches from "../UpcomingLaunches/UpcomingLaunches";
import { categoryVar } from "../../cache";
import { useReactiveVar } from "@apollo/client";
import { Container } from "@mui/material";

function MainSection() {
  useReactiveVar(categoryVar);

  return (
    <Container>
      {categoryVar() === Categories.PAST_LAUNCHES && <PastLaunchesList />}
      {categoryVar() === Categories.ROCKETS && <RocketList />}
      {categoryVar() === Categories.UPCOMING_LAUNCHES && <UpcomingLaunches />}
    </Container>
  );
}

export default MainSection;
