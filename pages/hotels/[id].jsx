import Image from "next/image"


const singleHotel1 = () => {
  return (
    <div className="w-7/12 mx-auto my-10">
     <Image src={"/hotel1.jpeg"} alt="hotel" width={2000} height={2000} className="w-full h-large-box my-5 mx-auto"
     />
     <div>
        <h3 className="text-3xl font-bold">Taj Hotels | The Taj Mahal Palace, Mumbai, Apollo Bandar, Colaba</h3>
        <p className="text-xl my-5 text-justify">Experience true grandeur at Taj Mahal Palace, our iconic grand luxury hotel in Mumbai. Book Suites in South Mumbai with exotic views of the Arabian Sea.</p>
        <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price : 15000</button>
        <p className="text-3xl font-bold my-5">Facilities :</p>
        <ul className=" flex text-xl justify-between">
            <li>Swimming Pool</li>
            <li>Pet Care</li>
            <li>Garden</li>
            <li>Loundry</li>
            <li>Gymnasium</li> 
        </ul>
        <button className="w-60 h-14 rounded-lg bg-red-400 text-lg my-5">Book Now</button>
     </div>
      
    </div>
  )
}

export default singleHotel1
