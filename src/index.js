import React from "react"
import ReactDOM from "react-dom"
import { Kennel } from "./components/Kennel"

ReactDOM.render(
  <React.StrictMode>
    <Kennel kennelName='NSS Kennel' address="an address"/>
    <Kennel kennelName='my Kennel' address="another address"/>
    <Kennel />
  </React.StrictMode>,
  document.getElementById('root')
);