import mongoose from "mongoose";

const bannerSchema = mongoose.Schema(
  {
    title: String,
    secTitle: String,
    img: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const scrollmenuSchema = mongoose.Schema(
  {
    title: String,
    icon: String,
  },
  {
    timestamps: true,
  }
);

var Banner = mongoose.model("Banner", bannerSchema);
var Scrollmenu = mongoose.model("Scrollmenu", scrollmenuSchema);

export { Banner, Scrollmenu };
