import Image from "next/image"
import Link from "next/link"


export default function Navbar(){
    return(
        <header className="text-orange-600 font-semibold font-serif body-font bg-black">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   <Image className="ml-24" src={"/logo4.png" }
   alt="logo"
   width={120}
   height={120}/>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-10">
      <Link className="mr-5 hover:text-white" href={"#"}>Home</Link>
      <Link className="mr-5 hover:text-white" href={"#"}>About</Link>
      <Link className="mr-5 hover:text-white" href={"#"}>Blog</Link>
      <Link className="mr-5 hover:text-white" href={"#"}>Contact</Link>
    </nav>
   
  </div>
</header>
    )
    
}