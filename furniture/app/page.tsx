import { Container } from 'postcss'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"




const page = () => {
  const images = [
    
    "sofa-table.jpg",
    "table-chair.jpg",
    "table-chair2.jpg",
    "sofa2.jpeg",
    "desk.jpeg",

  ]
  return (
    <div>
      <section id='1'>
      <img className='w-full h-screen' src="hero-imag-furniture.jpg" alt="hero.page" />
      <div className='container  absolute top-1/4 left-1/2 right-1-6  w-[600px] h-[500px] bg-[#ffedd5]'>
        <div className='justify-center item-center my-16 mx-9 gap-4 '>
        new areaval
        <h1 className='text-4xl lg:text-5xl font-bold text-[#a16207] mb-4'>Discover Our New Collection </h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam voluptatum nostrum cumque laborum similique numquam quisquam quo quod aliquam illo.
        
        </div>
        <div>
          <div className=' bg-[#a16207] w-[170px] mx-9 p-5 flex justify-center items-center '>
            <button className='text-white text-xl '>Buy Now</button>
          </div>
        </div>
      </div>
      </section>

      <section id='2'>
        <div >
          <div className='text-center flex-col mt-20 '>
          <h1 className='font-bold text-3xl'>Browse The Range</h1>
          <h3 className='text-gray-600 mt-3 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          </div>
          <div className='grid grid-cols-3 gap-4 mx-10'>
            <div className="relative">
              <img width={450} className='h-[400px]' src="table-chair.jpg" alt="img-2" />
              <div className="absolute bottom-0 left-0 right-0 text-black flex justify-center px-4 py-2">
                <h3 className="text-xl font-bold pt-4">Chair</h3>

              </div>
            </div>
            <div className="relative">
              <img width={450} className='h-[400px]' src="sofa-table.jpg" alt="img-3" />
              <div className="absolute bottom-0 left-0 right-0 text-black flex justify-center px-4 py-2">
                <h3 className="text-xl font-bold pt-4">Sofa</h3>

              </div>
            </div>
            <div className="relative">
              <img width={450} className='h-[400px]' src="table-chair2.jpg" alt="img-4" />
              <div className="absolute bottom-0 left-0 right-0 text-black flex justify-center px-4 py-2">
                <h3 className="text-xl font-bold pt-4">Table</h3>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='3'>
        <p className='font-bold text-center text-4xl lg:text-5xl mb-4 mt-20'>Our Product</p>
        <div>

        <div className='grid grid-cols-3 gap-4 mx-10'>
            <div className="relative">
              <img width={450} className='h-[400px] mx-5 my-4' src="table-chair.jpg" alt="img-2" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2">
                <h3 className="text-xl font-bold">Chair</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="relative">
              <img width={450} className='h-[400px] mx-5 my-4' src="sofa-table.jpg" alt="img-3" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2">
                <h3 className="text-xl font-bold">Sofa</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="relative">
              <img width={450} className='h-[400px] mx-5 my-4' src="table-chair2.jpg" alt="img-4" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2">
                <h3 className="text-xl font-bold">Table</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-3 gap-4 mx-10'>
            <div className="relative">
              <img width={450} className='h-[400px] mx-5 my-4' src="table-chair.jpg" alt="img-2" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2">
                <h3 className="text-xl font-bold">Chair</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="relative">
              <img width={450} className='h-[400px] mx-5 my-4' src="sofa-table.jpg" alt="img-3" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2">
                <h3 className="text-xl font-bold">Sofa</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="relative">
              <img width={450} className='h-[400px] mx-5 my-4' src="table-chair2.jpg" alt="img-4" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-2">
                <h3 className="text-xl font-bold">Table</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div><div className='flex justify-center items-center my-10'>
            <div className=' bg-[#a16207] w-[170px] mx-9 p-5 flex justify-center items-center '>
              <button className='text-white text-xl '>Show More</button>
            </div></div>
        </div>
      </section>

      <section id='4'>
  <div className='flex bg-[#ffedd5] py-20'>
    <div className='max-w-screen-lg flex flex-col px-20 w-[500px]'>
      <div className=' mb-10'>
        <p className='font-bold text-3xl'>50+ Beautiful Room Inspirations</p>
        <p>Our designers have created numerous beautiful prototypes of rooms to inspire you.</p>
        <div className='my-10'>
          <div className='bg-[#a16207] w-[170px] mx-auto p-3 flex justify-center items-center'>
            <button className='text-white text-xl'>Show More</button>
          </div>
        </div>
      </div>
    </div>
    
    <div className='max-w-4xl'>
      <Carousel className="w-full h-full" 
      opts={{
        align: "start",
        loop: true,
      }}
      >
        <CarouselContent>
          {images.map((images,index) => (
            <CarouselItem key={index} className='basis-1/3'>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <img src={images} alt="Image 1" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </div>
</section>
<a href="app/card.tsx"></a>
    </div>
  )
}

export default page