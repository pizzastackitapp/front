import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const MenuList = () => (
    <List>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" />
            <TextField source="image" />
            <TextField source="ingredients" /> */}
            <NumberField source="price" />
            <TextField source="title" />
            {/* <NumberField source="weight" /> */}
        </Datagrid>
    </List>
);