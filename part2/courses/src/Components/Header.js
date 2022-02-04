const Header = (props) => {
  return <h1 key={props.key}>{props.course["name"]}</h1>
}

export default Header