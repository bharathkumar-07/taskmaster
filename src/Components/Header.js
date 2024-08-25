import { useEffect, useState } from "react";
import Logo from "../Assets/logo150.png";

export const Header = () => {

const [themes , setThemes]= useState (JSON.parse(localStorage.getItem('theme')) || "light");

useEffect(() => {
  localStorage.setItem('themes', JSON.stringify(themes))
  document.documentElement.removeAttribute("class");
  document.documentElement.classList.add(themes);
},[themes])



  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmaster Logo"></img>
        <span>Taskmaster</span>
      </div>
      <div className="themeSelector">
        <span onClick={() =>setThemes('light')} className={ themes === 'light' ? "light activeTheme" : "light"}></span>
        <span onClick={() =>setThemes('medium')} className={ themes === 'medium' ? "medium activeTheme" : "medium"}></span>
        <span onClick={() =>setThemes('dark')} className={ themes === 'dark' ? "dark activeTheme" : "dark"}></span>
        <span onClick={() =>setThemes('gOne')} className={ themes === 'gOne' ? "gOne activeTheme" : "gOne"}></span>
        <span onClick={() =>setThemes('gTwo')} className={ themes === 'gTwo' ? "gTwo activeTheme" : "gTwo"}></span>
        <span onClick={() =>setThemes('gThree')} className={ themes === 'gThree' ? "gThree activeTheme" : "gThree"}></span>
      </div>
    </header>
  );
};
