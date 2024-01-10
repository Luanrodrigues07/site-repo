import Banner from '@/components/Banner'
import Navbar from '../components/Navbar'
import Projects from '@/pages/Projects'
import Knowledgement from '@/pages/Knowledgement'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-max flex-col">
      <div className="fixed w-full z-10 bg-black bg-opacity-60">
        <Navbar />
      </div>
      <Banner />
      <Knowledgement />
      <Footer />
    </main>
  )
}
