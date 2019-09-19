import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function UserForm({ initialUser, addUser, validationSchema }) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialUser}
      onSubmit={addUser}
      render={props => {
        return (
          <Form>
            <div>
              <label>
                Name
                <Field name="name" type="text" placeholder="Name" />
              </label>
            </div>
            <div>
              <label>
                Email
                <Field name="email" type="email" placeholder="Email" />
              </label>
            </div>
            <div>
              <label>
                Password
                <Field name="password" type="password" placeholder="Password" />
              </label>
            </div>
            <div>
              <label>
                <Field name="tos" type="checkbox" placeholder="false" />
                By ticking the box you accept Terms of Services
              </label>
            </div>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    />
  );
}
