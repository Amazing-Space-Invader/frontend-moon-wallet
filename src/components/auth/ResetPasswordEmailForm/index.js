import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Intent } from '@blueprintjs/core';

import { required } from '../../../utils/validators';

import RenderInput from '../../_forms/RenderInput';

const ResetPasswordEmailForm = (props) => {
  const {
    handleSubmit,
    invalid,
    fetching
  } = props;

  return (
    <form onSubmit={handleSubmit}>

      <Field
        component={RenderInput}
        placeholder="Email"
        name="email"
        type="email"
        className="pt-input pt-large pt-fill"
        validate={required}/>

      <div>
        <Button
          type="submit"
          className="pt-large pt-fill"
          intent={Intent.PRIMARY}
          text="Reset password"
          disabled={invalid}
          loading={fetching}/>
      </div>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'resetPasswordEmail',
  initialValues: {
    email: ''
  }
})(ResetPasswordEmailForm);

export default FormComponent;
