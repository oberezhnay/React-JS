import PropTypes from 'prop-types'

const contactsListItem = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    phone: PropTypes.string.isRequired
});

const contactsListItems = PropTypes.arrayOf(contactsListItem);

export default {
    ...PropTypes,
    contactsListItem,
    contactsListItems
}  