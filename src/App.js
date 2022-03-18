import './App.css';
import Component from './Components/Component';

function App() {
  return (
    <div className="App ml-8 mt-16 mr-8">
      <header>
        <h1 className="flex text-4xl text-slate-800 font-bold">Hello Anthropic!</h1>
      </header>
      <section className="flex flex-col gap-8 mt-8">
        <p className="text-left w-3/5 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim augue, viverra eu finibus et, luctus luctus felis. Quisque ullamcorper tortor vitae diam hendrerit maximus ac ac ligula. In eget lorem vitae risus fringilla tempus. Pellentesque sed ultrices ex. Integer tempor semper consequat. Integer eros est, dignissim quis orci ut, ullamcorper tincidunt eros. Nulla facilisi. Mauris at sollicitudin nunc. Suspendisse posuere orci quam, quis condimentum libero facilisis nec. Morbi posuere lorem eget nibh venenatis cursus.</p>
        <div className="flex justify-start">
          <Component text={`I'm a button`}/>
        </div>
        
      </section>    
      
    </div>
  );
}

export default App;
