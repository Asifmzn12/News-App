import React from 'react'
// import './mystyle.css'
export default function NewsItem(props) {
    return (
        <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className="card">
                <img src={props.img} height="250px" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "150px" }}>{props.title.slice(0, 90) + "..."}</h5>
                    <hr />
                    <div style={{ height: "100px" }}>
                        <p>{props.date}</p>
                        <p>{props.source ? props.source : ""}</p>
                        <p>{props.author ? props.author : ""}</p>
                    </div>
                    <hr/>
                    <p className="card-text" style={{ height: "260px" }}>{props.desc.slice(0, 200) + "..."}</p>
                    <a href={props.url} className="btn background text-light w-100">Read Full Article</a>
                </div>
            </div>
        </div>
    )
}
