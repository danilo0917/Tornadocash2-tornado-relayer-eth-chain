/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ProxyLightABI, ProxyLightABIInterface } from "../ProxyLightABI";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encryptedNote",
        type: "bytes",
      },
    ],
    name: "EncryptedNote",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "_encryptedNotes",
        type: "bytes[]",
      },
    ],
    name: "backupNotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITornadoInstance",
        name: "_tornado",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_commitment",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_encryptedNote",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITornadoInstance",
        name: "_tornado",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_nullifierHash",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_relayer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_refund",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class ProxyLightABI__factory {
  static readonly abi = _abi;
  static createInterface(): ProxyLightABIInterface {
    return new utils.Interface(_abi) as ProxyLightABIInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyLightABI {
    return new Contract(address, _abi, signerOrProvider) as ProxyLightABI;
  }
}