const PriceName = [  {Price:'All',value:''}, 
{Price:'$0-$50', value:'50'},
{Price:'$50-$100', value:'100'},
{Price:'$100-$150', value:'150'},
{Price:'Over $200', value:'200'},

]




const Price = ({handleSidebar}) => {
    return (
        <div>
            <h2 className="sidebarTitle">Price</h2>

            <div>
                {PriceName.map(({Price,value}, index) => (
                    <label htmlFor={Price} className="flex flex-row gap-2  items-center" key={index}  >
                        <input type="radio" name='Price' className="w-radio h-radio" onClick={handleSidebar} value={value} id={Price} aria-label={Price} />
                        <p className="leading-relaxed font-normal text-gray-400">{Price}</p>
                    </label>
                ))}

            </div>
        </div>
    )
}

export default Price
