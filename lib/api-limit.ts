import { auth } from "@clerk/nextjs";

import prisma from "./prismadb";
import { MAX_FREE_COUNT } from "@/constents";

// To incries the API limits
export const increaseApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  // TO check the user is there or not
  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (userApiLimit) {
    await prisma.userApiLimit.update({
      where: {
        userId,
      },
      data: {
        count: userApiLimit.count + 1,
      },
    });
  } else {
    await prisma.userApiLimit.create({
      data: {
        userId,
        count: 1,
      },
    });
  }
};

//To check the liniit
export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNT) {
    return true;
  } else {
    return false;
  }
};

//To get the Count
export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
};
