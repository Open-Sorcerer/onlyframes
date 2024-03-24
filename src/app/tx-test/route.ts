import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import {
  Abi,
  createPublicClient,
  encodeFunctionData,
  getContract,
  http,
} from 'viem';
import { baseSepolia } from 'viem/chains';
import { peasContractABI } from '@/utils/peasContractABI';
import type { FrameTransactionResponse } from '@coinbase/onchainkit/frame';

async function getResponse(req: NextRequest): Promise<NextResponse | Response> {
  const body: FrameRequest = await req.json();
  const { isValid } = await getFrameMessage(body, {
    neynarApiKey: 'NEYNAR_ONCHAIN_KIT',
  });

  if (!isValid) {
    return new NextResponse('Message not valid', { status: 500 });
  }

  const { searchParams } = new URL(req.url);
  const address = searchParams.get('address');

  const calldata = encodeFunctionData({
    abi: peasContractABI,
    functionName: 'mint',
    args: ['0x78D98C8DBD4e1BFEfe439f1bF89692FeDCa95C45', BigInt(2), '0x011'],
  });

  const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http(),
  });

  const peasContractRegistry = getContract({
    address: `${address}` as any,
    abi: peasContractABI,
    client: publicClient,
  });

  const price = await peasContractRegistry.read.price();
  console.log('price', price?.toString());

  const txData: FrameTransactionResponse = {
    chainId: `eip155:${baseSepolia.id}`, // Remember Base Sepolia might not work on Warpcast yet
    method: 'eth_sendTransaction',
    params: {
      abi: peasContractABI as Abi,
      to: `${address}` as any,
      data: calldata,
      value: price?.toString() ?? '0',
    },
  };

  return NextResponse.json(txData);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
