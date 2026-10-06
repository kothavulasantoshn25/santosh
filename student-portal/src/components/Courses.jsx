function Courses() {
  return (
    <section id="courses" className="courses">
      <h2>My Courses</h2>

      <div className="course-container">

        <div className="course-card">
          <h3>Computer Networks</h3>
          <p>Learn about networking and communication.</p>
        </div>

        <div className="course-card">
          <h3>Artificial Intelligence</h3>
          <p>Learn the basics of AI and intelligent systems.</p>
        </div>

        <div className="course-card">
          <h3>Quantum Computing</h3>
          <p>Learn about qubits and quantum computers.</p>
        </div>

        <div className="course-card">
          <h3>Web Development</h3>
          <p>Learn HTML, CSS, JavaScript and React.</p>
        </div>

      </div>
    </section>
  );
}

export default Courses;