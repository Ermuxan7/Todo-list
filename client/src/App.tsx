import './App.css'
import Card from './components/Card'
import AddModal from './components/ui/modal/AddModal'
import useStore from './store/store'

function App() {
    const {auth} = useStore()

    return(
    <div>
        {auth ? (
                <div className='mx-10 h-screen '>
                    <div className='my-24'>
                        <Card />                    
                    </div>
                    <AddModal />    
                </div>
            ):(
                <div className='flex items-center justify-center h-screen text-6xl font-bold'>
                    <h1 className='mt-24'>Please Registration</h1>
                </div>
            )
        }
        </div>
    )
}

export default App
