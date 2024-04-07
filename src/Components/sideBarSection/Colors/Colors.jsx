const ColorName = [
    {Color:'All',value:''},
    {Color:'Black',value:'black'},
    {Color:'Blue',value:'blue'},
    {Color:'Red',value:'red'},
    {Color:'Green',value:'green'},
    {Color:'White',value:'white'},



]


const Colors = ({handleSidebar}) => {
    return (
        <div>
            <h2 className="sidebarTitle">Colors</h2>
            <div>
                {ColorName.map(({Color,value}, index) => (
                       <label key={index} htmlFor={Color} className="flex flex-row mr-8 items-center gap-2 ">
                       <input type="radio" name='Color' className="w-radio h-radio " id={Color} value={value} onClick={handleSidebar} aria-label={Color} />
                        <p className="leading-relaxed font-normal text-gray-400">{Color}</p>
                       </label>
                   
                ))}

            </div>
        </div>
    )
}

export default Colors
