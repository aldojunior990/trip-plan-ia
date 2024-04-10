import { RoadMapContainer } from "./components/roadmap-container";
import { Header } from "./components/Header";

function App() {
  return (
    <main className="bg-neutral-50 w-screen h-screen flex flex-col justify-start items-center">
      <div className="w-screen px-8 sm:px-8 md:px-32 lg:px-64 xl:px-96">
        <Header />
        <RoadMapContainer />
      </div>
    </main>
  );
}

export default App;
