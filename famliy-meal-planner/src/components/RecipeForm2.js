import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderIngredients = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type='button' onClick={() => fields.push({})}>
        Add Ingredient
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((ingredient, index) => (
      <li key={index}>
        <button
          type='button'
          title='Remove Ingredient'
          onClick={() => fields.remove(index)}
        />
        <h4>Ingredient #{index + 1}</h4>
        <Field
          name={`${ingredient}.quantity`}
          type='text'
          component={renderField}
          label='Quantity'
        />
        <Field
          name={`${ingredient}.measurement`}
          type='text'
          component={renderField}
          label='measurement'
        />
        <Field
          name={`${ingredient}.name`}
          type='text'
          component={renderField}
          label='name'
        />
      </li>
    ))}
  </ul>
);

const RecipeForm2 = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name='title'
        type='text'
        component={renderField}
        label='Recipe Name'
      />
      <FieldArray name='ingredients' component={renderIngredients} />
      <div>
        <button type='submit' disabled={submitting}>
          Submit
        </button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'RecipeForm2', // a unique identifier for this form
})(RecipeForm2);
