export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "percentage",
      title: "Percentage",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
