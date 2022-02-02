const DisplayAnecdote = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
        {props.anecdote}
        <br/>
        Has {props.points} votes.
    </div>
  )
}

export default DisplayAnecdote