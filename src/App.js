import './App.css';

const aaa = fetch(`https://api.themoviedb.org/3/movie/39860/credits?api_key=0f7071e202153419eb1f1c3088d789f4&language=en-US`)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(
      new Error(`Error`)
    );
  });

function App() {
  
  console.log(aaa.then(data => console.log(data)));
  return (
    <h1>This is App</h1>
  );
}

export default App;
