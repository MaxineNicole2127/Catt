import { useGlobalContext } from "../context";

const CatIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#2C3E40" height="25" width="20" viewBox="0 0 576 512">
            <path d="M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/>
        </svg>
    )
}

const HeartIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#2C3E40" height="20" width="20" viewBox="0 0 512 512">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
    )
}

const Saved = () => {
    const {saved, getCatBreed, unSave} = useGlobalContext();
    // console.log(saved);

    if(saved.length < 1) {
        return (
            <center>
                <h1 className="saved-title">
                    <CatIcon/>   SAVED   <HeartIcon/>
                </h1>
                <h3>No saved items:(</h3>
            </center>
        )
    }

    return (
        <center>
            <h1 className="saved-title">
                <CatIcon/>   SAVED   <HeartIcon/>
            </h1>
            <section className="saved-section">
                {
                    saved.map((savedPic) => {
                        const {id, url} = savedPic;
                        const breed = getCatBreed(savedPic.id);
                        return (
                            <article key={id}>
                                <img src={url} alt="" />
                                {/* <p className="id">{id}</p> */}
                                <p className="breed">{breed}</p>
                                <span className="close-button" id="saved-close" onClick={() => unSave(id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" fill="white" viewBox="0 0 384 512">
                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                    </svg>
                                </span>
                            </article>
                        )
                    })
                }
            </section>
        </center>
    )
}

export default Saved;

{/* <p>{url}</p>
<p>{id}</p>
<p>{img_url}</p> */}