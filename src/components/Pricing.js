import React from 'react';
import {Link} from 'react-router-dom';
import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>- Basic -</h3>
                    <span className="bar"></span>
                    <p className="currency">$150</p>
                    <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptate</p>
                    <Link to="/contact" className="btn">Book</Link>
                </div>
                <div className="card">
                    <h3>- Popular -</h3>
                    <span className="bar"></span>
                    <p className="currency">$230</p>
                    <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptate</p>
                    <Link to="/contact" className="btn">Book</Link>
                </div>
                <div className="card">
                    <h3>- VIP -</h3>
                    <span className="bar"></span>
                    <p className="currency">$400</p>
                    <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptate</p>
                    <Link to="/contact" className="btn">Book</Link>
                </div>
            </div>

        </div>
    )
}

export default Pricing