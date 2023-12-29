// import './App.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobalContext } from '../context';


const IMG_LINK = "https://cdn2.thecatapi.com/images/";

const data = [
    {
        name: "Abyssinian",
        img: IMG_LINK + "0XYvRd7oD" + ".jpg"
    },
    {
        name: "Aegean",
        img: IMG_LINK + "ozEvzdVM-" + ".jpg"
    },
    {
        name: "American Bobtail",
        img: IMG_LINK + "hBXicehMA" + ".jpg"
    },
    {
        name: "Balinese",
        img: IMG_LINK + "13MkvUreZ" + ".jpg"
    },
    {
        name: "Bambino",
        img: IMG_LINK + "5AdhMjeEu" + ".jpg"
    },
    {
        name: "Bengal",
        img: IMG_LINK + "O3btzLlsO" + ".jpg"
    },
    
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#F1A438", borderRadius: "30px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#F1A438", borderRadius: "30px" }}
      onClick={onClick}
    />
  );
}



const App = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            // breakpoint: 1024,
            breakpoint: 1294,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 937,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const {breeds, getBreedImage, chooseNewBreedToDisplay} = useGlobalContext();
    return(
        <center>
            <h1 className='cat-breeds-title'>Cat Breeds</h1>
            <section className="breeds-section">
                <Slider {...settings}>
                    {
                        breeds.map((breed) => {
                            const {id, name, reference_image_id: img_id} = breed;
                            return (
                                <div key={id}>
                                    <article key={id} onClick={() => chooseNewBreedToDisplay(id)}>
                                        <img src={getBreedImage(img_id)} alt="" />
                                        <h1 className='breed-title'>{name}</h1>
                                    </article>
                                </div>
                            )
                        })
                    }
                </Slider>
            </section>
        </center>
    )
}

export default App;