import { PokemonClient } from 'pokenode-ts'
import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const pokemonRouter = createTRPCRouter({
  getPokemonById: publicProcedure.input(z.object({ id: z.number() })).query(async ({ input }) => {
    const api = new PokemonClient()
    const pokemon = await api.getPokemonById(input.id)

    return pokemon
  })
})
