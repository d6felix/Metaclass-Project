import rootStore from "@store/RootStore/instance";

export const useItemCountStoreInit = (): void => {
  rootStore.count.fetchItemCount();
};
