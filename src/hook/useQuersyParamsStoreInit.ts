import rootStore from "@store/RootStore/instance";
import * as Router from "react-router-dom";

export const useQueryParamsStoreInit = (): void => {
  const { search } = Router.useLocation();
  rootStore.query.setSearch(search);
};
