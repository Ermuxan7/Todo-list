
import './App.css'
import Card from './components/Card'


function App() {

    return(
        <div className='mx-10'>
            <div className='grid  lg:grid-cols-2 gap-x-6 gap-y-8 my-24'>
                <Card />            
                <Card />            
                <Card />            
            </div>       
        </div>
    )
}

export default App
