import Image from "next/image";
import Link from "next/link";


const block = [
  { imageUrl: "/image1.png", name: 'BEDROOM', id: "1" },
  { imageUrl: "/image2.jpg", name: 'DRAWING ROOM', id: "2" },
  { imageUrl: "/image3.jpg", name: 'DINING ROOM', id: "3" },
  { imageUrl: "/image4.jpg", name: 'STUDY ROOM', id: "4" },
  { imageUrl: "/image5.jpg", name: 'BATH ROOM', id: "5" },
  { imageUrl: "/image6.jpg", name: 'WARDROBE', id: "6" },
  { imageUrl: "/image7.jpg", name: 'GAMING ROOM', id: "7" },
  { imageUrl: "/image8.jpg", name: 'KITCHEN', id: "8" },
  { imageUrl: "/image9.jpg", name: 'PIZZA ROOM', id: "9" },
  { imageUrl: "/image10.jpg", name: 'MEETING ROOM', id: "10" },
  { imageUrl: "/image11.jpg", name: 'LIBRARY', id: "11" },
  { imageUrl: "/image12.jpg", name: 'WAITING ROOM', id: "12" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-white body-font bg-black">
  <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-24 items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-600">
      &quot; Transform Your Space, <br className= "&quot;hidden lg:inline-block &quot; "/>Transform Your Life&quot;

      </h1>
      <p className="mb-8 leading-relaxed">
        We specialize in creating stunning interiors that blend style, <br />
        functionality, and comfort.
      </p>
      <div className="flex justify-center md:justify-start">
        <button className="inline-flex text-white bg-lime-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="object-cover object-center rounded-full" alt="hero" src="/hero.png" width={900} height={1000} />
    </div>
  </div>
</section>


      {/* Blogs Section */}
      <section>
  <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-24 items-center justify-center">
    <div className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center md:text-left mb-16 md:mb-0">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-orange-600">
        Blogs
      </h1>
      <p className="mb-8 leading-relaxed text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eum sit a quo. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  </div>

 


        
         {/* Blog List */}
         <div className="flex flex-wrap justify-around">
          {block.map((item) => (
          <Link key={item.id} href={`/blogs/${item.id}`} className="block mb-4">
          <Image
            src={item.imageUrl}
            alt={`Blog Image ${item.id}`}
            width={384}
            height={256}
            className="w-96 h-64 object-cover rounded"
          />
        </Link>
          ))}
        </div>
      </section>
    </>
  );
}
