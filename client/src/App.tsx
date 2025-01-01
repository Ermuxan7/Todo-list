
import './App.css'
import Card from './pages/Card'


function App() {

    return(
        <div className='mx-10'>
            <div className='grid grid-cols-2 gap-5 mt-24'>
                <Card />            
                <Card />            
                <Card />            
                <Card />            
            </div>       
        </div>
    )
}

export default App
