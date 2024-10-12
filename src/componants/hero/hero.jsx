import react from 'react'
import bike from '../../assets/928c2c6af1fe84a79a80561c5468e6b5.png'



const Hero = () => {
    return(
        <div className=' d-flex justify-content-center align-items-center '>
        
        <div className='row mt-5 container' >
        <div className=' col-12 col-md-6 mt-5  '>
         <h3>Fair price ride</h3>
         <h1>Rent our Scooter</h1>
         <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
         </div>
         <div className='col-12 col-md-6 text-center  '>
          <img className='img-fluid w-25' src={bike} alt="bick" />
         </div>
        </div>
        </div>
    )
}
 export default Hero