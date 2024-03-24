import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { Abi, encodeFunctionData, parseEther, parseUnits } from 'viem';
import { base, baseSepolia } from 'viem/chains';
import type { FrameTransactionResponse } from '@coinbase/onchainkit/frame';
import { peasContractABI } from '@/utils/peasContractABI';

async function getResponse(req: NextRequest): Promise<NextResponse | Response> {
  const body: FrameRequest = await req.json();
  const { isValid } = await getFrameMessage(body, {
    neynarApiKey: 'NEYNAR_ONCHAIN_KIT',
  });

  if (!isValid) {
    return new NextResponse('Message not valid', { status: 500 });
  }

  // const data = encodeFunctionData({
  //   abi: [
  //     {
  //       constant: false,
  //       inputs: [
  //         {
  //           name: '_spender',
  //           type: 'address',
  //         },
  //         {
  //           name: '_value',
  //           type: 'uint256',
  //         },
  //       ],
  //       name: 'approve',
  //       outputs: [
  //         {
  //           name: '',
  //           type: 'bool',
  //         },
  //       ],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function',
  //     },
  //   ],
  //   functionName: 'approve',
  //   args: ['0x3039e4a4a540F35ae03A09f3D5A122c49566f919', BigInt(5000000)],
  // });

  // const txData: FrameTransactionResponse = {
  //   chainId: `eip155:${base.id}`, // Remember Base Sepolia might not work on Warpcast yet
  //   method: 'eth_sendTransaction',
  //   params: {
  //     abi: [],
  //     data,
  //     to: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  //     value: '0',
  //   },
  // };

  const calldata = encodeFunctionData({
    abi: peasContractABI,
    functionName: 'mint',
    args: ['0x78D98C8DBD4e1BFEfe439f1bF89692FeDCa95C45', BigInt(2), '0x011'],
  });

  const txData: FrameTransactionResponse = {
    chainId: `eip155:${baseSepolia.id}`, // Remember Base Sepolia might not work on Warpcast yet
    method: 'eth_sendTransaction',
    params: {
      abi: peasContractABI as Abi,
      to: '0x742daa58Be1B299cB5010d151597f66dB36859D2',
      data: calldata,
      value: '10000000',
    },
  };

  return NextResponse.json(txData);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
