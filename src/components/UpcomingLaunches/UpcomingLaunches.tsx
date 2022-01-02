import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { UPCOMINGLAUNCHES } from "../../queries/queries";
import CustomCard from "../CustomCard/CustomCard";
import Loading from "../Loading/Loading";

import { Launch } from "../../generated/graphql";

function UpcomingLaunches() {
  const { loading, error, data } = useQuery(UPCOMINGLAUNCHES);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const launchesUpcoming: Launch[] = data.launchesUpcoming;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
      }}
    >
      {launchesUpcoming.map(
        ({ details, launch_date_local, mission_name }, i) => (
          <CustomCard
            key={i}
            description={details}
            title={mission_name}
            subtitle={launch_date_local}
          />
        )
      )}
    </Box>
  );
}

export default UpcomingLaunches;
