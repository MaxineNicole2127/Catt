import Circle from './Circle';
import { useGlobalContext } from '../context';

const MoreInfo = ({energy_level, affection_level, shedding_level}) => {
    return (
        <section className="more-info-section">
            <Circle percentage={ parseInt(energy_level) } label={"energy"}/>
            <Circle percentage={ parseInt(affection_level) } label={"affection"}/> 
            <Circle percentage={ parseInt(shedding_level) } label={"shedding"}/> 
        </section>
    )
}

export default MoreInfo;