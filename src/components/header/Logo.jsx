import LogoImage from "../../assets/logo.svg";

export default function logo() {
  return (
    <a href="/">
      <img className="h-9" src={LogoImage} alt="Weather App" />
    </a>
  );
}
