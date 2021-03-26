**Pier Styles/SCSS Helper**

### 📁 Abstracts

>📁 *font-awesome-icons*

All styles relating to Font Awesome icons

>📄 *_colors.scss*

All color variables and functions

>📄 *_fonts.scss*

Font import and variables

>📄 *_functions.scss*

Custom helper SCSS functions

>📄 *_mixins.scss*

Custom helper SCSS mixins

>📄 *_inputs.scss*

Variables relating to input component sizing

### 📁 Components

>📄 *[component name].scss*

Component SCSS style sheets should be organized like so:

 1. Local Variables
 2. Base Classes
 3. Element Classes
 4. State Classes
 5. Size Classes
 6. Color Classes
 7. Other Modifier Classes

**Make sure you are doing the following:**

 - Linking colors and sizing with variables
 - Adding media queries
 - Use `@for` loops when building lots of sizes and color modifiers from variables
 - **TEST, TEST, TEST!**

### 📁 Utilities

>📄 *[utility class].scss*

All of Pier's helper/utility classes

### 📄 main.scss

Import all SCSS files for compiling here!