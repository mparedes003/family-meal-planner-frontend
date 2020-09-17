import React from 'react';
// import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import { addRecipe } from '../store/actions';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, null, 2));
  const newRecipe = {
    title: values.title,
    ingredients: values.ingredients.map((ingredient) => ({ ...ingredient })),
    instructions: values.instructions.map((instruction) => ({
      ...instruction,
    })),
  };
  // // console.log('newRecipe data', this.props.history);
  console.log('newRecipe data', newRecipe);
  this.props.addRecipe(newRecipe);
};

// const renderIngredientsArray = ({ fields }) => {
//   return fields.map(
//     (name, index) =>
//       console.log('field') || (
//         <div key={name}>
//           <label>Ingredient #{index + 1}</label>

//           <div>
//             {/* <RenderCount /> */}
//             <Field
//               type='number'
//               name={`${name}.quantity`}
//               component='input'
//               placeholder='quantity'
//               // validate={validateFirstName}
//             />
//             <Field
//               type='text'
//               name={`${name}.measurement`}
//               component='input'
//               placeholder='measurement'
//             />
//             <Field
//               type='text'
//               name={`${name}.name`}
//               component='input'
//               placeholder='ingredient'
//             />
//             <span
//               role='img'
//               aria-label='Remove'
//               onClick={() => fields.remove(index)}
//               style={{ cursor: 'pointer' }}
//             >
//               ❌
//             </span>
//           </div>
//         </div>
//       )
//   );
// };

// const renderInstructionsArray = ({ fields }) => {
//   return fields.map(
//     (name, index) =>
//       console.log('field') || (
//         <div key={name}>
//           <label>Ingredient #{index + 1}</label>

//           <div>
//             {/* <RenderCount /> */}
//             <Field
//               type='number'
//               name={`${name}.step_number`}
//               component='input'
//               placeholder='step number'
//               // validate={validateFirstName}
//             />
//             <Field
//               type='text'
//               name={`${name}.description`}
//               component='input'
//               placeholder='description'
//             />
//             <span
//               role='img'
//               aria-label='Remove'
//               onClick={() => fields.remove(index)}
//               style={{ cursor: 'pointer' }}
//             >
//               ❌
//             </span>
//           </div>
//         </div>
//       )
//   );
// };

const RecipeForm2 = () => (
  <Form
    onSubmit={onSubmit}
    mutators={{
      ...arrayMutators,
    }}
    subscription={{
      submitting: true,
    }}
    initialValues={{
      title: '',
      ingredients: [],
      instructions: [],
    }}
    render={({
      handleSubmit,
      form: {
        mutators: { push, insert, pop },
      }, // injected from final-form-arrays above
      pristine,
      form,
      submitting,
      values,
    }) => {
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>

            {/* <Field name='title' component='input' type='text' /> */}
            <Field name='title'>
              {(field) => (
                <div className='input-row'>
                  <input {...field.input} type='text' />
                  {field.meta.touched && field.meta.error && (
                    <span className='error'>{field.meta.error}</span>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div className='buttons'>
            <label>Ingredients</label>
            <br />
            <button
              type='button'
              onClick={() => push('ingredients', undefined)}
            >
              Add Ingredient
            </button>
            <button type='button' onClick={() => pop('ingredients')}>
              Remove Ingredient
            </button>
          </div>
          {/* <FieldArray name='ingredients' subscription={{}}>
            {renderIngredientsArray}
          </FieldArray> */}
          <FieldArray
            name='ingredients'
            // component={renderIngredients}
            // subscription={{}}
          >
            {({ fields }) =>
              fields.map(
                (name, index) =>
                  console.log('field') || (
                    <div key={name}>
                      <label>Ingredient #{index + 1}</label>

                      <div>
                        <Field
                          name={`${name}.quantity`}
                          component='input'
                          placeholder='quantity'
                        />
                        <Field
                          name={`${name}.measurement`}
                          component='input'
                          placeholder='measurement'
                        />
                        <Field
                          name={`${name}.name`}
                          component='input'
                          placeholder='ingredient'
                        />
                        <span
                          role='img'
                          aria-label='Remove'
                          onClick={() => fields.remove(index)}
                          style={{ cursor: 'pointer' }}
                        >
                          ❌
                        </span>
                      </div>
                    </div>
                  )
              )
            }
          </FieldArray>
          <div>
            <label>Instructions</label>
          </div>
          <div className='buttons'>
            <button
              type='button'
              onClick={() => push('instructions', undefined)}
            >
              Add Instruction
            </button>
            <button type='button' onClick={() => pop('instructions')}>
              Remove Instruction
            </button>
          </div>
          {/* <FieldArray name='instructions' subscription={{}}>
            {renderInstructionsArray}
          </FieldArray> */}
          <FieldArray
            name='instructions'
            // component={renderInstructions}
            // subscription={{}}
          >
            {({ fields }) =>
              fields.map(
                (name, index) =>
                  console.log('field') || (
                    <div key={name}>
                      <label>Ingredient #{index + 1}</label>

                      <div>
                        <Field
                          name={`${name}.step_number`}
                          component='input'
                          placeholder='step number'
                        />
                        <Field
                          name={`${name}.description`}
                          component='input'
                          placeholder='description'
                        />
                        <span
                          role='img'
                          aria-label='Remove'
                          onClick={() => fields.remove(index)}
                          style={{ cursor: 'pointer' }}
                        >
                          ❌
                        </span>
                      </div>
                    </div>
                  )
              )
            }
          </FieldArray>

          <div className='buttons'>
            <button type='submit' disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type='button'
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      );
    }}
  />
);

export default RecipeForm2;
