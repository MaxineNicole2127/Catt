import {useGlobalContext} from '../context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const DropDown = () => {
    const {breeds, breed, chooseNewBreed} = useGlobalContext();
    const handleBreedSelectionChange = (e) => {
        chooseNewBreed(e.target.value);
    }

    return (
        <center>
            <div className="dropdown-container">
                <select name="cat-breeds" value={breed.id} className='dropdown-breeds' onChange={handleBreedSelectionChange}>
                    {
                        breeds.map((breed) => {
                            const {id: breedId, name: breedName} = breed;
                            return (
                                <option key={breedId} value={breedId}>{breedName}</option>
                            )
                        })    
                    }
                </select> 
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                </svg>
            </div>
            
        </center>
    )
}

export default DropDown;

{/* <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
            </svg> */}