import { pinia } from "@/store/store"
import { defineStore } from "pinia"

interface Team {
  name: string
  intention: string
  responsible: string
  prerequisites: string[]
  outputs: string[]
}

interface State {
  teams: Team[]
}

const initialState: State = {
  teams: [
    {
      name: "In production",
      intention: "Deliver feature to the user",
      responsible: "Product owner",
      prerequisites: [],
      outputs: ["Users can use the app"],
    },
  ],
}

const useStore = defineStore("production-flow", {
  state: () => ({ ...initialState }),
  actions: {
    addTeam(team: Team) {
      this.$state.teams = [team, ...this.$state.teams]
    },
  },
})

export const useProductionFlow = () => useStore(pinia)
