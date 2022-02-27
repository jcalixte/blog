import { pinia } from "@/store/store";
import { defineStore } from "pinia";

interface Step {
  name: string;
  prerequisites: string[];
  outputs: string[];
}

interface State {
  steps: Step[];
}

const initialState: State = {
  steps: [
    {
      name: "In production",
      prerequisites: [],
      outputs: ["Users can use the app"],
    },
  ],
};

const useStore = defineStore("production-flow", {
  state: () => ({ ...initialState }),
  actions: {
    addStep(step: Step) {
      this.$state.steps = [step, ...this.$state.steps];
    },
  },
});

export const useProductionFlow = () => useStore(pinia);
