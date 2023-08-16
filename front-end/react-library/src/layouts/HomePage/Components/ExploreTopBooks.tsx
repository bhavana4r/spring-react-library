import { Link } from "react-router-dom";

export const ExploreTopBooks=()=>{
    const ExploreStyle={
        backgroundImage: 'url("https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', 
        backgroundSize: 'cover',
       /* background: 'red',*/
    };
    return(
        <div  className='p-5' style={ExploreStyle}  >
            <div className='container-fluid py-5 text-black
            d-flex justify-content-center  align-items-center'>
                <div>
                    <h1 className='display-6 fw-bold'> Find Book</h1>
                    <p className='col-md-8 fs-4'>where would you like to go next?</p>
                    <Link type='button' className='btn main-color btn-lg text-white' to='/search'>
                        Explore top books
                    </Link>
                </div>
            </div>
        </div>
    );
}