import React, { Component } from "react";
 import image1 from '../images/image1.jpg';
 import image2 from '../images/image2.jpg';
 import image3 from '../images/image3.jpg';
 import '../css/Footer.css'

    export default class HomeComponent extends Component{
        render(){
            return(
                <>
    {/* <div className="jumbotron jumbotron-fluid newstyle">
        <div className="container">
            <h1 className="display-3">Online Shopping</h1>
            <p className="lead">one stop solution for all daily needs</p>
            <hr className="my-2" />
        </div>
    </div> */}
   
    <div className="container" style={{marginTop:"180px"}}>
        <div className="card-deck">
            <div className="card">
                <img className="card-img-top" src={image1} alt="life quote" />
                <div className="card-body">
                    <h4>Life Insurance</h4>
                    <p>Fun is Like a Life Insurance the older you get the more its costs</p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={image2} alt="life quote"/>
                <div className="card-body">
                    <h4>Vehicle Insurance</h4>
                    <p>Everything in life is somewhere else, and you get there in a car</p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={image3} alt="life quote" />
                <div className="card-body">
                    <h4>Health Insurance</h4>
                    <p>Health feels pretty good when your expenses are covered</p>
                </div>
            </div>
        </div>
    </div>
    <br></br>
    <footer className="style">
        
          © 2022 Claim Management System
       

      </footer>
      </>
      )
        }
}