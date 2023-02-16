import { type NextPage } from 'next'
import Head from 'next/head'

import { api } from '~/utils/api'

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' })

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='h-screen w-screen flex flex-col justify-center items-center bg-zinc-800 text-zinc-100'>
        <section className='p-8'>
          <h1 className='text-2xl text-center'>Which Pokémon is Rounder?</h1>
        </section>
        <section className='border rounded p-8 flex items-center justify-between gap-8 max-w-2xl'>
          <div className='h-32 w-32 bg-pink-600' />
          <div>VS</div>
          <div className='h-32 w-32 bg-pink-600' />
        </section>
      </main>
    </>
  )
}

export default Home
