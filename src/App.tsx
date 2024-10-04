import './App.css'
import arrowIcon from './assets/icon-arrow.svg'

function App() {
  return (
    <main>
      <header>
        <h1 className='app-title'>IP Address Tracker</h1>
        <form>
          <input type='text' placeholder='192.212.174.101' />
          <button type='submit'><img src={arrowIcon} /></button>
        </form>
      </header>
      <section>
      </section>
    </main>
  )
}

export default App
