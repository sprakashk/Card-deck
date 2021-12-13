import styled  from 'styled-components';

const StyledButton = styled.button`
    padding: 0.5em;
    background-color: white;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
`;
const Button = ({ title, clickHandler }) => {
    return <StyledButton onClick={clickHandler}>{title}</StyledButton>
}
export default Button;