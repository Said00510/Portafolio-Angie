import Header from "../../components/Home/Header"
import Hero from "../../components/Home/Hero"
import HomeCard from "../../components/Home/CardHeaderInfo"

function Home (){
    return(
        <div>
        <Header/>
        <div className="relative">
        <HomeCard/>
        </div>
        <Hero/>
        </div>
    )
}

export default Home