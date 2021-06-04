import React from "react";
import "./Images.css";

export default function Images(props) {
    if (props.images) {
        console.log(props.images);
        return <div className="row Image">
        {props.images.photos.map(function(image, index) {
            return <div className="col-4">
            <a href={image.src.original} target="#"><img key={index} src={image.src.tiny} alt={props.alt} class="img-fluid Pic" /></a>
            </div>
        })}
            </div>
    } else {
        return null
    }
}