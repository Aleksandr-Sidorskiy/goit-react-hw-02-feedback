
import PropTypes from 'prop-types';
import {Text} from './StyleNotification'




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