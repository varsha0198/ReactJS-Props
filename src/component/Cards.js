
function Card(props) {
    return (

        <div class="card">
            <img className="imgSize"
                src={props.imgsrc}
                alt="Card demos"
                width="10%"
                height="250"
            />
            <div class="card-body">
                <h4 class="card-title">{props.title}</h4>
                <p class="card-text">{props.sname}</p>
                <a href={props.link} class="btn btn-primary stretched-link">
                    <button>Watch Now</button>
                </a>
            </div>
            <hr /><br />
        </div>

    );
}

export default Card;