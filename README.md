<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Les échos du Pacifique
</h1>

This is a draft for the future website for
<a href="http://lesechosdupacifique.info">Les échos du Pacifique</a> built on the Gatsby-starter-hello-world. Customer wants to be able to update future concerts announcements, upload concert posters, write some content in the form of a blog and have a secure login for choir members to download some rehearsal material. 


##  ✐ To Do

1.  **Create template for concerts announcements.**

    Standardise the format for concert announcements and create the corresponding model in Contentful. 
    
    It might consist of a composed picture on the left side (or on the top for small screens) and concert details on the right side, e.g.:
    * concert name
    * concert subtitle
    * unique slug
    * concert date and time
    * concert location (with external link to Google Map)
    * ticket pricing details
    * call-to-action button (linked to ticket sales site)
    * free format rich text for preview and longer description of the concert
    * link to a separate page containing the long description (similar to a blog post: see next item)
    * a boolean field could determine if this concert is future (to be shown on first page), either set by user or automatically set according to the concert date.

    The concert anouncement would be rendered on the first page, just below the jumbotron.

1.  **Create page that lists all concerts**

    First part would be a list of the coming events. Second part would be a list of the past concerts, the most recent one on top. Each item would be a long format description of the concert.

    Examples:
    * [ROCA](https://www.roca.ca/roca-concert-season)
    * [Phoenix Choir](https://phoenixchoir.com/concerts)

1.  **Create "Recent News" section** 

    This section would be rendered on the first page, pbssibly below the concert anouncement (short format)

    This section would be displayed in 3 (or 4) columns on large screens and in single column on narrow screen, with image on top of each item. Each item would include a link to the long story. 

    This section would also have a link to the list of all past blog posts, displayed on a page of it's own.

1.  **Complete the footer section**

    It should include an email address for contacts, a subscription form, icones linking to social medias (twitter, facebook, instagram, youtube). Also, copyright and privacy policy.

1.  **Separate the menu into it's own component**

    Implement a hiding menu and a "hamburger" for small screen.  Possibly with animation.

1.  **STYLING**

    Logo and band for menu on top of the screen.  Large picture(s, with carousel) covering the rest of the display area.

    Following section would be the next concert announcement. 

    Following section is 3 or 4 of the most recent news (blog).

    Next would be another large picture, or a mosaic of pictures covering an area approximately the size of the display.

    Finally, the footer follows.

    On secondary pages, only 1/3 or 1/2 of the size of the jumbotron would appear.  The menu bar with logo and the footer would remain constant.

    Examples:
    * [ROCA](https://www.roca.ca)
    * [Phoenix Choir](https://phoenixchoir.com)
    * [Electra](https://elektra.ca/) (for first page)
    * [NorthShore Chorus](https://www.nschorus.com/)

1. **Create/edit styling material**

    * Select pictures for jumbotron. Resize, crop, compress them.
    * Select and apply color sets
    * Select typography
    * Apply logo
    * Select symbols glyphs

1.  **Create template for users space.**

    Administrators should be able to upload material (pdf, mp3) along with explanations in plain text.

    Users should be able to download such material.

    Each seasons rehearsals have their own materials.

1.  **Implement multilingual features.**

    Implement fr_CA in Contentful.  Some content might be displayed in both languages at the same time.

1.  **Setup a test suite**

1.  **Create a "Who's who" page**

    This page would show a picture and a short biography of current directors and pianist. Possibly also choir singers. 
    
    * Create a new model in Contentful with input for a picture and a rich text area.
    * Create a component to render it.

1.  **Create a page for history**

    Should have a text with sections to describe the history of the Choir and what it is about.

    Should have a diaporama of pictures illustrating the history.

&nbsp;

&nbsp;

---


## 🧐 (From Gatsby docs) What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
