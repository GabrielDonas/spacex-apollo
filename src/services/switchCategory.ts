import { categoryVar } from "../cache";

import { Categories } from "../@types/categories";

function switchCategory(category: Categories) {
  switch (category) {
    case "past-launches":
      categoryVar("past-launches");
      break;
    case "rockets":
      categoryVar("rockets");
      break;
    default:
      categoryVar("upcoming-launches");
  }
}

export default switchCategory;
