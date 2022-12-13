import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Container, Grid, Button, FormGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormField from './components/FormField';

import {
  GENDER_OPTIONS,
  COUNTRY_OPTIONS,
  STATE_OPTIONS,
  CITIES_OPTIONS,
  HOBBIES,
} from './constants';

const initialsFields = [
  { label: 'First Name', key: 'firstName' },
  { label: 'Last Name', key: 'lastName' },
  { label: 'Email', key: 'email' },
  { label: 'Contact No.', key: 'contactNumber' },
];

const addressFields = [
  { label: 'Country', key: 'country', options: COUNTRY_OPTIONS },
  { label: 'State', key: 'state', options: STATE_OPTIONS },
  { label: 'City', key: 'city', options: CITIES_OPTIONS },
];

const initvalues = {
  firstName: '',
  lastName:  '',
  email: '',
  contactNumber: '',
  dob: '', 
  gender: '',
  country: '',
  state: '',
  city: '',
  hobbies: '',
  terms: '',
}
const AddUser = () => {
 
  const [user,setUser] = useState(initvalues);
    const onValueChange = () => {

    }
}

const UserValidation = () => {
  return (
    <Formik
      initialValues={{
        lastName: '',
        firstName: '',
        email: '',
        contactNumber: '',
        dob: '',
        gender: '',
        country: '',
        state: '',
        city: '',
        hobbies: ['Browsing'],
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        contactNumber: Yup.string()
          .min(10)
          .max(10)
          .required('Phone number is required'),
        email: Yup.string().email('Invalid email').required('Required'),
        country: Yup.string().required('Required'),
        state: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        terms: Yup.boolean().oneOf([true], 'Message'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit} noValidate>
          <Stack spacing={3}>
            {initialsFields.map((field) => (
              <FormField
                key={field.key}
                label={field.label}
                value={props.values[field.key]}
                onChange={props.handleChange}
                name={field.key}
                error={
                  props.touched[field.key] && Boolean(props.errors[field.key])
                }
                helperText={props.touched[field.key] && props.errors[field.key]}
                required
              />
            ))}

            <FormField
              label="Date of Birth"
              field="date"
              onChange={props.handleChange}
              name="dob"
              value={props.values.dob}
              error={props.touched.dob && Boolean(props.errors.dob)}
              helperText={props.touched.dob && props.errors.dob}
            />

            <FormField
              label="Gender"
              field="radio"
              onChange={props.handleChange}
              name="gender"
              value={props.values.gender}
              options={GENDER_OPTIONS}
              error={props.touched.gender && Boolean(props.errors.gender)}
              helperText={props.touched.gender && props.errors.gender}
            />

            {addressFields.map((field) => (
              <FormField
                key={field.key}
                label={field.label}
                field="select"
                onChange={props.handleChange}
                name={field.key}
                value={props.values[field.key]}
                options={field.options}
                error={
                  props.touched[field.key] && Boolean(props.errors[field.key])
                }
                helperText={props.touched[field.key] && props.errors[field.key]}
              />
            ))}

            <FormField
              label="Hobbies"
              field="checkbox"
              onChange={props.handleChange}
              name="hobbies"
              value={props.values.hobbies}
              options={HOBBIES}
              error={props.touched.hobbies && Boolean(props.errors.hobbies)}
              helperText={props.touched.hobbies && props.errors.hobbies}
            />

            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  name="terms"
                  control={
                    <Checkbox
                      checked={props.values.terms}
                      name="terms"
                      onChange={props.handleChange}
                    />
                  }
                  label="I Agree To The Terms And Conditions"
                />
              </FormGroup>
            </Grid>

            <Submit />
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default function UserForm() {
  return (
    <div className="formCon">
      <div className="main-container">
        <Container maxWidth="sm">
          <Typography sx={{ textTransform: 'uppercase' }}>User Form</Typography>

          <Typography variant="h4">Welcome</Typography>
          <Typography sx={{ marginBottom: '16px' }} variant="subtitle2">
            ENTER ALL THE BELOW DETAILS
          </Typography>

          <UserValidation />
        </Container>
      </div>
    </div>
  );
}

function Submit() {
  return (
    <stack>
       <Button type="submit" variant="contained" color="primary" align-items="center">
            ADD USER
          </Button>
    </stack>
  );
}
