import mongoose from "mongoose";

const bannerSchema = mongoose.Schema(
  {
    title: String,
    link: String,
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
    tests: [
      {
        testId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Test",
        },
        title: String,
      },
    ],
    packages: [
      {
        packageId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Package",
        },
        title: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

var Banner = mongoose.model("Banner", bannerSchema);
var Scrollmenu = mongoose.model("Scrollmenu", scrollmenuSchema);

export { Banner, Scrollmenu };
