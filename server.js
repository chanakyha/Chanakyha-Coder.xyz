require("dotenv").config();
const express = require("express");
const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use(express.static("public"));
app.use(express.json());

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

function sanityImgURL(source) {
  return builder.image(source);
}

app.post("/blogs", async (req, res) => {
  const groq = `*[_type=="blogs"] {title, thumbnail,redirect_url}`;

  const data = await client.fetch(groq);

  res.status(200).json(
    data.map((blog) => ({
      ...blog,
      thumbnail: sanityImgURL(blog.thumbnail).url(),
    }))
  );
});

app.post("/certificates", async (req, res) => {
  const groq = `*[_type=="certificates"] {title, certificate_image,subtitle}`;

  const data = await client.fetch(groq);

  res.status(200).json(
    data.map((certificate) => ({
      ...certificate,
      certificate_image: sanityImgURL(certificate.certificate_image).url(),
    }))
  );
});
