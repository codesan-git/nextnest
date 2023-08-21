'use client'
import Image from 'next/image'
import Skeleton from '@web/app/dashboard/analytics/skeleton'
import Pokemon from '@web/app/dashboard/analytics/pokemon'
import { useQuery } from '@tanstack/react-query'
import { Result, getPokemon } from '@web/app/types'


async function getPokemons(){
  const res = await fetch('https://pokeapi.co/api/v2/ability')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  let filtered = await data.results.map((pokemon:getPokemon, index:number) => {
    let paddedIndex = ('00' + (index + 1)).slice(-3)
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`
    return {
      ...pokemon,
      imageUrl: image
    }
  }) 
  
  return filtered
}

export default function TestLoading() {

  const {status, data : pokemons, error} = useQuery({ queryKey: ['pokemons'], queryFn: getPokemons })
  console.log(pokemons)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {/* <Image src={pokemonLogo} alt='Pokemon logo' width={150} height={150} className='objet-cover'/> */}
     <h2 className='mt-4'>Welcome to Brazil!</h2>
     <div className='w-full md:w-10/12 m-auto flex mt-5 mb-5 flex-col md:grid md:grid-cols-3 md:grid-row-1 md:items-center gap-4 items-center'>
      {Boolean(status === 'loading') && <Skeleton number={15} />}
      {Boolean(status === 'success') && pokemons?.map((pokemon:Result, index:number) => <Pokemon 
      image={pokemon.image} 
      name={pokemon.name} 
      imageUrl={pokemon.imageUrl}
      key={index}/>)}
     </div>
    </main>
  )
}