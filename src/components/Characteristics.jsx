const Characteristics = ({characteristics}) => {
    //const chars = ["Active", "Energetic", "Independent", "Intelligent", "Gentle"];
    return (
        <section className="characteristics" >
            <div id="first-three">
                {   
                    characteristics.slice(0,3).map((char, index) => {
                            return (
                                <button> {char}</button>
                            )
                    })
                }
            </div>
            <div id="last-two">
                {   
                    characteristics.slice(3,5).map((char, index) => {
                            return (
                                <button> {char}</button>
                            )
                    })
                }
            </div>
            
        </section>
    )
}

export default Characteristics;


// chars.map((char) => {
                    //     return (
                    //         <button>
                    //             {char}
                    //             {/* <p>{char}</p> */}
                    //         </button>
                    //     )
                    // })