import './App.css';
import Component from './Components/Component';

function App() {
  return (
    <div className="App ml-8 mr-8 grid grid-cols-1 md:grid-cols-2 bg-slate-200">
      <section className="w-2/8"> 
        <h1>Controls</h1>
        <div>
            <div>Server</div>
            <input></input>
        </div>
        <div>
            <div>Top P</div>
            <input></input>
        </div>
        <div>
            <div>Top K</div>
            <input></input>
        </div>
        <div>
            <div>Temp</div>
            <input></input>
        </div>
        <div>
            <div>Sample Length</div>
            <input></input>
        </div>
        <div>
            <div>Stop sequence</div>
            <input></input>
        </div>
      </section>    
      
      <section className="w-6/8 flex flex-col">
        <button
          className="p-8 bg-black text-white"
          onClick={() => {
            document.querySelector('.inputText').innerHTML += `
              <span class="bg-orange-800 text-white"> This will be added</span>
            `
          }}>
          Button
        </button>
        <Component />
      </section>
    </div>
  );
}

export default App;
