export default {
  name: "certificates",
  title: "Certificates",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "certificate_image",
      title: "Certificate Image",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "certificate_image",
    },
  },
};
