import React from 'react';
import styled from "styled-components";


const Over = () => {

    return (
        <OverContainer className="home-main-container container-fluid">
            <div className="row">
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            puddinq.mobi - opendata kadaster
                        </h2>
                        <p>Deze online applicatie gebruikt officieële openbare overheidsdata (opendata) in een handige</p>
                        combinatie zodat u voor het opgegeven adres makkelijk luhtfoto's van de afgelopen jaren, kadaster
                        grenzen, bebouwingsgrenzen en ter inzage liggende vergunningen kan inzien.
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <div className="block-content">
                        <h2 className="display-5 text-uppercase py-5 text-center">
                            puddinq.mobi - opendata kadaster
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
                            puddinq.mobi - opendata kadaster
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
                            puddinq.mobi - opendata kadaster
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