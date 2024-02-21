const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/countryapi");

const CountrySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  topLevelDomain: [{ type: String }],
  alpha2Code: { type: String, required: true },
  alpha3Code: { type: String, required: true },
  callingCodes: [{ type: String }],
  capital: { type: String, required: true },
  altSpellings: [{ type: String }],
  subregion: { type: String },
  region: { type: String, required: true },
  population: { type: Number },
  latlng: [{ type: Number }],
  demonym: { type: String },
  area: { type: Number },
  timezones: [{ type: String }],
  borders: [{ type: String }],
  nativeName: { type: String, required: true },
  numericCode: { type: String },
  flags: {
    svg: { type: String },
    png: { type: String }
  },
  currencies: [{
    code: { type: String },
    name: { type: String },
    symbol: { type: String }
  }],
  languages: [{
    iso639_1: { type: String },
    iso639_2: { type: String },
    name: { type: String },
    nativeName: { type: String }
  }],
  translations: {
    br: { type: String },
    pt: { type: String },
    nl: { type: String },
    hr: { type: String },
    fa: { type: String },
    de: { type: String },
    es: { type: String },
    fr: { type: String },
    ja: { type: String },
    it: { type: String },
    hu: { type: String }
  },
  flag: { type: String },
  regionalBlocs: [{
    acronym: { type: String },
    name: { type: String }
  }],
  cioc: { type: String },
  independent: { type: Boolean }
},
{
    collection: "country"
}
);

module.exports = mongoose.model('Country', CountrySchema);
