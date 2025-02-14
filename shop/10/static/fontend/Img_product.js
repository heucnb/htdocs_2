function Img_product(props) {
    
//   let table_excel_height = props.value.height  ;
//   let table_excel_width = props.value.width  ;
  let data_2d = props.value.data ;
  var countjavascript = data_2d.length ;
  var coloumsjavascript = data_2d[countjavascript-1].length ; 



         return (  
    

<section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
  <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">

                
            {data_2d.map((row, i) => {
             
             return (
                <div className="bg-white">




                          <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <img
                                      src= {"admin/productimages/" + row[0] + "/" + row[4] } 
                                      alt="Front of men's Basic Tee in black."
                                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                          
                          <h1 className="text-3xl my-5">{row[3]}</h1>
                          <p className="mb-5">
                          {row[11]}
                          </p>
                          <h2 className="font-semibold mb-5">{row[8]}</h2>
                          <Rating />
                          <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                            Add To Cart
                          </button>
                        </section>





 




  </div>
    
              );
            })}    




            </section>
            </section>
            
    
    
         );
    
    



    




    



 
    } ;