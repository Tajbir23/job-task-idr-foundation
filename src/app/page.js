import Categories from "./components/Categories/Categories";
import Duas from "./components/Dua/Duas";


export default function Home() {
  return (
    <div className="flex gap-5">
        <div>
            <Categories />
        </div>
        <Duas />
    </div>
  );
}
