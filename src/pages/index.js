import React from "react"
import "./index.css"
import Layout from "../components/Layout"
import Helm from "../components/Helm"

export default function Home() {
  return (
    <div>
      <Layout>
        <Helm title="Home" />
        <h1>DIARY OF AN IMPOSTOR</h1>
        <img
          src="https://via.placeholder.com/200"
          alt="home-img"
          className="index-image"
        />
        <p className="index-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum
          voluptas eaque necessitatibus nulla? Cum voluptatem, quod deleniti
          saepe expedita numquam, dolorem facilis asperiores distinctio ipsam,
          delectus libero reiciendis eum.
        </p>
      </Layout>
    </div>
  )
}
