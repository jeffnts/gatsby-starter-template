import React, {useState} from "react"

import { Navigation } from "./NavBarStye"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Navigation>
      <h1>Navbar</h1>
    </Navigation>
  )
}

export default NavBar
