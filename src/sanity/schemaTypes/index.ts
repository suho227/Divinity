import { type SchemaTypeDefinition } from 'sanity';
import about from "../schemas/schemaTypes/about";
import admissionFormNotice from "../schemas/schemaTypes/admissionFormNotice";
import notice from "../schemas/schemaTypes/notice";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, notice, admissionFormNotice],
};