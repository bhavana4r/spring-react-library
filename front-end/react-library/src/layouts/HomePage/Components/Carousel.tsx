
import { ReturnBook } from "./ReturnBook";
import { useEffect,useState } from "react";
import BookModel  from "../../../models/BookModel";
import { Link } from "react-router-dom";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
export const Carousel=()=>{
    const [books,setBooks]=useState<BookModel[]>([]);
    const[isLoading,setIsLoading]=useState(true);
    const[httpError,setHttpError]=useState(null);
    useEffect(()=>{
        const fetchBooks=async()=>{
            const baseUrl: string="http://localhost:8080/api/books";
            const url:string=`${baseUrl}?page=0&size=9`;
            const response=await fetch(url);
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            const responseJson=await response.json();
            const responseData=responseJson._embedded.books;
            const loadedBooks:BookModel[]=[];
            for(const key in responseData){
                loadedBooks.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    author:responseData[key].author,
                    copies:responseData[key].copies,
                    description:responseData[key].description,
                    copiesAvailable:responseData[key].copiesAvailable,
                    category:responseData[key].category,
                    img:responseData[key].img,

                });

            }
            setBooks(loadedBooks);
            setIsLoading(false);

        };
        fetchBooks().catch((error:any)=>{
            setIsLoading(false);
            setHttpError(error.message);
        })

    },[]);
    if(isLoading){
        return(
           <SpinnerLoading/>
        )
    }
    if(httpError){
        <div className="container m-5">
            <p>{httpError}</p>
        </div>
    }
    return(
        <div className='container mt-5' style={{height:550,
        backgroundColor:'gainsboro',
        }}>
            <div className='homepage-carousel-title' style={{color:'#0000FF', // Text color
        fontSize: '24px', // Font size
        fontWeight: 'bold', // Font weight
        textAlign: 'center', // Text alignment
        textTransform: 'uppercase', // Text transformation (e.g., uppercase, lowercase, capitalize)
        textDecoration: 'underline', // Text underline
        fontStyle: 'italic', // Font style (e.g., italic, normal)
        letterSpacing: '2px', // Letter spacing
        lineHeight: '1.5', // Line height
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',}}>
                <h3>You may like Reading these Books</h3>
            </div>
            <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 d-none
            d-lg-block' data-bs-interval='false'>
                {/*Desktop*/}
               <div className='carousel-inner'>
                <div className="carousel-item active">
                    <div className='row d-flex justify-content-center align-items-center'>
                        {books.slice(0,3).map(book=>(
                            <ReturnBook book={book} key={book.id}/>
                        ))}
                </div>
                </div>
               < div className="carousel-item">
                    <div className='row d-flex justify-content-center align-items-center'>
                    {books.slice(3,6).map(book=>(
                            <ReturnBook book={book} key={book.id}/>
                        ))}
                </div>
                </div>
                < div className="carousel-item">
                    <div className='row d-flex justify-content-center align-items-center'>
                    {books.slice(6,9).map(book=>(
                            <ReturnBook book={book} key={book.id}/>
                        ))}
                </div>
                </div>
                </div>
                <button className='carousel-control-prev' type='button' 
                data-bs-target ='#carouselExampleControls' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' 
                data-bs-target ='#carouselExampleControls' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>next</span>
                </button>
                
            </div>
            {/*Mobile*/}
            <div className="d-lg-none mt-3">
                <div className="row d-flex justify-content-center align-items-center">
                < div className="carousel-item">
                    <div className='row d-flex justify-content-center align-items-center'>
                    {books.slice(3,6).map(book=>(
                            <ReturnBook book={books[7]} key={books[7].id}/>
                        ))}
                </div>
                </div>
                </div>
            </div>
            <div className='homepage-carousel-title mt-3'>
                <Link className='btn btn-outline-secondary btn-lg' to='/search'>View More</Link>
            </div>
        </div>

    );
}


