import { React } from "react";

const AppSearchPanel = () => {
  const searchStyle = { fontSize: "20px" };
  const searchText = "Type here to search";
  return <input placeholder={searchText} style={searchStyle} />;
};

export default AppSearchPanel;
