
import PropTypes from 'prop-types';
import styled from 'styled-components';



const Text = styled.p`
color: #ccc;
text-align: center;
`
function Notification({message}) {
    return (
        <div>
            <Text>{message} </Text>
        </div>
    )
}

Notification.propType = {
    message:PropTypes.string.isRequired
}
export default Notification;