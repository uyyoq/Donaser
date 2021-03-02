const { default: Profile } = require("../Components/Profile/profile")
const { default: Navbar } = require("../Components/Navbar/navbar")

const ProfileMenu = () => {
  return (
    <div>
      <Profile
        pictureProfile="/profile-menu/profile-ex-2.svg"
        settingProfile="/profile-menu/icon-setting.svg"
        userName="Baim Sujatmiko"
        accIg="baimsujatmiko"
        igImg="/profile-menu/instagram-icon.svg"
        badgeImg="/profile-menu/star-badge.svg"
        badge="Master"
      />
      <Navbar
        home="/main-menu/inline/homepage-inline.svg"
        love="/main-menu/inline/heart-inline.svg"
        user="/main-menu/fullfield/user-fullfilled.svg"
      />
    </div>
  )
}

export default ProfileMenu