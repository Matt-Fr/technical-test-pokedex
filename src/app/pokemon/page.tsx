'use client'

import Pokemon from '@/components/Pokemon'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export default function PokemonView() {
  const searchParams = useSearchParams()

  const pokemonId = Number(searchParams.get('id'))
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Pokemon pokemonId={pokemonId} />
    </Suspense>
  )
}
