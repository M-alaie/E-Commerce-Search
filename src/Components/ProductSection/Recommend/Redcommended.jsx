import Button from "../../Customize/Button.jsx/Button"


const btnName=[
    {name:'All Product',value:''},
    {name:'Nike',value:'Nike'},
    {name:'Adidas',value:'Adidas'},
    {name:'Puma',value:'Puma'},
    {name:'Vans',value:'Vans'}]
  


const Redcommended = ({handleRecommend}) => {

    const buttonMap=btnName.map((btn,index)=>(
        <Button Name={btn.name} value={btn.value} 
        handleRecommend={handleRecommend} key={index}/>
    ))
    
     
  return (
    <div className="ml-8">
        <h1 >Recommended</h1>
        <div>
            {buttonMap}

        </div>
    </div>
  )
}

export default Redcommended