import React, {Fragment} from 'react';
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";

function App() {
  return (
    <Fragment>
        <TopNavigation></TopNavigation>
      <TopBanner></TopBanner>
        <Services></Services>

    </Fragment>
  );
}

export default App;
