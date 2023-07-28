/* eslint-disable no-empty-pattern */
import { useCounter,useFetch, useForm } from "../hooks";
import { ErrorMessage, LoadingQuotes, Quotes } from "./";



export const MultipleCustomHooks = () => {

    const { counter, increment, decrement, onSubmit } = useCounter(1);
   
    // eslint-disable-next-line no-unused-vars
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    
    const {name, types, sprites, id} = !!data && data

    const  { onInputChange, namePokemon } =  useForm({
        namePokemon:''
    });

 
    
    return ( 
        <>
            <h1 className="text-center">Pokedex Pokemon</h1>
            <hr />
            {
                (isLoading)
                    ? (
                        <LoadingQuotes />
                    )
                    : (
                        <Quotes name={name} types={types} sprites={sprites} id={id} />
                    )
            }

            {
                (hasError) && <ErrorMessage />
                    
                   
            }

            <div className="container">

            <div className="row flex-sm-column flex-md-row align-items-center justify-content-between gap-3">

                <button 
                    disabled={ isLoading } 
                    className = "btn btn-primary m-0 col-sm-6 col-md-3 w-50 m-auto"
                    onClick={ () => decrement (1) }>
                    Previous Pokemon
                </button>


            <form onSubmit={ onSubmit } className="text-center col-sm-6 col-md-3">
                <input 
                    type="number" 
                    className=""
                    placeholder="Escribe un numero #pokemon"
                    name="namePokemon"
                    value={ namePokemon }
                    onChange={ onInputChange }    
                    />
            </form>

                <button 
                    disabled={ isLoading } 
                    className = "btn btn-success m-0 col-sm-6 col-md-3 w-50 m-auto" 
                    onClick={ () => increment(1) }>
                    Next Pokemon
                </button>
            </div>
            </div>
        </>
     );
}
 
//* El doble !! transforma el undefined en treu y luego en false, luego compara si la data es verdadera
//* && se ejecutara la data[0]
     