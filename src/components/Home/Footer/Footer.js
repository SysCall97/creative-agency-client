import React from 'react';

const Footer = () => {
    return (
        <section className="mw-100 mt-4 mb-0 pt-4 pb-2" style={{backgroundColor:"#FBD062"}}>
        <div className="row mw-100">
            <div className="col-md-5 ml-5 mb-5 d-flex flex-column align-items-start justify-content-center">
                <h1 className="text-brand text-highlight">
                    Let us handle your project, professionally.
                </h1>

                <p className="text-brand">
                    With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
                </p>
                
            </div>

            <div className="col-md-6 ml-auto mt-5 mb-5 pr-0">
                <form>
                    <input className="w-75 mb-1 ml-1" style={{height:"40px", border:"none", borderRadius:"5px", paddingLeft: "10px"}} type="email" id="email" placeholder="Your email address" /> <br/>
                    <input className="w-75 m-1" style={{height:"40px", border:"none", borderRadius:"5px", paddingLeft: "10px"}} type="text" id="name" placeholder="Your name/company's name" /> <br/>
                    <textarea className="w-75 m-1" style={{border:"none", borderRadius:"5px", paddingLeft: "10px"}} id="message" rows="8" cols="50" placeholder="Your message" ></textarea> <br/>
                    {/* <input className="w-75 m-1" style={{height:"190px", paddingTop:"0"}} type="text" id="message" placeholder="Your message" /> <br/> */}
                    <input type="submit" className="btn-brand" value="Send" />
                </form>
            </div>

            
        </div>
        <p className="d-flex align-items-start justify-content-center"><small>Copyright Mashry, {(new Date()).getFullYear()}</small></p>
        </section>
    );
};

export default Footer;