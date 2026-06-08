# CFF export

A simple web application to convert CFF data to other formats.

## About this application

The [CFF format](https://citation-file-format.github.io/) is commonly used to specify citation metadata for software and datasets. As part of FAIR practices, providing clear citation guidelines facilitates re-use of software in academia, and helps to establish software and data as scientific output.

However, the CFF format is not used for other types of academic output, so researchers outside of computational fields are often not familiar with it. Publishing platforms like Github and Zenodo will parse the CFF file and offer other formats in the user interface, which helps to bridge this gap. But when we collaborate with researchers, we want to agree on the citation *before* we publish the data on a platform.

This application was meant to fill that gap - it allows us send a CFF file to a researcher and point to an easy conversion tool where they can inspect the citation in other formats. As a web application, the tool does not require any installation.

At present, there does not seem to be another no-installation option for this, based on the [available tools](https://github.com/citation-file-format/citation-file-format#tools-to-work-with-citationcff-files-wrench). This application is intended as a stopgap solution, and may be taken offline if a better alternative emerges.

On a technical level, this site is just an interface for [citation.js](https://citation.js.org/). The citation.js website includes a similar demo form, but this does not include the CFF plugin.


## Read more

- If you want to contribute to the project, see [CONTRIBUTING.md](./CONTRIBUTING.md)
- [CITATION.cff](./CITATION.cff) contains citation guidelines.
- This software is shared with a BSD 3-Clause licence. [LICENSE](./LICENSE) contains the full licence text.

