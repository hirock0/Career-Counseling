import AOS from "aos";
import "aos/dist/aos.css";

export const AOS_Animation = AOS.init({
  offset: 200,
  duration: 1000,
  easing: "ease-in-out",
  once: false,
});
