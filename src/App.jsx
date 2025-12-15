import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {


    return (
        <div className='parentDiv'>
            <div>
                <Header />
            </div>
            <div >
                <MainContent />
            </div>
            <div className='footerDiv'>
                <Footer />
            </div>
        </div>
    )
}

export default App