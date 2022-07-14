import styled from "styled-components";

const List = styled.ul`
display: flex;
justify-content: center;
`;

const Item = styled.li`
margin-left: 10px;
`;

const Button = styled.button`
padding: 10px 20px;
border-radius: 5px;
background-color: ${props => props.theme.good};
color: #fff;
&:hover{
    cursor: pointer;
    transform: scale(1.15);
}

`;

const theme = {
    good: "green",
    neutral: "yellow",
    bad:"red"
}

export { List, Item, Button, theme };