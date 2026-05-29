import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/sections/Hero"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App