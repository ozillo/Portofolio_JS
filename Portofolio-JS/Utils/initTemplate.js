import { printTemplate as printHeader } from "../Components/Header/Header";
import { printTemplate as printFooter } from "../Components/Footer/Footer";
import { initControler } from "./route";


export const initTemplate=() => {
const app=document.querySelector("#app");
const main = document.createElement("main");
const Header = document.createElement("Header");
const Footer = document.createElement("Footer");

app.append(header,main, footer);
printHeader();
initControler(undefined);
printFooter();
};
