import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { themeVar } from "../../cache";
import { Maybe, LaunchLinks, LaunchSite } from "../../generated/graphql";

type StringType = Maybe<string> | undefined;
type Site = StringType | Maybe<LaunchSite>;
type Links = StringType | Maybe<LaunchLinks>;

interface Props {
  title: StringType;
  subtitle: Site;
  description: StringType;
  image?: Links;
  link?: Links;
}

const imagePlaceholder =
  "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg";

const mainPage = "https://spaceflightnow.com/";

const baseCardTheme = { maxWidth: 345, margin: "10px" };
const cardDarkTheme = {
  ...baseCardTheme,
  backgroundColor: "rgba(255, 255, 255, 0.154)",
  color: "white",
};

const CustomCard: FC<Props> = ({
  title,
  subtitle,
  description,
  image = imagePlaceholder,
  link,
}) => {
  return (
    <Card sx={themeVar() === "lightTheme" ? baseCardTheme : cardDarkTheme}>
      <CardMedia
        component="img"
        height="140"
        image={image as string}
        alt={title as string}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color={themeVar() === "lightTheme" ? "text.secondary" : "white"}
        >
          {subtitle}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={(link as string) || mainPage}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
