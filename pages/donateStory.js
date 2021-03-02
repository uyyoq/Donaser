const { default: Donate } = require("../Components/DonateStory/Donate")
const { default: Navbar } = require("../Components/Navbar/navbar")

const DonateStory = () => {
  return (
    <div>
      <Donate 
       profile1="/donate-story/profile-ex-1.svg"
       profile2="/donate-story/profile-ex-2.svg"
       profileBlur="/donate-story/profile-ex-3.svg"
       line="/donate-story/line.svg"
       title1="Yatim piatu papua butuh bantuan."
       title2="Negara banyak hutang ayo kita patungan!."
       title3="SD Sukamaju gentengnya roboh ayo kita bantu!."
      />
      <Navbar
        home="/main-menu/inline/homepage-inline.svg"
        love="/main-menu/fullfield/love-fullfilled.svg"
        user="/main-menu/inline/user.svg"
      />
    </div>
  )
}

export default DonateStory