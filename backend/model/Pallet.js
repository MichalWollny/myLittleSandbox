import mongoose from "mongoose";

const palletSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  weight: Number,
  lastUpdated: { type: Date, default: Date.now },
});

const Pallet = mongoose.model("pallet", palletSchema);
export default Pallet;
