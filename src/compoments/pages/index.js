import React from 'react';
import styled from "styled-components";


const Home = () => {

    return (
        <MainContainer className="home-main-container">

            <div className="container">
                <h1 className="display-5 text-uppercase py-5 text-center">
                    puddinq.mobi - opendata kadaster
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi corporis culpa eaque, et
                    expedita in laboriosam minus quam! Adipisci alias, atque autem consectetur consequuntur, ea eius
                    est,
                    libero natus nobis odit soluta vero. Dicta ducimus nostrum omnis tempore vitae.</p>

                <h2 className="display-6 text-uppercase pu-5 text-center">
                    openlayers
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloremque exercitationem
                    expedita in
                    molestiae nulla quod ullam. Dignissimos doloremque ipsam libero magni minus molestias nisi,
                    reprehenderit? Culpa dolorum enim et ipsa ipsum laboriosam saepe sint temporibus? Eaque laboriosam
                    ratione suscipit.</p>

                <h2 className="display-6 text-uppercase pu-5 text-center">
                    pdok
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloremque exercitationem
                    expedita in
                    molestiae nulla quod ullam. Dignissimos doloremque ipsam libero magni minus molestias nisi,
                    reprehenderit? Culpa dolorum enim et ipsa ipsum laboriosam saepe sint temporibus? Eaque laboriosam
                    ratione suscipit.</p>
            </div>
        </MainContainer>
    )

}

export default Home;

//  STYLED COMPONENTS STYLES
const MainContainer = styled.div`
h1 {
    color: var(--black);
}

.container {
    background-color: var(--white);
    border-radius: 5px;
    opacity: 0.7;
}
`;