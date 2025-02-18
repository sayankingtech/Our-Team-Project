import Navbar from "./components/nav"
import Banner from "./components/banner"
import OfferBanner from "./components/offerBanner"
import Category from "./components/category"
import CategoryHighlight from "./components/categoryHighlight"
import Footer from "./components/footer"
import CategoryPage from "./components/categoryPage"

const App = () => {

  return (
    <>
      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      {/* <OfferBanner></OfferBanner> */}
      {/* <Category></Category> */}
      {/* <CategoryHighlight></CategoryHighlight> */}
      <CategoryPage></CategoryPage>
      <Footer></Footer>
    </>
  )
}

export default App