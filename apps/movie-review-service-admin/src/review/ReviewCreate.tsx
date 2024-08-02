import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <NumberInput label="rating" source="rating" />
        <TextInput label="reviewer" source="reviewer" />
      </SimpleForm>
    </Create>
  );
};
