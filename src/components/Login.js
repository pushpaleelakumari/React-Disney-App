import styled from "styled-components";
import "./Login.css"

const Login = (props) => {
    return (
        <div className="login-container">
            <div className="login-content">
                <div className="CTA">
                    <img src="/cta-logo-one.svg" alt="" className="cta-image" />
                    <div className="SighUp">
                        GET ALL THERE
                    </div>
                    <div className="Description">
                        <p>
                            Get Premier Access to Raya and the Last Dragon for
                            an additional fee with a Disney+ subscription. As of
                            10/16/22, the price of Disney+ and The Disney Bundle
                            will increase by $1.
                        </p>
                    </div>
                    <div className="CTA-two">
                    <img src="/cta-logo-two.png" alt="" className="cta-image2" />
                    </div>
                </div>
                <div className="BgImage">

                </div>
            </div>
        </div>
    )
};


export default Login;