import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    button {   
        p {
            font-size: ${(props) => props.theme.size.secondary};
            font-weight: bold;
        }
    }

    p, h2 {
        color: ${(props) => props.theme.colors.tertiaryBlue};
        font-size: ${(props) => props.theme.size.primary};
    }
`;
