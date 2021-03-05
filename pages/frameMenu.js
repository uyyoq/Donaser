const { default: Frame } = require("../Components/Frame/frame")

const FrameMenu = () => {
  return (
    <div className="md:w-4/5 md:max-w-xs mx-auto mb-7">
    <Frame
    content="/card/no.jpg"
    title="Yatim Piatu Papua Butuh Bantuan Atap Sekolah Hampir Rubuh"
    progres="40%"
    nominal="RP.750.720.000"
    money="Rp.250.720.000,-"
    ads="Rp.500.000.000,-"
    />
    </div>
  )
}

export default FrameMenu