'use client'
import React, { Suspense } from 'react'
import Pokemon from '@/components/Pokemon'
import { useSearchParams } from 'next/navigation'

export default function PokemonView() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PokemonLoader />
    </Suspense>
  )
}

function PokemonLoader() {
  const searchParams = useSearchParams()
  const pokemonId = Number(searchParams.get('id'))
  return <Pokemon pokemonId={pokemonId} />
}
