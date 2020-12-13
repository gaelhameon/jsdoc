const { Doclet } = require('../../../index');

const myComment = `/**
* @typedef FactorizeVscsInVscCollectionExecuteArgs
* @property {VehicleSchedulesCollection} sourceVscColl
* @property {Object|string} [configSet=toto]
* @property {Object} other
* @property {Number=} other.param
*/`;

const expectedResult = {
  "comment": "/**\n* @typedef FactorizeVscsInVscCollectionExecuteArgs\n* @property {VehicleSchedulesCollection} sourceVscColl\n* @property {Object|string} [configSet=toto]\n* @property {Object} other\n* @property {Number=} other.param\n*/",
  "meta": {
    "code": {}
  },
  "kind": "typedef",
  "name": "FactorizeVscsInVscCollectionExecuteArgs",
  "properties": [
    { "type": { "names": ["VehicleSchedulesCollection"] }, "name": "sourceVscColl" },
    { "type": { "names": ["Object", "string"] }, "optional": true, "defaultvalue": "toto", "name": "configSet" },
    { "type": { "names": ["Object"] }, "name": "other" },
    { "type": { "names": ["Number"] }, "optional": true, "name": "other.param" }
  ],
  "longname": "FactorizeVscsInVscCollectionExecuteArgs"
}

const myDoclet = new Doclet(myComment);
console.log(JSON.stringify(myDoclet) === JSON.stringify(expectedResult));

// describe('standaloneDoclet', () => {
//     it('works', () => {
//         const myDoclet = new Doclet(myComment);

//         console.log(myDoclet);

//         expect(JSON.stringify(new Doclet(myComment))).toEqual(JSON.stringify(expectedResult));
//     });
// });


