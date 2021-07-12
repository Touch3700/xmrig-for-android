export const validateWalletAddress = (addr?:string):boolean => addr != null && /[48][0-9AB][1-9A-HJ-NP-Za-km-z]{93}/.test(addr);