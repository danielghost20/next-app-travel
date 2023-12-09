import Image from 'next/image'
import Option from '@/components/Option'

export default function Home() {
  return (
    <>
      <header className='w-full relative flex justify-center'>
        <Image className='absolute -z-10 brightness-50 top-0 h-[600px] object-cover w-full' src='/images/laguna.jpg' alt='place-china-image' width={1500} height={1200} />
        <nav className='w-full h-14 border-b-2 fixed top-0 border-b-gray-400'>

        </nav>
        <div className='w-full mt-[14%] gap-4 m-auto flex items-center flex-col  p-3'>
          <div className='max-w-4xl  w-full'>
        <h1 className='text-white text-4xl font-bold text-center'>VIAJA A DIFERENTES PARTES DEL MUNDO CON AEREO-GHOST</h1>
        <p className=' text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A illum expedita quas voluptate nemo sit temporibus sapiente corporis quibusdam necessitatibus est architecto, dolore repellat provident optio quo sed molestiae eaque.</p>
          </div>
        <div className='max-w-screen-2xl rounded-2xl mt-10 bg-white h-64 border-2 w-full '>

        </div>
        </div>
      </header>
      <main className='mt-20'>
        <h2 className='text-2xl text-center font-semibold'>Lugares recomendados</h2>
        <section className='w-full px-3 flex mt-5 justify-center gap-4 flex-wrap'>
          <Option />
          <Option className='bg-transparent border-2 text-black' />
          <Option className='bg-transparent border-2 text-black' />
          <Option className='bg-transparent border-2 text-black' />
          <Option className='bg-transparent border-2 text-black' />

        </section>
      </main>
    </>
  )
}
