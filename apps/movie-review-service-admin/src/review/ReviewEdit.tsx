import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <NumberInput label="rating" source="rating" />
        <TextInput label="reviewer" source="reviewer" />
      </SimpleForm>
    </Edit>
  );
};
