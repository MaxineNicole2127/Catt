import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';

const AppContext = React.createContext();
//const API_LINK = "https://thecatapi.com/";
const API_KEY = "live_a490qn2hyXjE3jHMENB4erDuz8p1EDpAFwwP7b1uIEZfNfY37wgZadxEJNrO6PHM";
const API_LINK = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=siam&api_key=";
const BREEDS_LINK = "https://api.thecatapi.com/v1/breeds";
const IMG_LINK = "https://cdn2.thecatapi.com/images/";

const getPreviouslySaved = () => {
    let saved = localStorage.getItem("saved");
    if(saved) {
        saved = JSON.parse(localStorage.getItem("saved"));
    } else {
        saved = [];
    }

    return saved;
}


const AppProvider = ({children}) => {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [breed, setBreed] = useState({id: "1234", name: "BAD INTERNET CONNECTION", description: ""});
    const [breeds, setBreeds] = useState([]);
    const [saved, setSaved] = useState(getPreviouslySaved());
    const [breedToDisplay, setBreedToDisplay] = useState({});
    const [displayBreed, setDisplayBreed] = useState(false);

    const handleSaving = (id) => {
        let cat_pic;
        cat_pic = cats.find((cat) => cat.id === id);
        const alreadySaved = saved.find((cat) => cat.id === id);
        if(!alreadySaved){
            const updatedSaved = [...saved, cat_pic];
            setSaved(updatedSaved);
            localStorage.setItem("saved", JSON.stringify(updatedSaved));
        } else {
            const updatedSaved = saved.filter((cat) => cat.id !== id);
            setSaved(updatedSaved);
            localStorage.setItem("saved", JSON.stringify(updatedSaved));
        }
    }

    const unSave = (id) => {
        const updatedSaved = saved.filter((cat) => cat.id !== id);
        setSaved(updatedSaved);
        localStorage.setItem("saved", JSON.stringify(updatedSaved));
    }

    const breed_link_maker = (breed_id) => {
        let new_api_link;
        new_api_link = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breed_id}&api_key=${API_KEY}`;
        return new_api_link;
    }

    const updateBreed = (id, name, description) => {
      setBreed((prevBreed) => {
        return { ...prevBreed, id: id, name: name, description: description};
      });
    };

    const fetchCats = async(url) => {
        setLoading(true);
        try {
            const {data} = await axios.get(url);
            if(data.length < 1) {
                setCats([]);
            } else {
                let breed = data[0].breeds[0];
                setCats(data);
                updateBreed(breed.id, breed.name, breed.description);
            }
         
        } catch(e) {
            console.log(e.response);
        }
        setLoading(false);
    }

    const fetchBreeds = async(url) => {
        setLoading(true);
        try {
            const {data} = await axios.get(url);
            setBreeds(data);
        } catch(e) {
            console.log(e.response);
        }
    }

    const getBreedImage = (breedId) => {
        const INVALID_IMG_PLACEHOLDER = "https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg";
        let img_json_link = IMG_LINK + breedId;

        return img_json_link + ".jpg";
    }

    useEffect(() => {
        fetchCats(`${API_LINK}${API_KEY}`);
        fetchBreeds(`${BREEDS_LINK}`);
    },[]);

    const chooseNewBreed = (breed_id) => {
        const breed = breeds.find((breed) => breed.id === breed_id);
        updateBreed(breed.id, breed.name, breed.description);
        let new_breed_link = breed_link_maker(breed_id);
        fetchCats(new_breed_link);
    }

    const chooseNewBreedToDisplay = (breed_id) => {
        const breed = breeds.find((breed) => breed.id === breed_id);
        setBreedToDisplay(breed);
        setDisplayBreed(true);
    }

    const closeModal = () => {
        setDisplayBreed(false);
    }

    const getCatBreed = (id) => {
        const breed = saved.find((breed) => breed.id === id);
        let catBreed = breed.breeds[0].name;
        return catBreed;
    }

    return (
        <AppContext.Provider 
        value={{cats, loading, breed, breeds,
                setBreed, chooseNewBreed, handleSaving,
                saved, getBreedImage, chooseNewBreedToDisplay, 
                displayBreed, breedToDisplay, closeModal,
                getCatBreed, unSave }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};