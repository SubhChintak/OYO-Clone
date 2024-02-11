import Header1 from '@/components/Header1'
import Hotel from '@/components/Hotel'

const hotels = () => {
  return (
    <>
    <Header1/>
    <div className=' m-5'>
      <Hotel/>
      <Hotel/>
    </div>
    </>
  )
}

export default hotels

