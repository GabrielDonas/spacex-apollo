import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { PASTLAUNCHES } from "../../queries/queries";
import CustomCard from "../CustomCard/CustomCard";
import Loading from "../Loading/Loading";

import { Launch } from "../../generated/graphql";

function PastLaunchesList() {
  const { loading, error, data } = useQuery(PASTLAUNCHES);
  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const launchesPast: Launch[] = data.launchesPast;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {launchesPast.map(
        ({ mission_name, launch_date_local, id, launch_site, links }) => (
          <CustomCard
            description={launch_date_local}
            subtitle={launch_site!["site_name_long"]}
            title={mission_name}
            key={id}
            image={links!["flickr_images"]![0]}
            link={links!["article_link"]}
          />
        )
      )}
    </Box>
  );
}

export default PastLaunchesList;
