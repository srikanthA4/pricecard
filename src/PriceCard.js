import React from "react";

function PriceCard(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {props.data.tagName}
            </h5>
            <h6 className="card-price text-center">
              ${props.data.price}<span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li className={props.data.userFlag?"":"text-muted"}>
                <span className="fa-li">
                  <i className={props.data.userFlag?"fas fa-check":"fas fa-times"}></i>
                </span>
                {props.data.user}
              </li>
              <li classname={props.data.storageFlag?"":"text-muted"}>
                <span className="fa-li">
                  <i className={props.data.storageFlag?"fas fa-check":"fas fa-times"}></i>
                </span>
                {props.data.storage}
              </li>
              <li className={props.data.publicProjectsFlag?"":"text-muted"}>
                <span className="fa-li">
                  <i className={props.data.publicProjectsFlag?"fas fa-check":"fas fa-times"}></i>
                </span>
                {props.data.publicProjects}
              </li>
              <li className={props.data.accessFlag?"":"text-muted"}>
                <span className="fa-li">
                  <i className={props.data.accessFlag?"fas fa-check":"fas fa-times"}></i>
                </span>
                {props.data.access}
              </li>
              <li className={props.data.privateProjectsFlag?"":"text-muted"}>
                <span className="fa-li">
                  <i className={props.data.privateProjectsFlag?"fas fa-check":"fas fa-times"}></i>
                </span>
                {props.data.privateProjects}
              </li>
              <li className={props.data.supportFlag?"":"text-muted"}>
                <span className="fa-li">
                  <i className={props.data.supportFlag?"fas fa-check":"fas fa-times"}></i>
                </span>
                {props.data.support}
              </li>
              <li className={props.data.domainFlag?"":"text-muted"}>
                <span className="fa-li">
                  <i className={props.data.domainFlag?"fas fa-check":"fas fa-times"}></i>
                </span>
                {props.data.domain}
              </li>
              <li className={props.data.reportFlag?"":"text-muted"}>
                <span className="fa-li">
                  <i className={props.data.reportFlag?"fas fa-check":"fas fa-times"}></i>
                </span>
                {props.data.report}
              </li>
            </ul>
            <div className="d-grid">
              <a href="dummy" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceCard;