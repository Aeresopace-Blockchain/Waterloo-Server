const { KYCPilotCredential } = require("./vcHelpers/KYCAgeCredential");

// design your own customised authentication requirement here using Query Language
// https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/

const humanReadableAuthReason = "You are not part of pilot members in this company";

const credentialSubject = {
  licenseID: {
    // users must be born before this year
    // birthday is less than Jan 1, 2023
    $gt: 1000,
  },
};

const proofRequest = KYCPilotCredential(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
