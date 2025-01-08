import React from 'react'

export default function Card(props) {
    
  return (
    <>
    <div className="col md-4">
    <div className="card">
    <img src={props.url} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h5 className="card-title">{props.id}</h5>
    </div>
    </div>
</div>
    </>
  );
}
