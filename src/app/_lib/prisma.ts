import { PrismaClient } from "@prisma/client";

declare global {
  const cachedPrisma: PrismaClient;
}
