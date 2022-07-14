import styled from "styled-components";

const List = styled.ul`
display: flex;
flex-direction: column;

`;
const Item = styled.li`
margin-bottom: 5px;
display: flex;
justify-content: center;
align-items: baseline;

`;
const Text = styled.p`
font-family: "roboto";
font-size: 20px;
font-weight: 500;
color: #212121;
`;

export { List, Item, Text };