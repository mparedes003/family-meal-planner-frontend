import React from 'react';
// import cx from 'classnames';
import { Field } from 'redux-form';

// const getValidityClassName = (meta) => {
//   if (meta.asyncValidating) {
//     return 'async-validating';
//   }
//   if (meta.active) {
//     return;
//   }
//   if (meta.touched && meta.invalid) {
//     return 'invalid';
//   }
//   if (meta.touched && meta.valid) {
//     return 'valid';
//   }
// };

export const renderField = (props) => {
  const { label, input, type, meta } = props;
  return (
    <div
    // className={cx(
    //   "custom-input-container",
    //   { "flex-row-reverse": type === "checkbox" },
    //   { dirty: meta.dirty || meta.initial },
    //   getValidityClassName(meta)
    // )}
    >
      <label>{label}</label>
      <br />
      <input {...input} type={type} autoFocus={props.autoFocus} />

      {meta.error && meta.touched && !meta.active && (
        <div className='feedback-text error-text'>{meta.error}</div>
      )}
    </div>
  );
};

export const renderIngredients = ({ fields }) => (
  <div className='custom-field-array-container'>
    <label>Ingredients</label>
    <br />
    <button type='button' onClick={() => fields.push()}>
      Add Ingredient
    </button>
    {fields.map((ingredient, index) => (
      <div key={index} className='field-array-item'>
        <h4>Ingredient #{index + 1}</h4>
        <Field
          name={`${ingredient}.quantity`}
          type='text'
          component={renderField}
          label='quantity'
          autoFocus
        />
        <Field
          name={`${ingredient}.measurement`}
          type='text'
          component={renderField}
          label='measurement'
          autoFocus
        />
        <Field
          name={`${ingredient}.name`}
          type='text'
          component={renderField}
          label='name'
          autoFocus
        />
        <span
          role='img'
          aria-label='Remove'
          onClick={() => fields.remove(index)}
          style={{ cursor: 'pointer' }}
        >
          ❌
        </span>
        {/* <button type='button' onClick={() => fields.remove(index)}>
          &times;
        </button> */}
      </div>
    ))}
  </div>
);

export const renderInstructions = ({ fields }) => (
  <div className='custom-field-array-container'>
    <label>Instructions</label>
    <br />
    <button type='button' onClick={() => fields.push()}>
      Add Instruction
    </button>
    {fields.map((instruction, index) => (
      <div key={index} className='field-array-item'>
        <h4>Instruction #{index + 1}</h4>
        <Field
          name={`${instruction}.step_number`}
          type='number'
          component={renderField}
          label='Step Number'
        />
        <Field
          name={`${instruction}.description`}
          type='text'
          component={renderField}
          label='description'
        />
        <span
          role='img'
          aria-label='Remove'
          onClick={() => fields.remove(index)}
          style={{ cursor: 'pointer' }}
        >
          ❌
        </span>
        {/* <button type='button' onClick={() => fields.remove(index)}>
          &times;
        </button> */}
      </div>
    ))}
  </div>
);

// export const renderField = ({
//   input,
//   label,
//   type,
//   meta: { touched, error },
// }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} type={type} placeholder={label} />
//       {touched && error && <span>{error}</span>}
//     </div>
//   </div>
// );

// export const renderIngredients = ({ fields }) => (
//   <ul>
//     <li>
//       <button type='button' onClick={() => fields.push({})}>
//         Add Ingredient
//       </button>
//     </li>
//     {fields.map((ingredient, index) => (
//       <li key={index}>
//         <span
//           role='img'
//           aria-label='Remove'
//           onClick={() => fields.remove(index)}
//           style={{ cursor: 'pointer' }}
//         >
//           ❌
//         </span>
//         <h4>Ingredient #{index + 1}</h4>
//         <Field
//           name={`${ingredient}.quantity`}
//           type='number'
//           component={renderField}
//           label='Quantity'
//         />
//         <Field
//           name={`${ingredient}.measurement`}
//           type='text'
//           component={renderField}
//           label='measurement'
//         />
//         <Field
//           name={`${ingredient}.name`}
//           type='text'
//           component={renderField}
//           label='name'
//         />
//       </li>
//     ))}
//   </ul>
// );

// export const renderInstructions = ({ fields }) => (
//   <ul>
//     <li>
//       <button type='button' onClick={() => fields.push({})}>
//         Add Instruction
//       </button>
//     </li>
//     {fields.map((instruction, index) => (
//       <li key={index}>
//         <span
//           role='img'
//           aria-label='Remove'
//           onClick={() => fields.remove(index)}
//           style={{ cursor: 'pointer' }}
//         >
//           ❌
//         </span>
//         <h4>Instruction #{index + 1}</h4>
//         <Field
//           name={`${instruction}.step_number`}
//           type='number'
//           component={renderField}
//           label='Step Number'
//         />
//         <Field
//           name={`${instruction}.description`}
//           type='text'
//           component={renderField}
//           label='description'
//         />
//       </li>
//     ))}
//   </ul>
// );
