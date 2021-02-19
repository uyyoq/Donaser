import Navbar from '../Components/Navbar/navbar'
import Card from '../Components/Card/card'

const MainMenu = () => {
  return (
    <div className="mt-8 mb-14">
      <Card
        profile="/card/profile-ex-1.svg"
        dots="/card/more.svg"
        content="/card/no.jpg"
        progres="40%"
        username="Raditya Dhika"
        donationMoney="261M"
        donationAds="926k"
        like="126k" />
      <Card
        profile="/card/profile-ex-2.svg"
        dots="/card/more.svg"
        content="/card/no.jpg"
        progres="78%"
        username="Jokowi Dodo"
        donationMoney="451M"
        donationAds="1M"
        like="587k" />
      <Navbar
        home="/main-menu/inline/homepage-inline.svg"
        love="/main-menu/inline/heart-inline.svg"
        user="/main-menu/inline/user.svg" />
    </div>
  )
}

export default MainMenu
