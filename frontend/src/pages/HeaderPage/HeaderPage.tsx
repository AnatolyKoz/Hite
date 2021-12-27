import {observer} from 'mobx-react';
import {useHistory} from 'react-router';
import Select from 'react-select';
import {useRecipeSearchStore} from '../../hooks/useStores';
import {RecipeSearchStore} from '../../stores/RecipeSearchStore';
import './HeaderPage';


const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
  }),
  input: (provided: any, state: any) => ({
    ...provided,
  }),
  container: (provided: any, state: any) => ({
    ...provided,
    borderRadius: '50%',
    margin: '0 auto',
    zIndex: '4',
  }),
};

const HeaderPage = observer(() => {
  // redirect func
  const history = useHistory();
  const redirectToRecipe = (id: number) => {
    history.push('/recipe?id=' + id);
  };

  const recipeSearchStore: RecipeSearchStore = useRecipeSearchStore();

  // ЕСЛИ УБРАТЬ ЭТУ СТРОКУ ВСЕ СЛОМАЕТСЯ  ХРЕН ЗНАЕТ ПОЧЕМУ
  // НE ТРОГАТЬ ЕЕ
  if (recipeSearchStore.status) console.clear();

  return <div className='HeaderPage'>
    <Select options={recipeSearchStore.recipePreviews} styles={customStyles}
      onChange={(recipePreview: any) => redirectToRecipe(recipePreview.id)}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id}
      onFocus={() => recipeSearchStore.getRecipePreviews()}
    />
  </div>;
});

export default HeaderPage;
