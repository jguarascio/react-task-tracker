// use rafce to create this automatically

import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import Button from './Button'


// we can use style in line with double {{}}
const Header = ({ title, onAdd, showAddTask }) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add'} onClick={onAdd} />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// // CSS in JS
// const headingStyle = {

// }

export default Header
