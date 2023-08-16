import { useState } from "react";
import { BarGraph } from "./BarGraph";
interface Author {
    name: string;
    description: string;
    img:string;
    BooksWrittenName:string,
    copiesAvailableName:string,
    copiesSoldName:string,
    BooksWritten:number;
    copiesAvailable:number;
    copiesSold:number;

  }  


export const AuthorsInfo=()=>{
    const [currentAuthorIndex, setCurrentAuthorIndex] = useState(0);

    const authors: Author[] = [
      {
        name: 'Author???',
        description: 'click next to know about the author',
        img:"https://mummyvsmoney.co.uk/wp-content/uploads/2019/06/Author.png",
        BooksWrittenName:" BooksWritten",
        copiesAvailableName:"copiesAvailable",
        copiesSoldName:"copiesSold",

        BooksWritten:0,
        copiesAvailable:0,
        copiesSold:0,
        
      },
      {
        name: 'Rupi Kaur',
        description: "Rupi Kaur is a celebrated Canadian poet and illustrator, renowned for her emotionally charged and accessible poetry collections milk and honey and the sun and her flowers. With a unique blend of simplicity and raw vulnerability, she has captivated audiences worldwide, becoming a significant voice in modern literature and inspiring countless readers to embrace their emotions and experiences through her art.",
        img:"https://static.toiimg.com/thumb/msid-78142671,imgsize-28603,width-800,height-600,resizemode-75/78142671.jpg",
        BooksWrittenName:" BooksWritten",
        copiesAvailableName:"copiesAvailable",
        copiesSoldName:"copiesSold",
        BooksWritten:35,
        copiesAvailable:28,
        copiesSold:45,
      },
      {
        name:'Chetan Bhagat',
        description:"Chetan Bhagat is a prominent Indian author, speaker, and columnist, known for his best-selling novels that often explore contemporary social issues and youth culture in India. His works, such as Five Point Someone,2 States, and Half Girlfriend,have gained immense popularity and have been adapted into successful Bollywood films. Bhagat's writing style combines humor, relatable characters, and engaging storytelling, making him one of the most widely read and influential authors in India.",
        img:"https://www.theindianwire.com/wp-content/uploads/2017/05/chetan-bhagat-hd.jpg",
        BooksWrittenName:" BooksWritten",
        copiesAvailableName:"copiesAvailable",
        copiesSoldName:"copiesSold",
        BooksWritten:20,
        copiesAvailable:80,
        copiesSold:75,
      },
      {
        name:'Ruskin Bond',
        description:"Ruskin Bond, an esteemed Indian author, captivates readers with his enchanting tales set in the Indian Himalayas. With a simple yet profound writing style, his stories evoke emotions of innocence, friendship, and love. Awarded with the Sahitya Akademi Award and the Padma Shri, Bond's literary magic continues to mesmerize readers worldwide. A cherished figure in Indian literature, he remains an inspiration to aspiring writers",
        img:"https://i.zoomtventertainment.com/story/ruskin.png",
        BooksWrittenName:" BooksWritten",
        copiesAvailableName:"copiesAvailable",
        copiesSoldName:"copiesSold",
        BooksWritten:55,
        copiesAvailable:85,
        copiesSold:20,
      }

    ];
  
    const handleNextClick = () => {
      setCurrentAuthorIndex((prevIndex) => (prevIndex + 1) % authors.length);
    };
    
  const currentAuthor = authors[currentAuthorIndex];

  const dataForBarGraph = [
    { category: currentAuthor.BooksWrittenName, value: currentAuthor.BooksWritten },
  { category: currentAuthor.copiesAvailableName, value: currentAuthor.copiesAvailable },
  { category: currentAuthor.copiesSoldName, value: currentAuthor.copiesSold },
  ];
  
    return(
        <div>
        <div className='d-none d-lg-block'>
            <div className='row g-0 mt-5'>
            <div className='col-sm-6 col-md-6'>
                <div><img
                src={currentAuthor.img}
                width='750'
                height='400'
                alt="Book"
                /></div>
                </div>
            <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center" style={{backgroundColor: "white"}}>
                <div className='ml-2'>
                <h1>{currentAuthor.name}</h1>
              <p className="lead">{currentAuthor.description}</p>
              <button className="btn bg-dark btn-lg text-white" onClick={handleNextClick}>Next</button>
                </div>
             </div>
        </div>
            <div className='row g-0'>
                <div className="col-4 col-md-4 container d-flex justify-content-center
                 align-items-center">
                    <div className="ml-2">
                        <div>
                    {currentAuthorIndex === 0 ? (
                <img
                  src="https://th.bing.com/th/id/R.85d660f9baaac3d1f681e33b77f23623?rik=PzRqCs8EnuxKgQ&riu=http%3a%2f%2fwww.fullcirclereal.com%2fwp-content%2fuploads%2f2017%2f06%2fstatistics-clipart-statistics-word-percentage-sign-sphere-ball-stats-to-illustrate-study-mathematical-probability-41493410.jpg&ehk=eiOuiRSY%2b9SdTe1FKfbqehjlQdaqjFOTCqMA15P3HIY%3d&risl=&pid=ImgRaw&r=0"
                  width='750'
                  height='400'
                  alt="Book"
                />) : ( 
                    <div>
                        
                        <h1>statistics of {currentAuthor.name}</h1>
                        <table>
                            <tr>
                                <td>BooksWritten:</td>
                                {currentAuthor.BooksWritten}
                            </tr>
                            <tr>
                                <td>CopiesAvailable:</td>
                                {currentAuthor.copiesAvailable}
                            </tr>
                            <tr>
                                <td>CopiesSold:</td>
                                {currentAuthor.copiesSold}
                            </tr>
                        </table> </div>)}
                        </div>

                    </div>
                 </div>
                 
                 <div className="col-sm-6 col-md-6">
                    <div>
                    {currentAuthorIndex === 0 ? (
                <img
                  src="https://www.competitionsciences.org/wp-content/uploads/2020/10/statistics-graph-illustration.jpg"
                  width='750'
                  height='400'
                  alt="Book"
                />) : ( <BarGraph data={dataForBarGraph}/>)}</div>
                 </div>
                 </div>
            </div>
        {/*Mobile Heros*/}
        <div className="row d-lg-none mt-5">
                <div className="col-12 col-image-left"></div>
                <div className="col-12 d-flex flex-column justify-content-center">
                    <div className="m-2">
                        <h1>What have you been reading</h1>
                        <p className="lead">
                            The library team would love to know what you have been
                            reading. Whether it is to learn a skill or grow within one,
                            we will be able to provide the top content for you!
                        </p>
                        <a className="btn bg-dark btn-lg text-white" href='/#'>Sign up</a>
                    </div>
                </div>
                <div className="col-12 col-image-right"></div>
            </div>
            <div className="row d-lg-none">
                <div className="col-12 d-flex flex-column justify-content-center">
                    <div className="m-2">
                        <h1>Our collection is always changing</h1>
                        <p className="lead">
                            Try to check in daily as our collection is always changing.
                            We work nonstop to provide the most accurate book selection possible
                            for our luv 2 read students! We are diligent about our book selection,
                            and our books are always going to be our top priority.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}