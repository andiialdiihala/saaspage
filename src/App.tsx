import { Hero } from "./components/sections/Hero";
import { Header } from "./components/sections/Header";
import { Brand } from "./components/sections/Brand";
import { ReactLenis } from "lenis/react";
import { Feature } from "./components/sections/Feature";
import { Process } from "./components/sections/Process";
import { Overview } from "./components/sections/Overview";
import { Review } from "./components/sections/Review";
import { Blog } from "./components/sections/Blog";
import { Cta } from "./components/sections/Cta";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <ReactLenis root>
      <div className="relative isolate overflow-hidden">
        <Header />

        <main>
          <Hero />
          <Brand />
          <Feature />
          <Process />
          <Overview />
          <Review />
          <Blog />
          <Cta />
        </main>

        <Footer />
      </div>
    </ReactLenis>
  )
}