import AllChartsParent from "./Components/AllChartsParent";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <>
      <div className="App max-w-[1076px] w-full mx-auto ">
        <AllChartsParent />
      </div>
      <div className="mt-[200px] max-w-[1600px] w-full mx-auto ">
        <Dashboard />
      </div>
    </>
  );
}

export default App;
