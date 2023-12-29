const Info = ({life_span, origin}) => {

    return (
        <section className="info-section">
            <div className="life-span">
                <h1 className="ls-value val">{life_span}</h1>
                <h4 className="ls-label label">Life Span (years)</h4>
            </div>
            <div className="country-origin">
                <h1 className="co-value val">{origin}</h1>
                <h4 className="co-label label">Country of Origin</h4>
            </div>
        </section>
    )
}

export default Info;