import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <section className="section text-center">
        <h1 className="text-4xl font-heading mb-4">Saptrangi Kurti & Sarees</h1>
        <p className="text-lg text-dark/70 mb-8 font-sans">
          Elegance in every thread ✨
        </p>

        <div className="space-x-4">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-outline">Explore</button>
        </div>
      </section>
    </div>
  );
}
