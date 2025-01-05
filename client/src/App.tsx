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
                    <div className='grid  lg:grid-cols-2 gap-x-6 gap-y-8 my-24'>
                        <Card />                    
                    </div>
                    <AddModal />    
                </div>
            ):(
                <>
                <h1 className='mt-24'>Please Registration</h1>
                </>
            )
        }
        </div>
    )
}

export default App
