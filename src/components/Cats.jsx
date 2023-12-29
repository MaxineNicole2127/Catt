import { useGlobalContext } from "../context";
import Breed_Info from './Breed_Info';


// import NavBar from "./components/NavBar";

const Cats = () => {
    const {cats, loading, breed, handleSaving, saved} = useGlobalContext();
    // console.log(saved);
    if(loading) {
        return (
            <center>
                <h3 id="loading">LOADING...</h3>
            </center>
        )
    }

    const AlreadySaved = (id) => {
        const alreadySaved = saved.find((cat) => cat.id === id);
        return alreadySaved;
    }

    return (
        <center>
            <Breed_Info breed = {breed}/>
            <h2 className="instruction">Click to save cat picture !</h2>
            <section className="cats-section">
                {
                    cats.map((cat) => {
                        const {id, url: img_url} = cat;
                        let isSaved = AlreadySaved(id);
                        //console.log((isSaved) ? "saved" : "not saved");
                        return (
                            <article key={id} className={(isSaved) ? "cat saved" : "cat not-saved"} onClick={() => handleSaving(id)}>
                                <img src={img_url} alt="" />
                            </article>
                        )
                    })
                }



                {/* <article className="cat">
                    <img src="https://headsupfortails.com/cdn/shop/articles/Cat_s_Mind_x630.jpg?v=1624444348" alt="" />
                </article> */}
                
            </section>
        </center>
    )
}

export default Cats;




{/* <article className="cat">
        <img src="https://headsupfortails.com/cdn/shop/articles/Cat_s_Mind_x630.jpg?v=1624444348" alt="" />
    </article>
    <article className="cat">
        <img src="https://headsupfortails.com/cdn/shop/articles/Cat_s_Mind_x630.jpg?v=1624444348" alt="" />
    </article>
    <article className="cat">
        <img src="https://headsupfortails.com/cdn/shop/articles/Cat_s_Mind_x630.jpg?v=1624444348" alt="" />
    </article>
    <article className="cat">
        <img src="https://headsupfortails.com/cdn/shop/articles/Cat_s_Mind_x630.jpg?v=1624444348" alt="" />
    </article> */}