var baseInputPropsMixin = {
  props: {
    placeholder: {
      type: String,
      default: "Add item"
    },
    maxlength: {
      type: [Number, String],
      default: 50
    }
  }
};

export default baseInputPropsMixin;
