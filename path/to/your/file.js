// Code to add subscription tier metadata to JWT payload

function addTierMetadataToJWT(jwtPayload, tier) {
    jwtPayload.subscriptionTier = tier;
    return jwtPayload;
}