import React, { useContext, useEffect } from "react";
import { FeatureFlagsContext } from "./context";
import TicTacToe from "../tic-tac-toe";
import RandomColor from "../random-color/Random-color";
import Accordian from "../accordian/accordian";
import ImageSlider from "../image-slider/imageSlider";
import SearchAutocomplete from "../search-autocomplete-with-api";
export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  function checkEnabledFlags(component) {
    return enabledFlags[component];
  }

  const componentsToRender = [
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showImageSlider",
      component: (
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        />
      ),
    },
    {
      key: "ShowSearchAutoCompleate",
      component: <SearchAutocomplete />,
    },
  ];
  useEffect(() => {
    checkEnabledFlags("showRandomColorGenerator");
  });
  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
