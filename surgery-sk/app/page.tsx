import Nav from '@/components/Nav'
import { Button } from '@/components/ui/button'


export default function Home() {
  return (
    <main className="flex p-24">
      <Nav />
      <section className='py-24 flex flex-col items-center text-center gap-8'>
        <h1 className='text-4xl font-bold'>Zack is Awesome</h1>
        <p className='text-2xl text-primary'>This is a paragraph about Zack Bunch</p>
      </section>
      <div className='flex gap-6 py-6'>
        <Button>Learn More</Button>
        <Button>Enroll Now</Button>
      </div>
    </main>
  )
}

