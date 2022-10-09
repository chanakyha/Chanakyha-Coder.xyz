export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "taglines",
      title: "Taglines",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "profile_pic",
      title: "Profile Picture",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "birthday",
      title: "Birthday",
      type: "date",
    },
    {
      name: "website",
      title: "Website",
      type: "string",
    },
    {
      name: "contact_number",
      title: "Contact Number",
      type: "string",
    },
    {
      name: "social_lins",
      title: "Social Media Links",
      collapsible: true,
      collapsed: true,
      type: "document",
      fields: [
        {
          name: "twitter",
          title: "Twitter",
          type: "url",
        },
        {
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
        },
        {
          name: "github",
          title: "Github",
          type: "url",
        },
        {
          name: "medium",
          title: "Medium",
          type: "url",
        },
        {
          name: "whatsapp",
          title: "Whatsapp",
          type: "url",
        },
        {
          name: "email",
          title: "Email",
          type: "string",
        },
      ],
    },
    {
      name: "cv_file",
      title: "CV File",
      type: "file",
    },
    {
      name: "freelance_status",
      title: "Freelance Status",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "profile_pic",
    },
  },
};
