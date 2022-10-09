export default {
  name: "blogs",
  title: "Blogs",
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
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
    },
    {
      name: "redirect_url",
      title: "Redirect URL",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
