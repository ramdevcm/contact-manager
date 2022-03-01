
import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import { MdAccountCircle } from 'react-icons/md';
// import loginImg from "../../login.svg";
const validate = (values) => {
    const errors = {name:{}};

    if(!values.email) {
      errors.email = {
        message: 'You need to provide an Email address'
      }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = {
        message: 'Invalid email address'
      }
    }
    return errors;
  }

  const style = {
    marginTop: "1em",
    textAlign: "center"
   };
   const style_icon = {
       fontSize: 50,
       color: "CBC0D3",
       textAlign: "center"
   };
   const style_icon_div = {
     marginTop: "1em",
     textAlign: "center"
    };
 class RegisterFormPage extends React.Component {
  constructor(props) {
    super(props);
  }
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading } = this.props;
    return (

        <Grid centered columns={2}>
        <Grid.Column>
        <h1 style={style}>{'Register'}</h1>
        <div style={style_icon_div}>
                <MdAccountCircle  style={style_icon}/>
        </div>
          <Form >
            <Field name="email" type="text" component={this.renderField} label="Email"/>
            <Field name="password" type="password" component={this.renderField} label="Password"/>
            <Field name="secret" type="text" component={this.renderField} label="Secret"/>
            <Button primary type='submit' disabled={pristine || submitting}>REGISTER</Button>
          </Form>
        </Grid.Column>
      </Grid>
        
    );
  }
}
export default reduxForm({form: 'register', validate})(RegisterFormPage);