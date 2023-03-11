import './App.css';
import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import {TailSpin} from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const AppId="53c522d6";
  const AppKey="9632fb94f22d01c4a535a7c84398f800";
  const [recipe,setRecipe]=useState([]);
  const [search, setSearch]=useState();
  const [query, setQuery]=useState('chicken');
  const [loading , setLoading]=useState(false);
useEffect(()=>{
  
  getRecipe();
},[query]);


  const getRecipe=async ()=>{
    setLoading(true);
    const resPonce=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}`);
    const data=await resPonce.json();
    console.log(data);
  setRecipe(data.hits);
   setLoading(false);
   toast.success(' Fetched Successfully');
  }
  const updateSearch=e=>{
    setSearch(e.target.value);
  }
  const SearchResult=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="App">
      <ToastContainer />
      <form onSubmit={SearchResult }>
        <div className='Header'>
          <h1 className='HeaderHeading'><i class="fa-solid fa-burger"></i>Food Recipes</h1>
        <div className='search-form'>
          <input className='search-bar' type="text" value={search}  onChange={updateSearch}/>
          <button className='search-button' type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        </div>
      </form>
      <div className='recipe'>
      {
      loading  ?
<TailSpin />
      :
      recipe.map(recipe=>(
        <Recipe
        key={""}
        tittle={recipe.recipe.label}
        Calories={recipe.recipe.calories}
        Image={recipe.recipe.image}
        ingredient={recipe.recipe.ingredients}
        />

      ))}
      </div>
    </div>
  );
}

export default App;
