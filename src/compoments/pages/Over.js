import React from 'react';
import styled from "styled-components";


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
                            inhoud van de website kunnen geen rechten worden verleend en er wordt gebuik gemaakt van
                            functionele coockies om het gedrag te volgen en daarmee het gebruik te verbeteren.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Vergunningen
                        </h2>
                        <p>Als een vergunning wordt aangevraagd en goedgekeurd dient deze 6 weken publiek beschikbaar te
                            zijn om belanghebbended de gelegenheid te geven bezwaar te maken (WRO). Tijdens deze 6 weken
                            zijn de vergunningen per locatie weergegeven in de kaart. Handig dus om in één oogopslag
                            regelmatig de vergunningsaanvragen in de buurt in te zien.
                        </p>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            PDok
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi corporis culpa
                            eaque, et
                            expedita in laboriosam minus quam! Adipisci alias, atque autem consectetur consequuntur, ea
                            eius est,
                            libero natus nobis odit soluta vero. Dicta ducimus nostrum omnis tempore vitae.</p>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            Kadaster
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi corporis culpa
                            eaque, et
                            expedita in laboriosam minus quam! Adipisci alias, atque autem consectetur consequuntur, ea
                            eius est,
                            libero natus nobis odit soluta vero. Dicta ducimus nostrum omnis tempore vitae.</p>
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

.block-content {
    margin: 5px;
    padding: 16px;
    background-color: var(--white);
    border-radius: 16px;
    opacity: 0.95;
}
`;