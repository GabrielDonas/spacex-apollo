import { gql } from "@apollo/client";

export const ROCKETS = gql`
  query {
    rockets {
      company
      description
      wikipedia
      id
    }
  }
`;

export const PASTLAUNCHES = gql`
  query {
    launchesPast(limit: 10) {
      mission_name
      launch_site {
        site_name_long
      }
      launch_date_local
      id
      links {
        article_link
        flickr_images
      }
    }
  }
`;

export const UPCOMINGLAUNCHES = gql`
  query {
    launchesUpcoming {
      details
      launch_date_local
      id
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`;
