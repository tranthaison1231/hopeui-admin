import Discover from '../components/Discover'
import Header from '../components/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'

const Home = (): JSX.Element => {
  return (
    <div>
      <Title />
      <Discover />
      <Footer />
    </div>
  )
}

export default Home
