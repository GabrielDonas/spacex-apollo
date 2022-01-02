import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { ROCKETS } from "../../queries/queries";
import CustomCard from "../CustomCard/CustomCard";
import Loading from "../Loading/Loading";
import { Rocket } from "../../generated/graphql";

function RocketList() {
  const { loading, error, data } = useQuery(ROCKETS);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const rockets: Rocket[] = data.rockets;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {rockets.map(({ id, company, description, wikipedia }) => (
        <CustomCard
          key={id}
          description={description}
          title={id}
          subtitle={company}
          link={wikipedia}
        />
      ))}
    </Box>
  );
}

export default RocketList;
