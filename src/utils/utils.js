export const sections = ["home", "features", "contact"]; // Make sure that you have included the section ID in the added section.

export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = -document.querySelector("nav").offsetHeight;
    const yPosition =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
};
