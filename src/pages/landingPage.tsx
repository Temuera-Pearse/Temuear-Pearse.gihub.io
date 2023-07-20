import EnterButton from '../components/EnterButton/EnterButton'

function LandingPage() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
        >
          <source
            src="landingBackground/IMG_1417.mp4"
            type="video/mp4"
          ></source>
        </video>
        <EnterButton />
      </div>
    </div>
  )
}

export default LandingPage
