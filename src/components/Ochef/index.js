import React, {  useEffect }from 'react';
import { Switch,Route, Redirect} from "react-router-dom";

import Header from 'src/container/Header';
import Footer from '../Footer';
import Content from 'src/container/ContentIndex';
import Detail from "src/container/Detail"
import Blog from '../Blog'
import Error404 from '../Error404'
import HeaderMobile from '../HeaderMobile';
import './style.scss';



const Ochef = ({fetchAllrecipe, loading, country, receiveToken}) => {
  console.log(loading)
useEffect(() => {
  fetchAllrecipe()
  country()
  receiveToken()
 } 
  ,
  [])

  return (

  <Switch>
    <Route  exact path="/">
      <div className="ochef">
        {screen.width > 720 ? <Header /> : <HeaderMobile />}
        
        <div className="ochef-container">
          {loading &&  <div className="ochef-container--load"><span className="ochef-container--loadText">veillez patientez</span></div>}
          {!loading && <Content />}
        </div>
        <Footer />
      </div>
    </Route>

    <Route  exact  path="/recipe/:slug">
      <div className="ochef">
      {screen.width > 720 ? <Header /> : <HeaderMobile />}
        <div className="ochef-container">
          {!loading && <Detail />}
        </div>
        <Footer />
      </div>
    </Route>

    <Route  exact path="/error/404">
    <div className="ochef">
    {screen.width > 720 ? <Header /> : <HeaderMobile />}
      <Error404 />
      <Footer />
      </div>
    </Route>

    <Route  exact path="/blog">
    <div className="ochef">
    {screen.width > 720 ? <Header /> : <HeaderMobile />}
      <Blog />
      <Footer />
      </div>
    </Route>
    
    <Redirect  from='*' to="/error/404" />
    
  </Switch>
 
  );
};
export default Ochef;
