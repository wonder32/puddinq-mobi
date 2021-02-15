import React from 'react';
import styled from "styled-components";
import luchtfoto from '../../images/luchtfoto.PNG';
import panden from '../../images/panden.PNG';
import permits from "../../images/vergunningen.PNG";

const Over = () => {

    return (
        <OverContainer className="home-main-container container-fluid">
            <div className="row">
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Over
                        </h2>
                        <p>
                            Deze website permanent beta status als speeltuin voor mijzelf en geïnteresseerden. Aan de
                            inhoud van de website kunnen geen rechten worden verleend en er wordt alleen gebuik gemaakt van
                            functionele coockies om het gedrag te volgen en daarmee het gebruik te verbeteren.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            PDOK
                        </h2>
                        <p>Een grootdeel van de gegevens is afkomstig van PDOK, dit is een digitale data service die de
                            toegankelijkheid van overheidsinformatie faciliteert. De luchtfato's zijn er van verschillende
                            jaren waardoor ook beperkt historische analyses gemaakt kunnen worden.
                        </p>
                        <img src={luchtfoto} className="rounded img-fluid" alt="voorbeeld vergunningen" />
                    </div>
                </div>
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Vergunningen
                        </h2>
                        <p>De vergunningen komen ook van de overheid, en de links naar de publicaties (of gegevens daarover)
                            komen ook uit bij de overheid.
                        </p>
                        <img src={permits} className="rounded img-fluid" alt="voorbeeld vergunningen" />
                    </div>
                </div>
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Panden
                        </h2>
                        <p>De panden komen overeen met de BAG registratie.
                        </p>
                        <img src={panden} className="rounded img-fluid" alt="voorbeeld vergunningen" />
                    </div>
                </div>
            </div>

        </OverContainer>
    )

}

export default Over;

//  STYLED COMPONENTS STYLES
const OverContainer = styled.div`
h2 {
    color: var(--black);
}

.row {
    margin:0;
}

.block-content {
    margin: 5px;
    padding: 16px;
    background-color: var(--white);
    border-radius: 16px;
    opacity: 0.95;
}
`;