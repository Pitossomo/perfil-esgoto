const NDIGITS = 2;

export const columns = [
  // TODO - Add inverse property in each column, to transform grid string value into elements object value
  { name: "id", header: "Id", unit: null, type: "number", gridValue: el => el.id.toFixed(0) },
  { name: "nt1", header: "NT1", unit: "m", type: "number", gridValue: el => el.nt1.toFixed(NDIGITS) },
  { name: "prof1", header: "Prof1", unit: "m", type: "number", gridValue: el => el.prof1.toFixed(NDIGITS) },
  { name: "nf1", header: "NF1", unit: "m", type: "number", gridValue: el => (el.nt1 - el.prof1).toFixed(NDIGITS) },  // nf1
  { name: "nt2", header: "NT2", unit: "m", type: "number", gridValue: el => (el.nt2).toFixed(NDIGITS) },    // nt2
  { name: "prof2", header: "Prof2", unit: "m", type: "number", gridValue: el => (el.prof2).toFixed(NDIGITS) },    // prof2
  { name: "nf2", header: "NF2", unit: "m", type: "number", gridValue: el => (el.nt2 - el.prof2).toFixed(NDIGITS) },   // nf2
  { name: "dist", header: "Dist.", unit: "m", type: "number", gridValue: el => (el.dist).toFixed(NDIGITS) },     // dist
  { name: "diam", header: "DN", unit: "mm", type: "number", gridValue: el => (el.diam).toFixed(0) },     // dist
  { name: "mat", header: "Material", unit: null, type: "string", gridValue: () => "PVC" }, //mat - TODO
  { name: "decl", header: "Decliv.", unit: "%", type: "number", gridValue: el => (((el.nt1 - el.prof1) - (el.nt2 - el.prof2))/el.dist*100).toPrecision(3) }, //decl
  { name: "vazao", header: "Vazão", unit: "l/s", type: "number", gridValue: () => 1.5 }, // vazao - TODO
  { name: "yD", header: "Lâmina", unit: "%", type: "number", gridValue: () => 50 }, // yD - TODO
  { name: "ttrat", header: "T.Trat.", unit: "kPa", type: "number", gridValue: () => 1 }, //ttrat - TODO
  { name: "veloc", header: "Veloc.", unit: "m/s", type: "number", gridValue: () => 1 }, //veloc - TODO
];