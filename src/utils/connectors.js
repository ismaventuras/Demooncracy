import { InjectedConnector } from '@web3-react/injected-connector'

const supportedChainIds = [
    1284,   // GLMR
    1285,   // MOVR
    1287    // TESTNET
]
export const injected = new InjectedConnector({supportedChainIds:supportedChainIds})