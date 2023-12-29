import MoreInfo from "./MoreInfo";
import Characteristics from "./Characteristics";
import Info from "./Info";
import '../Modal.css'
import { useGlobalContext } from "../context";

const Modal = () => {
    const {breedToDisplay, getBreedImage, closeModal} = useGlobalContext();
    const {id, name, reference_image_id, temperament, energy_level, affection_level, shedding_level, life_span, origin } = breedToDisplay;

    const img_url = getBreedImage(reference_image_id);
    const characteristics = (temperament.split(',')).splice(0, 5);

    
    
    return (
        <aside className="modal-overlay">
            <div className="modal-container">
                <div className="top">
                    <img src={img_url} />
                    <h3 className="breed-name">{name}</h3>
                </div>
                <Characteristics characteristics = {characteristics}/>
                <div className="bottom">
                    <Info life_span = {life_span} origin = {origin}/>
                    <MoreInfo energy_level = {energy_level} affection_level = {affection_level} shedding_level = {shedding_level}/>
                </div>
                <span className="close-button" onClick={() => closeModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="white" viewBox="0 0 384 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </span>
            </div>
            
        </aside>
    )
}

export default Modal;