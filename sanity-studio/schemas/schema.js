import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import skills from "./skills";
import about from "./about";
import blogs from "./blogs";
import certificates from "./certificates";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([about, skills, certificates, blogs]),
});
