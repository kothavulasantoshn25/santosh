import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <section id="home" className="welcome">
          <h1>Welcome to Student Portal</h1>
          <p>Manage your profile and courses in one place.</p>
        </section>

        <Profile />

        <Courses />
      </main>

      <Footer />
    </div>
  );
}

export default App;