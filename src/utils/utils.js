export const sections = ["home", "features", "contact"]; //  section IDs

export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = -document.querySelector("nav").offsetHeight;
    const yPosition =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
};
