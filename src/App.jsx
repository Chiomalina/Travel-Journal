import Header from "./Components/Header"
import Entry from "./Components/Entry"
import data from "./data"

function App() {
    const travelInfo = data.map((info) => {
      return (
        <Entry
        key = {info.id}
        img = {info.img}
        id = {info.id}
        title = {info.title}
        country = {info.country}
        googleMapsLink = {info.googleMapsLink}
        dates = {info.dates}
        text = {info.text}
      />
      )
    })
  
      
  

  return (
    <>
      <Header></Header>
      <main className="container">
        {travelInfo}
      </main>
    </>
    
  )
}

export default App
