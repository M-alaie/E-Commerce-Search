const Products=({result})=>{
  return(
    <div className="my-10 ml-8">
    <div className="grid  xl:grid-cols-5 md:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-6 ">
     {result}
</div>
    </div>
  )
}

export default Products