import React from 'react'
import PageHeader from '../components/PageHeader'



const subTitle = "save The Opinions for customer care";
const title = (
  <h2 className="title">
   Feel free to Contact With us.
    <b>
      
    </b>
    on sales
  </h2>
);
const desc = " Any Time , Every Time. 24/7";

const Contact = () => {
  return (
    <div>
      
    <PageHeader  title="Our Contact  Page" curpage="Contact"  />

    <section className="register-section padding-tb pb-0">
    <div className="container">
      <div className="row g-4  row-cols-lg-2 row-cols-1  align-items-center">
        <div className="col">
          <div className="section-header">
            <span className="subtitle">{subTitle}</span>
            {title}
            <p>{desc}</p>
          </div>
        </div>
        <div className=" col">
          <div className="section-wrapper">
                   <h4>Register Now</h4>
             <form className="register-form">
              <input
                type="text"
                name="name"
                placeholder="Username"
                className="reg-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="reg-input"
              />
              <input
                type="number"
                name="number"
                placeholder="your Opinion || Any Query"
                className="reg-input"
              />
              <button type="submit" className="lab-btn">Save Opinion</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default Contact
