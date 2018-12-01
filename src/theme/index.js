import StyledLib from "styled-lib";
import * as allMixins from "./mixins";
import vars from "./vars";

export const Lib = new StyledLib({
  theme: vars,
  options: {
    UIPROPS: ["color", "passive"],
    VARIANT: { default: "white" }
  },
  mixins: allMixins
});

export const theme = Lib.theme;

export default {
  Instance: Lib,
  theme: Lib.theme,
  ...Lib.helpers
};
