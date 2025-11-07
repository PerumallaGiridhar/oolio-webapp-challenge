import Catalogue from "@/components/catalogue";
import ViewCart from "@/components/view-cart";

function App() {
  return (
    <div className="flex min-h-screen justify-center bg-[#FCF8F5]">
      <div className="flex flex-row w-fit gap-4 p-10">
        <div className="flex flex-col gap-y-7">
          <p className="text-4xl font-bold">Desserts</p>
          <Catalogue />
        </div>
        <div className="hidden md:block"> 
          <ViewCart />
        </div>
        
      </div>
    </div>
  );
}

export default App;
