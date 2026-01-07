import Hero from "../components/Hero"
import SideNews from "../components/SideNews"
import MainNewsSection from "./main/MainNewsSection"
import RightSideNews from "../components/RightSideNews"

export default function Home() {

  return (
    <div className="bg-white max-w-7xl mx-auto ">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t-2 border-gray-300">
        
        <div className="order-3 md:order-1 lg:order-1">
          <SideNews />
        </div>

        <div className="order-1 md:order-2 lg:order-2 lg:col-span-2 space-y-8 md:border-l-2 lg:border-r-2 border-gray-300">
          <Hero />
          <div className="hidden lg:block">
            <MainNewsSection />
          </div>
        </div>

        <div className="order-2 block lg:hidden">
          <MainNewsSection />
        </div>

        <div className="order-4 md:order-3 lg:order-3">
          <RightSideNews />
        </div>
        
      </main>
    </div>
  )
}