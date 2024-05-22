'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Pokemon from '@/components/Pokemon'

function PokemonContent() {
  const searchParams = useSearchParams()
  const pokemonId = Number(searchParams.get('id'))
  return <Pokemon pokemonId={pokemonId} />
}

export default function PokemonView() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PokemonContent />
    </Suspense>
  )
}
