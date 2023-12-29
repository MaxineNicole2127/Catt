import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Circle = ({percentage, label}) => {
    return(
        <div className="progress">
            <CircularProgressbar 
                background={true} backgroundPadding = {5}
                value={percentage} maxValue= {5} text={`${percentage}`} 
                strokeWidth = "12"
                styles = {buildStyles ({
                    // Rotation of path and trail, in number of turns (0-1)
                    // rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',

                    // Text size
                    textSize: '1.5rem',
                    pathTransition: "stroke-dashoffset 15s ease",
                    pathTransitionDuration: 0.5,

                    pathColor: "#F1A438",
                    textColor: '#F1A438',
                    // trailColor: '#d6d6d6',
                    // trailColor: '#E8BF76',
                    // trailColor: '#EFC986',
                    trailColor: 'rgba(44, 62, 64, 0.3)',
                    backgroundColor: 'rgba(251, 251, 251,1)',
            })}/>

            <span>{label}</span>
        </div>
    )
}

export default Circle;