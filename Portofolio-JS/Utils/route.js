import { printTemplate as Dashboard } from "../Pages/Dashboard/Dashboard";

export const initControler = async (route) => {
    switch (route) {
      case undefined:
        localStorage.getItem("user") ? Dashboard() : Login();
        break;
  
  
 

      case "Dashboard":
        Dashboard();
        break;
  
      default:
        break;
    }
  };