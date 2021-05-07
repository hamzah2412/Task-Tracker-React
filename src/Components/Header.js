import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from'./Button'


const Header = ({ title, onAdd, showAdd }) => {
const location = useLocation()

//If showAdd is true(?), show 'Close' & the btn color 'red' else(:) show 'Add' & the btn color 'green'
    return (
        <header className ='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header