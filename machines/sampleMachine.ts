import { createMachine } from "xstate";


export const sampleMachine = createMachine({
/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYgFkB5AVQGUBRDgDU+AJQDaABgC6iUAAdysXJVzl8skAA9EAWgAsAThIBWYxIDsADgCMAJmMAaEAE9EAZlslz1y+eMBffyc0LDxCUmx6JlZOXgEuABVJGSQQBSUVNQ1tBB9jL0tja2MANnsnVwQ9PRJrauM3OwDApwoIOA0QnAJiDXTlVXVUnJ0DcxMzKyaK3WtrEpJ7FpAusOIyKloGZgg+xQGs4d03fPsp8pddW0svZuCMbvCSSO3IPYzB7OPT43PHS9yEnyfkCgSAA */

  initial: "notHovered",
  states: {
    notHovered: {
      on: {
        MOUSEOVER: {
          target: "hovered",
        }
      },
    },
    hovered: {
      on:{
        MOUSEOUT: {
          target: "notHovered",
      },
    }
    },
  },
});