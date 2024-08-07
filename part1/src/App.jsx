const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.excerise} </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} excerise={props.excerises[0]} />
      <Part part={props.parts[1]} excerise={props.excerises[1]} />
      <Part part={props.parts[2]} excerise={props.excerises[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p> Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'  
  const exercises3 = 14

  return (
    <>
      <Header course={course} />   
      <Content parts={[part1, part2, part3]} excerises={[exercises1, exercises2, exercises3]} />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </>
  )
}

export default App