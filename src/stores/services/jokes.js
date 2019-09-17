import { clientApi } from "@/utils/clientApi";

export const getJokes = () => clientApi("get", "jokes/random");
