import "../styles/styles.css"

import "jquery"

import Dywc from "./modules/Dywc"
import CoockieNotice from "./modules/CoockieNotice"

let dywc = new Dywc()
let cookieNotice = new CockieNotice()

let modal




if (module.hot) {
  module.hot.accept()
}