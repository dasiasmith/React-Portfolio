export default function Project(props) {
  return (
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a
            href={props.repo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            GitHub
          </a>
          <a
            href={props.deployed}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Deployed
          </a>
        </div>
      </div>
    </div>
  );
}