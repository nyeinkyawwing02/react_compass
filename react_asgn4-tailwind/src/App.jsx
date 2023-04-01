import Card from "./components/Card"
import Heading from "./components/Heading"
import MainLayout from "./layout/MainLayout"

function App() {
  return (
    <MainLayout>
      <Heading title="Your Choice Plans" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita tenetur, excepturi quos quam sequi voluptatem repellat animi fugiat suscipit? Placeat voluptates quas non est ab aut corporis distinctio quia odio." />
      <Card />
    </MainLayout>
  )
}

export default App
