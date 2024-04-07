const radioName = [
    {radio:'All',value:''}, 
    {radio:'Sneakers', value:'sneakers'},
    {radio:'Flats', value:'flats'},
    {radio:'Heels', value:'heels'}
]


const Category = ({handleSidebar}) => {
    console.log(handleSidebar);
    return (
        <div>
            <h2 className="sidebarTitle">Category</h2>

            <div>
                {radioName.map(({radio,value}, index) => (
                    <label htmlFor={radio} className="flex flex-row gap-2 space-y-1 items-center" key={index}  >
                        <input type="radio" name='Category' className="w-radio h-radio" value={value} onClick={handleSidebar}  id={radio} aria-label={radio} />
                        <p className="leading-relaxed font-normal text-gray-500 ">{radio}</p>
                    </label>
                ))}

            </div>
        </div>
    )
}

export default Category