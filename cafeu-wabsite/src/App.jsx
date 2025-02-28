import Aboutus from "./camponat/Aboutus"
import Contact from "./camponat/Contact"
import Feacher from "./camponat/Feacher"
import Footer from "./camponat/Footer"
import Homepage from "./camponat/Homepage"
import Logosider from "./camponat/Logosider"
import Maytoorder from "./camponat/Maytoorder"
import Mean from "./camponat/Mean"

import OpeningTimes from "./camponat/OpeningTimes"
import OurTeam from "./camponat/OurTeam"
import StayInformed from "./camponat/StayInformed"


function App() {

  return (
    <>
    <Homepage/>
    <main>
      <section>
        <Feacher/>
      </section>
      <section>
        <StayInformed/>
      </section>
      <section>
        <Aboutus/>
      </section>
      <section>
        <Mean/>
      </section>
      <section>
        <Maytoorder/>
      </section>
      <section>
        <OpeningTimes/>
      </section>
      <section>
        <OurTeam/>
      </section>
      <Contact/>
      <section>
        <Footer/>
      </section>
     
    </main>
    </>
  )
}

export default App
