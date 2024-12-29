import React from "react";
import Image from "next/image";


export default function About(){
    return(
<section className ="text-gray-600 body-font bg-black">
  <div className ="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className ="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
     <Image src={"/about.jpg"} alt="about" width={900} height={600} />
    </div>
    <div className ="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className ="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500">
       ABOUT US
      </h1>
      <p className ="mb-8 leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Fugiat labore, ex ratione necessitatibus recusandae dolor.</p>
      <div className ="flex justify-center">
        <button className ="inline-flex text-white bg-lime-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
       
      </div>
    </div>
  </div>
</section>

    )
}