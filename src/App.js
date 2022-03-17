import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';
// import LoginFormPage from './pages/LoginFormPage';
// import RegisterFormPage from './pages/RegisterFormPage';
class App extends Component {
  render() {
    return (
      <Container className="spacing">
        <h1 className='heading'>Zoho-Contact-Manager</h1>
        <div className="ui four item menu">
          <NavLink className="item" activeClassName="active" exact to="/lists">
            Contacts List
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/contacts/new">
            Add Contact
          </NavLink>
//           <NavLink className="item" activeClassName="active" exact to="/login">
//             Login
//           </NavLink>
//           <NavLink className="item" activeClassName="active" exact to="/register">
//             Register
//           </NavLink>

        </div>
        <Route exact path="/" component={ContactListPage}/>
        <Route exact path="/lists" component={ContactListPage}/>
        <Route path="/contacts/new" component={ContactFormPage}/>
        <Route path="/contacts/edit/:_id" component={ContactFormPage}/>
//         <Route path="/login" component={LoginFormPage}/>
//         <Route path="/register" component={RegisterFormPage}/>
      </Container>
    );
  }
}

export default App;
