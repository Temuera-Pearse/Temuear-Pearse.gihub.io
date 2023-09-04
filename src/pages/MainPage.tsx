import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Title from '../components/Title/Title'

import SymbolBar from '../components/SymbolBar/SymbolBar'
import ProjectBoxContent from '../components/ProjectBox/ProjectBoxContent'

function MainPage() {
  return (
    <div className="min-h-screen grid grid-rows-2">
      <div className="z-20 flex justify-center items-center h-screen overflow-hidden">
        <video
          className="fixed inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source
            src="landingBackground/IMG_1419.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="z-0 bg-scroll absolute inset-0 bg-opacity-50">
        <div className="flex-wrap">
          <div className="w-full flex justify-center">
            <Title />
          </div>
          <div className="flex justify-center">
            <SymbolBar />
          </div>

          <div className="w-full flex justify-center mx-10 my-10">
            <Header />
          </div>

          <br />
          <div className="flex mx-10 my-10">
            <ProjectBoxContent />
          </div>
          <br />
          <div className="flex mx-10 my-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
