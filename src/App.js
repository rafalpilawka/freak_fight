import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.component'
import FightsList from './components/FightsList/FightsList.component'
import styled from 'styled-components';
import Footer from './components/Footer/Footer.component'
import { UserContextProvider } from './context/userContext';


const AppStyle = styled.div`{
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}`

function App() {
 
  return (
    <div className="App">
    

    <Router>
      <UserContextProvider>
          <Navigation />
          <Switch>
            <AppStyle>
              <Route exact path="/" component={FightsList}></Route>
            </AppStyle>
          </Switch>
        </UserContextProvider>
        <Footer></Footer>
    </Router>
    
    </div>
  );
}

export default App;
