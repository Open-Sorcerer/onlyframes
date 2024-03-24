import { peasContractABI } from '@/utils/peasContractABI';
import { createFrames, Button } from 'frames.js/next';
import { createPublicClient, getContract, http } from 'viem';
import { baseSepolia } from 'viem/chains';

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http(),
  });

  const peasContractRegistry = getContract({
    address: '0x742daa58Be1B299cB5010d151597f66dB36859D2',
    abi: peasContractABI,
    client: publicClient,
  });

  const price = await peasContractRegistry.read.price();
  console.log('price', price?.toString());

  return {
    image:
      'https://gateway.pinata.cloud/ipfs/Qmf1Kz5XQJkN9pmBuPkL4QqxSNHJQUNf5uPEz7GUxkJRuj',
    buttons: [
      <Button action='tx' target='/tx-frame' post_url='/frames'>
        Say Yes
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
