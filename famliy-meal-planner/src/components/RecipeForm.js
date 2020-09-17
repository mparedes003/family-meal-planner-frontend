import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { renderField, renderIngredients, renderInstructions } from './fields';

class RecipeForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Add A Recipe</h2>
          <Field
            name='title'
            type='text'
            component={renderField}
            label='Recipe Title'
          />
          <FieldArray name='ingredients' component={renderIngredients} />
          <FieldArray name='instructions' component={renderInstructions} />

          <button type='submit' disabled={submitting}>
            Submit
          </button>
          <button
            type='button'
            disabled={pristine || submitting}
            onClick={reset}
          >
            Reset
          </button>
        </form>
      </div>
    );
  }
}

// RecipeForm3 = reduxForm({
//   form: 'add-recipe',
// })(RecipeForm3);

// export default connect(
//   null,
//   mapDispatchToProps
// )(RecipeForm3);

export default reduxForm({
  form: 'addRecipeForm3',
  // validate,
})(RecipeForm);

// import React from 'react';
// import { Field, FieldArray, reduxForm } from 'redux-form';
// import validate from './validate';

// const RecipeForm3 = (props) => {
//   const {
//     array: { push },
//     handleSubmit,
//     pristine,
//     reset,
//     submitting,
//   } = props;
//   // console.log('props', props);
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Recipe Title</label>
//         <Field
//           name='title'
//           key='title'
//           component={(title) => (
//             <div>
//               <input type='text' {...title} placeholder='Recipe Title' />
//               {title.touched && title.error && <span>{title.error}</span>}
//             </div>
//           )}
//         />
//       </div>
//       <FieldArray
//         name='ingredients'
//         component={(ingredients) => (
//           <ul>
//             <li>
//               <button type='button' onClick={() => push('ingredients', {})}>
//                 Add Ingredient
//               </button>
//             </li>
//             {props.ingredients.map((ingredient, ingredientIndex) => (
//               <li key={ingredientIndex}>
//                 <button
//                   type='button'
//                   title='Remove Ingredient'
//                   onClick={() => ingredients.remove(ingredientIndex)}
//                 />
//                 <h4>Ingredient #{ingredientIndex + 1}</h4>
//                 <div>
//                   <label>Quantity</label>
//                   <Field
//                     name={`${ingredient}.quantity`}
//                     component={(quantity) => (
//                       <div>
//                         <input
//                           type='text'
//                           {...quantity}
//                           placeholder='Quantity'
//                         />
//                         {quantity.touched && quantity.error && (
//                           <span>{quantity.error}</span>
//                         )}
//                       </div>
//                     )}
//                   />
//                 </div>
//                 <div>
//                   <label>Measurement</label>
//                   <Field
//                     name={`${ingredient}.measurement`}
//                     component={(measurement) => (
//                       <div>
//                         <input
//                           type='text'
//                           {...measurement}
//                           placeholder='Measurement'
//                         />
//                         {measurement.touched && measurement.error && (
//                           <span>{measurement.error}</span>
//                         )}
//                       </div>
//                     )}
//                   />
//                 </div>
//                 <div>
//                   <label>Ingredient</label>
//                   <Field
//                     name={`${ingredient}.name`}
//                     component={(name) => (
//                       <div>
//                         <input type='text' {...name} placeholder='Ingredient' />
//                         {name.touched && name.error && (
//                           <span>{name.error}</span>
//                         )}
//                       </div>
//                     )}
//                   />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       />
//       <FieldArray
//         name='instructions'
//         component={(instructions) => (
//           <ul>
//             <li>
//               <button type='button' onClick={() => push('instructions', {})}>
//                 Add Instruction
//               </button>
//             </li>
//             {props.instructions.map((instruction, instructionIndex) => (
//               <li key={instructionIndex}>
//                 <button
//                   type='button'
//                   title='Remove Instruction'
//                   onClick={() => instructions.remove(instructionIndex)}
//                 />
//                 <h4>Instruction #{instructionIndex + 1}</h4>
//                 <div>
//                   <label>Step Number</label>
//                   <Field
//                     name={`${instruction}.step_number`}
//                     component={(step_number) => (
//                       <div>
//                         <input
//                           type='text'
//                           {...step_number}
//                           placeholder='Step Number'
//                         />
//                         {step_number.touched && step_number.error && (
//                           <span>{step_number.error}</span>
//                         )}
//                       </div>
//                     )}
//                   />
//                 </div>
//                 <div>
//                   <label>Description</label>
//                   <Field
//                     name={`${instruction}.description`}
//                     component={(description) => (
//                       <div>
//                         <input
//                           type='text'
//                           {...description}
//                           placeholder='Description'
//                         />
//                         {description.touched && description.error && (
//                           <span>{description.error}</span>
//                         )}
//                       </div>
//                     )}
//                   />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       />
//       <div>
//         <button type='submit' disabled={submitting}>
//           Submit
//         </button>
//         <button type='button' disabled={pristine || submitting} onClick={reset}>
//           Clear Values
//         </button>
//       </div>
//     </form>
//   );
// };

// export default reduxForm({
//   form: 'fieldArrays', // a unique identifier for this form
//   validate,
// })(RecipeForm3);
