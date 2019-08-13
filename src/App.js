import React from "react";
 
import GlobalStyles from "./css/GlobalStyles";
import Navbar from "./components/sitenav";
import PageHeader from "./components/pageheader"
import LandingPage from "pages/landingpage";
import {Provider} from "reactive-react-redux"
import store from "redux/store"
function App() {
  
  return (
  
      <Provider store={store}>
       
          <GlobalStyles />
          <Navbar />
             <PageHeader
        title=" react-redux "
        tagline="state managment and hooks"
      />
          <LandingPage/>
      </Provider>
  
  );
}

export default App;
