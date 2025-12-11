import LeftSidebar from './components/LeftSidebar.jsx'
import MainContent from './components/MainContent.jsx'
import Header from './components/Header.jsx'

function App() {
    return (
        <div >
            <div>
                <Header />
            </div>
            <div className="mainContainer">
                <LeftSidebar />
                <MainContent />
            </div>

        </div>
    )
}

export default App