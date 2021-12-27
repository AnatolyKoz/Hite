import {ErrorMessage, Field, FieldArray, Form, Formik} from 'formik';
import Select from 'react-select';
import {observer} from 'mobx-react';
import {useProductSearchStore, useRecipeWorkbenchStore} from '../../hooks/useStores';
import {ProductSearchStore} from '../../stores/ProductSearchStore';
import AddPhoto from './AddPhoto';

import './RecipeWorkbenchPage.scss';
import Statuses from '../../utilities/Statuses';
import {RecipeWorkbenchStore} from '../../stores/RecipeWorkbenchStore';
import {siPrefixesVaribalse} from '../../domain/Unit/SiPrefixes';
import WorkbenchProduct from '../../domain/Product/WorkbenchProduct';
import Unit from '../../domain/Unit/Unit';
import UnitType from '../../domain/Unit/UnitRype';


const initialValues = {
  recipeCookingStage: [
    {
      header: '',
      paragraph: '',
    },
  ],
};

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    margin: '0 0',
    width: '20rem',
  }),
};

const unitsStyle = {
  container: (provided, state) => ({
    ...provided,
    margin: '0 0',
    width: '10rem',
  }),
};

const complication = [
  {
    'label': 5,
    'value': 5,
  },
  {
    'label': 4,
    'value': 4,
  },
  {
    'label': 3,
    'value': 3,
  },
  {
    'label': 2,
    'value': 2,
  },
  {
    'label': 1,
    'value': 1,
  },
];

const servingsAtTime = [
  {
    'label': 4,
    'value': 4,
  },
  {
    'label': 2,
    'value': 2,
  },
  {
    'label': 1,
    'value': 1,
  },
];


// TODO Какой-то ад
const RecipeWorkbenchPage = observer(() => {
  const recipeWorkbenchStore: RecipeWorkbenchStore = useRecipeWorkbenchStore();

  const productPreviewStore: ProductSearchStore = useProductSearchStore();

  // ЕСЛИ УБРАТЬ ЭТУ СТРОКУ ВСЕ СЛОМАЕТСЯ
  // НE ТРОГАТЬ ЕЕ
  if (productPreviewStore.status === Statuses.READY) console.clear();

  return <div className="RecipeWorkbenchPage">
    {/* Basic info of recipe block */}
    <div>
      <Select options={complication}/>
      <input onChange={(name) => recipeWorkbenchStore.setRecipeName(name.target.value)}/>
      <Select options={servingsAtTime}/>
    </div>


    <AddPhoto/>
    <div className="RecipeWorkbenchPage__basicInfo">
      <div className="RecipeWorkbenchPage__basicInfo-block">
        <h4> Calorific value </h4>
        <h3>{(recipeWorkbenchStore.calorificValue===null)?0:recipeWorkbenchStore.calorificValue}</h3>
        <h4> Kcal </h4>
      </div>
      <div className="RecipeWorkbenchPage__basicInfo-block">
        <h4> carbohydrates </h4>
        <h3> {(recipeWorkbenchStore.carbohydrates===null)?0:recipeWorkbenchStore.carbohydrates} </h3>
        <h4> mg </h4>
      </div>
      <div className="RecipeWorkbenchPage__basicInfo-block">
        <h4>  squirrels </h4>
        <h3> {(recipeWorkbenchStore.squirrels===null) ? 0 : recipeWorkbenchStore.squirrels } </h3>
        <h4> mg </h4>
      </div>
      <div className="RecipeWorkbenchPage__basicInfo-block">
        <h4> fats  </h4>
        <h3> { (recipeWorkbenchStore.fats===null) ? 0 : recipeWorkbenchStore.fats } </h3>
        <h4> mg </h4>
      </div>
    </div>

    {/*
       COMPONENT LIST
    */}

    <div className="RecipeWorkbenchPage__components">
      {
        recipeWorkbenchStore.recipeProducts.map((workbenchProduct: WorkbenchProduct) =>
          <div className="RecipeWorkbenchPage__components-component" key={workbenchProduct.name}>
            <span className="RecipeWorkbenchPage__components-component-span">
              {workbenchProduct.name}</span>
            <span className="RecipeWorkbenchPage__components-component-span">
              { workbenchProduct.recipeProduct.value.value }</span>
            <span className="RecipeWorkbenchPage__components-component-span">
              { siPrefixesVaribalse[workbenchProduct.recipeProduct.value.SiPrefix / 3].text}</span>
          </div>,
        )
      }
    </div>

    {/*
        ADD COMPONENT
    */}
    <div className='RecipeWorkbenchPage__add-component'>
      <div className='RecipeWorkbenchPage__add-component-form'>
        <Select styles={customStyles} options={productPreviewStore.productPreviews}
          onChange={(value) => {
            recipeWorkbenchStore.name = value.name;
            recipeWorkbenchStore.productId = value.componentID;
          }}
          onFocus={() => productPreviewStore.getProductPreviews()}
          getOptionValue={(option) => option.componentID.toString()}
          getOptionLabel={(option) => option.name}/>
        <input className="RecipeWorkbenchPage__add-component-input" type='number'
          value={recipeWorkbenchStore.productNumber} onChange={(number) =>
            recipeWorkbenchStore.setProductNumber(parseInt(number.target.value))}/>
        <Select styles={unitsStyle} options = {siPrefixesVaribalse}
          onChange={(value) => {
            recipeWorkbenchStore.productSiPrefixes = value.prefix;
          }}
          getOptionLabel={(option) => option.text}
          getOptionValue={(option) => option.prefix.toString()}/>
      </div>
      <button className="RecipeWorkbenchPage__add-component-button"
        onClick={() => recipeWorkbenchStore
            .addProduct(new WorkbenchProduct(recipeWorkbenchStore.name,
                recipeWorkbenchStore.productId,
                new Unit(recipeWorkbenchStore.productNumber,
                    UnitType.MASS, recipeWorkbenchStore.productSiPrefixes)))}>
      Добавить
      </button>
    </div>

    {/*
        ADD STAGE
    */}
    <Formik initialValues={initialValues} onSubmit={(a) => console.log(a)}>
      {({values}) => (
        <>
          <Form className="RecipeWorkbenchPage__recipeSteps">
            <FieldArray name='recipeCookingStage'>
              {({insert, remove, push}) => (
                <>
                  <h2 className="RecipeWorkbenchPage__recipeSteps-header">Ход приготовления</h2>
                  {
                    values.recipeCookingStage.length > 0 &&
                    values.recipeCookingStage.map((friend :any, index: number) => (
                      <div key={index} className='RecipeWorkbenchPage__recipeSteps-inputBlock'>
                        <div className="RecipeWorkbenchPage__recipeSteps-inputBlock-header">
                          <Field name={`recipeCookingStage.${index}.header`}
                            placeholder="Header" type="text"
                            className='RecipeWorkbenchPage__recipeSteps-inputBlock-header-input'/>
                          <ErrorMessage name={`recipeCookingStage.${index}.header`}
                            component="div" className="field-error"/>
                        </div>

                        <div className="RecipeWorkbenchPage__recipeSteps-inputBlock-paragraph">
                          <Field name={`recipeCookingStage.${index}.paragraph`}
                            placeholder="paragraph" type="text"
                            className='RecipeWorkbenchPage__recipeSteps-inputBlock-paragraph-input'>
                          </Field>
                          <ErrorMessage name={`recipeCookingStage.${index}.paragraph`}
                            component="div" className="field-error"/>
                        </div>

                        <button type="button" className="secondary" onClick={() => remove(index)}>
                        X
                        </button>
                      </div>))
                  }
                  <button type="button" className="RecipeWorkbenchPage__recipeSteps__btn"
                    onClick={() => push({header: '', paragraph: ''})}>
                    Add stage
                  </button>
                </>)
              }
            </FieldArray>
          </Form>
        </>
      )}
    </Formik>

    <button onClick={() => recipeWorkbenchStore.createRecipe()}> create </button>
  </div>;
});

export default RecipeWorkbenchPage;
