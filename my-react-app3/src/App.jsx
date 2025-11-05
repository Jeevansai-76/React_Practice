import Student from './Student.jsx'

function App() {
    return(
      <>
        <Student name="Spongbob" age={30} isStudent={true} />
        <Student name="Kelvin" age={42} isStudent={false} />
        <Student name="Marsh" age={80} isStudent={false} />
        <Student name="lara" age="20" isStudent={true} />
        <Student />
      </>
    );
}

export default App
