export const podContractABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_productName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_productDataURI',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_previewImage',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_finiteSupply',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '_supply',
        type: 'uint256',
      },
    ],
    name: 'createProduct',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'platformOwner',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnableInvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'creator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'product',
        type: 'address',
      },
    ],
    name: 'ProductCreated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getProduct',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'creator',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'productAddress',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'productName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'productDataURI',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'previewImage',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'finiteSupply',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'supply',
            type: 'uint256',
          },
        ],
        internalType: 'struct Pod.Product',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getProducts',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'creator',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'productAddress',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'productName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'productDataURI',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'previewImage',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'finiteSupply',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'supply',
            type: 'uint256',
          },
        ],
        internalType: 'struct Pod.Product[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getProductsCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
