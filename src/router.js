import Header from "./components/HeaderComponent.vue";
import BuyScreen from "./components/BuyScreen.vue";
import MovementScreen from "./components/MovementScreen.vue";
import MyAccount from "./components/MyAccount.vue";
import PersonalPortfolio from "./components/PersonalPortfolio.vue";
import SaleScreen from "./components/SaleScreen.vue";

const routes = [
  { path: "/", components: { default: MyAccount, header: Header } },
  { path: "/buy", components: { default: BuyScreen, header: Header } },
  { path: "/sale", components: { default: SaleScreen, header: Header } },
  {
    path: "/movement",
    components: { default: MovementScreen, header: Header },
  },
  {
    path: "/portfolio",
    components: { default: PersonalPortfolio, header: Header },
  },
];

export default routes;
