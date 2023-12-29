import {useGlobalContext} from '../context';

const Breeds = () => {
    const {breeds, getBreedImage} = useGlobalContext();

    return (
        <center className='breeds-section'>
            <h1 className='title'>Breeds</h1>
            <ul>
                {
                    breeds.map((breed) => {
                        const {id, name, reference_image_id: img_id} = breed;
                        return (
                            <article key={id}>
                                <img src={getBreedImage(img_id)} alt="" />
                                <h1 className='breed-title'>{name}</h1>
                            </article>
                        )
                    })
                }
            </ul>
        </center>
    )
}

export default Breeds;

{/*
<li key={breed.id}>{breed.id} - {breed.name} - {breed.temperament}</li>
*/}

