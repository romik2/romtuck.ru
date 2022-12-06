import './TimeLine.css';

function TimeLine({data = []}) {  

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="Yearly-timeline">
                    {
                        data.map(e => (
                            <div className="timeline">
                                <div className="timeline-content">
                                    <div className="timeline-icon"></div>
                                    <h3 className="title">{e.period}</h3>
                                    <div className="description">
                                        {e.description}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default TimeLine;
