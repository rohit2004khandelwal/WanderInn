const mongoose = require('mongoose');
const schema = mongoose.Schema;

const listingSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
    filename: {
        type: String,
        default: "listingimage"
    },
    url: {
        type: String,
        default: "c:/Users/hp/Downloads/muhammad-kamran-khan-zo_udYMcaVc-unsplash.jpg",
        set: (v) => v === "" ? "c:/Users/hp/Downloads/muhammad-kamran-khan-zo_udYMcaVc-unsplash.jpg" : v,
    }
},
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;