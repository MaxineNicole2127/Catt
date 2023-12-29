import {useGlobalContext} from '../context';

const Breed_Info = ({breed}) => {
    const {id, name: breedName, description: breedDesc} = breed;
    return (
        <div className="breed-info">
            <h1 className="breed-name">{breedName}</h1>
            <h3 className="breed-desc">{breedDesc}</h3>
        </div>
    )
}

export default Breed_Info;