 

const Button = ({value,Name,handleRecommend}) => {
 const handleClick=()=>{
  handleRecommend(value)
 }
  return (
    <>
    <button className="btn" value={value} onClick={handleClick}>{Name}</button>
    </>
  )
}

export default Button