import React from "react";
import styled from "styled-components";

const ArticleContainer = styled.section`
background-color: #d1d1d1;
height: 100vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;

function Blog() {
    return (
        <>
           <h1>Blog Page</h1>

           <ArticleContainer>
            <h1>Articles</h1>
            </ArticleContainer>

        </>
    );
}

export default Blog;