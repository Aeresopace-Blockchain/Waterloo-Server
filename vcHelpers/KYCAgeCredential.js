module.exports = {
    // VC type: KYCAgeCredential
    // https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld
    KYCPilotCredential: (credentialSubject) => ({
      id: 1,
      circuitId: "credentialAtomicQuerySigV2",
      query: {
        allowedIssuers: ["*"],
        type: "ProofOfEmployee",
        context: "https://raw.githubusercontent.com/Aeresopace-Blockchain/Waterloo-Server/main/schema/proof-of-employee.jsonId",
        credentialSubject,
      },
    }),
    // See more off-chain examples
    // https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/#equals-operator-1
  };
  