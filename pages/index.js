import Footer from '../components/Footer'
import Header from '../components/Header'
import Homepage from '../components/Homepage'

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-auto justify-between scroll-smooth">
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}
