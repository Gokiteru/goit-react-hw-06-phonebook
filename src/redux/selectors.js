import { createSelector } from "reselect";
import { contactsReducer } from "./contactsReducer";

const selectContacts = state => state.contactsReducer.items
const selectFilter = state => state.contactsReducer.filter

export const getFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
)
