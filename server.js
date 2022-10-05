const express = require("express");
const dotenv = require("dotenv");
const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App running on port ${PORT}`));

app.use(express.static("public"));
app.use(express.json());

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const blogs = client.fetch(
  '*[_type == "blogs"]{title, redirectUrl, thumbnail}'
);

blogs.then((data) => {
  app.post("/blogs", (req, res) => {
    res.json(
      data.map((blog) => {
        return {
          title: blog.title,
          thumbnail: urlFor(blog.thumbnail).url(),
          redirectUrl: blog.redirectUrl,
        };
      })
    );
  });
});

const certificates = client.fetch(
  '*[_type == "certificates"]{title, subTitle, image}'
);

certificates.then((data) => {
  app.post("/certificates", (req, res) => {
    res.json(
      data.map((blog) => {
        return {
          title: blog.title,
          thumbnail: urlFor(blog.image).url(),
          subtitle: blog.subTitle,
        };
      })
    );
  });
});

app.get("/hello", (req, res) => {
  res.send("Hello World");
});
